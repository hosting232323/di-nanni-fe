import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

// Le rotte statiche sono prerenderizzate in dist/<rotta>/index.html dal plugin
// build/static-seo.js. Le serviamo qui, prima di express.static, perche' quello
// risponderebbe con un 301 verso lo slash finale: una catena di redirect che
// renderebbe l'URL servito diverso dal canonical e dalla sitemap.
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path === '/' || path.extname(req.path)) return next();

  const candidate = path.join(distPath, req.path, 'index.html');

  if (!candidate.startsWith(distPath) || !fs.existsSync(candidate)) return next();

  return res.sendFile(candidate);
});

app.use(express.static(distPath));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
