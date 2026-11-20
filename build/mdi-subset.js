// Genera src/styles/mdi-subset.css: solo le icone mdi realmente usate, al posto
// dei ~7000 glifi di @mdi/font (577 KB di CSS bloccante). Lanciato da npm run dev/build.
import fs from 'node:fs';
import path from 'node:path';


const SOURCES = ['src', 'node_modules/generic-module/src', 'node_modules/vuetify/lib/iconsets/mdi.js'];
const CSS_IN = 'node_modules/@mdi/font/css/materialdesignicons.css';
const CSS_OUT = 'src/styles/mdi-subset.css';
const EXTENSIONS = ['.vue', '.js', '.html', '.md'];


const collectNames = (target, names) => {
  if (!fs.existsSync(target)) return;
  if (fs.statSync(target).isDirectory()) {
    fs.readdirSync(target).forEach(entry => collectNames(path.join(target, entry), names));
  } else if (EXTENSIONS.includes(path.extname(target))) {
    for (const match of fs.readFileSync(target, 'utf8').matchAll(/mdi-[a-z0-9]+(?:-[a-z0-9]+)*/g)) names.add(match[0]);
  }
};


const names = new Set();
SOURCES.forEach(source => collectNames(source, names));

const css = fs.readFileSync(CSS_IN, 'utf8')
  .replaceAll('../fonts/', '../../node_modules/@mdi/font/fonts/')
  .replace(/^\.(mdi-[a-z0-9-]+)::before \{\n  content: "[^"]+";\n\}\n\n?/gm, (rule, name) => names.has(name) ? rule : '');

fs.writeFileSync(CSS_OUT, css);
console.log(`mdi-subset: ${names.size} nomi cercati, ${css.length} byte (da ${fs.statSync(CSS_IN).size})`);
