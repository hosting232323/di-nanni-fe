// Testo delle pagine pubbliche, per l'HTML statico.
//
// Il plugin build/static-seo.js lo scrive dentro il <noscript> di ogni rotta,
// cosi' chi non esegue JavaScript - assistenti AI, anteprime, crawler - legge
// il contenuto della pagina e non solo titolo e un paragrafo.
//
// E' la trascrizione del testo che le view mostrano: quando una pagina cambia
// va aggiornata anche la sua voce qui. Ogni blocco ha `h` (sottotitolo,
// opzionale) e uno o piu' tra `p` (paragrafi), `ul` (elenco puntato) e `ol`
// (elenco numerato). Solo dati: letto da Node in fase di build, niente alias
// '@' ne' import di asset.

export const seoContent = {
  '/chi-sono': [
    {
      h: 'Chi Sono',
      p: [
        'Sono la Dott.ssa Doriana Di Nanni, laureata in Medicina e Chirurgia presso l\'Università di Bari nel 2014 e specializzata in Anatomia Patologica a Bologna nel 2020. Parallelamente ho frequentato la Scuola di Fitoterapia e Aromaterapia, la Scuola di Agopuntura e numerosi corsi di perfezionamento e aggiornamento in ambito olistico. Integro la medicina tradizionale con tecniche complementari per offrire un approccio completo alla salute. Credo in un percorso di cura personalizzato, che tenga conto delle esigenze specifiche di ogni paziente. La mia missione è migliorare la qualità della vita attraverso un approccio scientifico ma allo stesso tempo umano.'
      ]
    },
    {
      h: 'Come Procedo',
      p: [
        'Il mio approccio terapeutico combina la medicina tradizionale con metodologie integrate. Durante la prima visita, effettuo un\'analisi approfondita dello stato di salute del paziente, valutando sintomi, stile di vita, abitudini alimentari e tanto altro. Dopo aver raccolto tutte le informazioni necessarie, propongo un piano terapeutico personalizzato, un vero e proprio percorso che può includere trattamenti di medicina convenzionale e tecniche complementari (principalmente agopuntura e fitoterapia, ma non solo).'
      ]
    },
    {
      h: 'La Mia Storia',
      p: [
        'Per me sono fondamentali l\'ascolto e l\'empatia per creare una relazione di fiducia con i pazienti e accompagnarli nel loro percorso di benessere (preventivo e terapeutico). Oggi esercito a Bari e mi dedico alla cura dei pazienti con un metodo che valorizza sia la medicina scientifica sia le terapie alternative, cercando sempre il miglior equilibrio tra corpo e mente. Il mio percorso di formazione e le esperienze professionali mi hanno portato a sviluppare una visione olistica della medicina, che metto in pratica ogni giorno per aiutare i miei pazienti.'
      ]
    },
    {
      h: 'Integrazione e Olismo',
      p: [
        'Sono convinta che il benessere sia il risultato di un equilibrio tra corpo e mente, una visione a 360° della salute umana. L\'obiettivo del percorso che effettuo con i pazienti non è solo curare le malattie, ma anche fare prevenzione avendo come obiettivo il benessere della persona. Se desideri un percorso personalizzato che prenda in considerazione le tue esigenze, contattami per scoprire insieme come posso aiutarti.'
      ]
    }
  ],

  '/trattamenti/agopuntura': [
    {
      h: 'Cos\'è l\'Agopuntura?',
      p: [
        'L\'agopuntura è una pratica della medicina tradizionale cinese che consiste nell\'inserire aghi sottili in specifici punti del corpo per riequilibrare l\'energia vitale. Ha il vantaggio di non utilizzare farmaci, non causa effetti collaterali o complicanze nella maggior parte dei casi, è utile nei pazienti in cui i farmaci possono creare allergie o sono controindicati.',
        'È un trattamento sicuro e ha pochissimi effetti collaterali, (dolore e lividi e/o sanguinamenti sulle parti in cui entrano i piccoli aghi). Non è doloroso e cura molte patologie dolorose (in ambito osteomuscolare e post-operatorio) e non (disturbi neurologici, dermatologici, digestivi, ginecologici di pertinenza otorinolaringoiatrica etc.)'
      ]
    },
    {
      h: 'Sulle sedute',
      p: [
        'Il primo incontro potrebbe durare quasi un\'ora, le sedute di mantenimento dai 30 ai 40 minuti. Il tempo che intercorre con gli aghi inseriti è variabile dai 20 ai 30 minuti. Gli aghi utilizzati sono usa e getta, sono molto sottili e flessibili. Il loro inserimento potrebbe provocare un leggero "effetto pizzicotto", un formicolio, un minimo senso di calore ma non sono dolorosi (non devono esserlo per l\'intera durata della seduta). Dopo la seduta è consigliabile evitare pesanti esercizi fisici e grandi abbuffate con alcolici.'
      ]
    },
    {
      h: 'Riconoscimenti ufficiali',
      p: [
        'Ad oggi è riconosciuta e validata dai sistemi sanitari nazionali e dall\'Organizzazione Mondiale della Sanità.',
        'In Italia è stata inserita nei LEA (livelli essenziali di assistenza), quindi in alcune regioni è possibile accedere a questi trattamenti tramite il Servizio Sanitario Nazionale.'
      ]
    }
  ],

  '/trattamenti/fitoterapia-aromaterapia': [
    {
      h: 'L\'Aromaterapia',
      p: [
        'L’aromaterapia è una forma di fitoterapia che utilizza gli oli essenziali ricavati da diversi metodi di estrazione di determinate componenti delle piante (fiori, corteccia, radici, foglie, frutti etc). Possono essere assunti per via inalatoria, orale o cutanea. La sua funzione è estremamente eterogenea ma molto efficace e combinabile con altre forme di terapia e prevenzione. Il trattamento prevede un percorso personalizzabile con durate variabili.'
      ]
    }
  ],

  '/trattamenti/taopatch': [
    {
      h: 'Cos\'è il Taopatch?',
      p: [
        'Il Taopatch è un dispositivo innovativo medico e nanotecnologico, di classe 1 CE, che emette luce terapeutica, stimolando punti energetici del corpo e favorendo il riequilibrio e il benessere generale. Ha il vantaggio di essere non invasivo (non rilascia sostanze chimiche), indolore e privo di effetti collaterali, ed è particolarmente utile per chi cerca un supporto naturale senza farmaci.',
        'È un trattamento sicuro e semplice da utilizzare: si applica sulla pelle in specifici punti con un nastrocerotto adesivo, resiste agli urti e all\'acqua. Sono dispositivi indossabili 24 h su 24 e durano circa 3 anni.'
      ]
    },
    {
      h: 'Sulle applicazioni',
      p: [
        'Il Taopatch migliora disturbi muscolari, posturali, neurologici e altri squilibri legati allo stress e alla fatica. Migliora il movimento e la postura del corpo, riducendo dolori di ogni genere. Ottimizza le prestazioni fisiche e biologiche del corpo, portando a un benessere globale del paziente. E\' possibile integrarlo con altre terapie e trattamenti. È importante rivolgersi a professionisti applicatori Taopatch per creare un percorso ottimale e personalizzato per ottenere il massimo dei risultati.'
      ]
    },
    {
      h: 'Riconoscimenti ufficiali',
      p: [
        'Ad oggi il Taopatch è supportato da numerosi studi clinici e ricerche scientifiche che ne attestano l’efficacia nel migliorare il benessere fisico e l’equilibrio energetico. In alcuni paesi è utilizzato come complemento nei trattamenti fisioterapici e di medicina integrata, valorizzando un approccio naturale alla salute.'
      ]
    }
  ],

  '/trattamenti/sobada-rebozo': [
    {
      h: 'Il rebozo',
      p: [
        'Il rebozo è un tessuto di tradizione messicana utilizzato in un percorso di crescita e trasformazione della donna in tutte le sue fasi di vita (periodo fertile, gravidanza, parto, post-parto e menopausa). È un percorso integrabile con altri approcci olistici.'
      ]
    }
  ],

  '/trattamenti/tecniche-complementari': [
    {
      h: 'Tecniche Complementari',
      p: [
        'Sono tecniche che possono essere eseguite da sole e/o assieme ad altri trattamenti, come per esempio l\'agopuntura.'
      ]
    },
    {
      h: 'La Coppettazione',
      p: [
        'La coppettazione utilizza delle “coppette” di diverso materiale che creano un effetto sottovuoto a contatto con la pelle (come una specie di ventosa). Si lavora su determinati punti oppure lungo un meridiano particolare. È possibile mantenere la coppetta in un punto per pochi minuti. È eseguibile a caldo o a freddo. In entrambi i casi è possibile che a termine del trattamento rimangano dei segni non dolorosi sulla pelle che in pochissimi giorni andranno via da soli.'
      ]
    }
  ],

  '/blog': [
    {
      h: 'Ultimi post',
      p: [
        '1 min di lettura'
      ]
    },
    {
      h: 'Ci sentiamo tutti un po\' Alice',
      p: [
        '"Qui devi correre più che puoi per restare nello stesso posto. Se vuoi andare da qualche parte devi correre almeno il doppio" Siamo bravissimi a correre, a fare tutto senza pause e abbiamo adattato il nostro respiro a questo ritmo! Questo non è prendersi cura di sé! Prova a dedicare del tempo di qualità per te: per il tuo corpo e per la tua mente! Cosa succederà? - la quota di stress nella tua vita si abbasserà - migliorerà la qualità del tuo sonno - i tuoi dolori si allevieranno - respirerai meglio - saprai affrontare meglio le difficoltà della vita di tutti i giorni - ne beneficieranno le persone che ami attorno a te Cosa aspetti? Inizia ora!'
      ]
    },
    {
      h: 'Disturbi del Sonno – Parte 2: Strategie Naturali per un Riposo Profondo',
      p: [
        'Dopo aver visto le cause dell’insonnia, oggi scopriamo come riequilibrare il sonno in modo naturale! ✨ 💆‍♀️ Agopunti per il rilassamento: 🔹 Yintang (tra le sopracciglia) → calma la mente e riduce l’ansia 🔹 Punto sul polso (Shenmen) → riequilibra il sistema nervoso e favorisce il sonno profondo 🍵 Fitoterapia per dormire meglio: 🌿 Passiflora → rilassa il sistema nervoso 🌼 Camomilla e valeriana → effetto sedativo naturale 🌱 Biancospino e melissa → riducono ansia e palpitazioni 🧘‍♂️ Stretching e respirazione per la sera ✔️ Allungamenti dolci per sciogliere tensioni ✔️ Respiro profondo e diaframmatico per abbassare il cortisolo e rilassare il corpo 📌 Vuoi un supporto su misura per migliorare il tuo sonno? Scrivici in DM per un percorso personalizzato!'
      ]
    },
    {
      h: 'Disturbi del Sonno: L’approccio di medicina in 3D (Ep. 1)',
      p: [
        'Il sonno è il nostro reset naturale, ma cosa succede quando non arriva? 💤 👉 guardando il problema con le lenti occidentali, l’insonnia può dipendere da: 🔹 Fattori fisici → squilibri ormonali, problemi digestivi, dolore cronico 🔹 Fattori psicologici → ansia, stress, iperattività mentale, rimuginio dei pensieri. Ma se guardiamo il problema con le lenti orientali, il sonno è legato al flusso del Qi e all’equilibrio tra Corpo, Mente e Spirito. ✨ 🌿 Come riequilibrare il sonno in modo naturale? 🔸 Agopuntura → riequilibra il sistema nervoso e può stimolare il rilascio di endorfine 🍵 Fitoterapia → diverse erbe rilassanti favoriscono il riposo 🧘‍♀️ Tecniche di rilassamento → meditazione, respiro profondo e automassaggi per riequilibrare l’energia 📌 Questo è solo l’inizio! Nei prossimi video approfondiremo meglio le varie soluzioni! Hai problemi di sonno? Scrivimi in DM per un percorso personalizzato!'
      ]
    },
    {
      h: 'Crema Mani e Piedi: Relax per Dormire Meglio',
      p: [
        'Per i disturbi del sonno può venirci in aiuto l’aroma terapia! Ecco un rimedio semplice per rilassarti prima di andare a letto! Ecco cosa ti serve: * 5 gocce di Vetiver * 5 gocce di Camomilla Romana * 5 gocce di Lavanda Vera * Crema mani neutra (base) * Una pipetta * un contenitore da 30ml Come fare: 1️⃣ Mescola gli oli essenziali. 2️⃣ Aggiungili alla crema neutra. 3️⃣ Mescola bene, fino a che non è tutto omogeneo. 4️⃣ Versa il composto nel contenitore. Prima di andare a dormire, applica la crema su mani e/o sui piedi, massaggia bene e, una volta assorbita la crema sulle mani, fai dei respiri profondi con le mani sul viso…sentirai subito un senso di calma, che ti accompagnerà nel sonno. 🌙💆‍♀️ Tutto quello che ti serve lo trovi facilmente online o in erboristeria. E credimi, questa routine è un piccolo momento di benessere che fa tutta la differenza! 💖'
      ]
    }
  ],

  '/contatti': [
    {
      h: 'Contattaci',
      p: [
        'Compila il modulo per richiedere un appuntamento o farci una domanda. Ti risponderemo il prima possibile!',
        '+39 379 218 5146 Chatta su WhatsApp'
      ]
    },
    {
      ul: [
        'Via Corfù 13, 70121 Bari — OpenStreetMap'
      ]
    }
  ],

  '/': [
    {
      h: 'Non siamo né un sintomo né una malattia',
      p: [
        'Dott.ssa Doriana Di Nanni, medico chirurgo a Bari. Indirizzo: Via Corfù, 13, 70121 Bari. Orario studio: dal lunedì al sabato, solo su appuntamento.'
      ]
    },
    {
      h: 'Chi sono',
      p: [
        'Sono la Dott.ssa Doriana Di Nanni e credo che ogni persona meriti un percorso di cura su misura, che unisca medicina tradizionale e tecniche complementari.',
        'La mia missione è aiutarti a migliorare la qualità della tua vita con un approccio scientifico e umano.'
      ]
    },
    {
      h: 'Trattamenti',
      p: [
        'Ogni persona è unica, così come il percorso verso il benessere. Ecco perché offro una varietà di trattamenti pensati per rispondere a esigenze diverse, sia fisiche che emotive.',
        'Dall’agopuntura alla fitoterapia, dal Taopatch® alle tecniche corporee tradizionali, ogni disciplina può essere utile in molti ambiti.',
        'Se hai un disturbo o un disagio e ti chiedi se uno di questi approcci possa aiutarti, contattami: insieme possiamo valutare la strada migliore per te.'
      ],
      ul: [
        'Agopuntura',
        'Fitoterapia e Aromaterapia',
        'Taopatch',
        'Sobada e Rebozo',
        'Tecniche complementari'
      ]
    },
    {
      h: 'Cosa dicono di me',
      ul: [
        'Elisa Zuffa: Con un breve percorso di agopuntura ho potuto dire addio ai dolori mestruali lancinanti con cui combattevo da anni.',
        'Emanuele Costanza: La mia cefalea muscolo tensiva è ormai un lontano ricordo, grazie ai trattamenti della dottoressa.',
        'Samantha Chiurlia: Non posso che consigliare e ringraziare con tutta me stessa la Dott.sa Di Nanni per l’aiuto che mi ha dato in un momento difficile della mia vita.',
        'Giorgia Neri: L’agopuntura è un’esperienza fantastica che bisogna provare almeno una volta nella vita. Se a praticarla è la dolce Doriana, allora tutto diventa magico!',
        'Carla Bavaro: Grazie alla Dottoressa Di Nanni, la mia insonnia è sparita! Professionale, disponibile, preparata. Consigliatissima.'
      ]
    },
    {
      h: 'Contattami',
      p: [
        'Via Corfù 13, 70121 Bari. Dal lunedì al sabato, solo su appuntamento.',
        'Per info e prenotazioni: telefono o WhatsApp +39 379 218 5146.'
      ]
    }
  ]
};

// Contatti e dati dell'attivita' mostrati nel footer del sito: senza
// JavaScript il footer Vue non si vede, quindi vanno anche nell'HTML statico.
export const seoFooter = [
  'Dott.ssa Doriana Di Nanni - medico chirurgo',
  'Via Corfù, 13, 70121 Bari - dal lunedì al sabato, solo su appuntamento',
  'Telefono e WhatsApp: +39 379 218 5146'
];
