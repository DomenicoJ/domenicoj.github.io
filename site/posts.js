/* DMJ Lab — blog posts data. PLAIN JS, no JSX: new posts are added here
   WITHOUT any build step — edit this file and push, nothing to recompile.

   Post shape:
   {
     slug: "kebab-case-unique",          // becomes the URL: #/insights/<slug>
     date: "YYYY-MM-DD",                 // used for sorting (newest first)
     dateLabel: "8 luglio 2026",         // shown on cards and article page
     tag: "AI",                          // short category label
     title: "...",                       // Italian title
     summary: "...",                     // Italian card summary (1-2 sentences)
     title_en: "...",                    // optional English title
     summary_en: "...",                  // optional English summary
     body: ["paragraph 1", "..."],       // article paragraphs; a string starting
                                         // with "## " renders as a sub-heading.
                                         // OMIT body to make the card link
                                         // straight to LinkedIn instead.
     linkedin: "https://..."             // original LinkedIn post URL
   }
*/
window.POSTS = [
  {
    slug: "panel-onu-ai-concentrazione-calcolo",
    date: "2026-07-06",
    dateLabel: "luglio 2026",
    tag: "Governance",
    title: "Due paesi controllano il 90% del calcolo AI: la posta in gioco del panel ONU",
    summary: "Si apre a Ginevra il primo tavolo intergovernativo dell'ONU sull'intelligenza artificiale, e il report che lo precede fissa la posta in gioco: benefici già reali, rischi che corrono alla stessa velocità, regole che arrancano.",
    title_en: "Two countries control 90% of AI compute: what's at stake at the UN panel",
    summary_en: "The UN's first intergovernmental table on AI opens in Geneva, and the report preceding it sets the stakes: real benefits, risks running just as fast, and regulation lagging behind.",
    body: [
      "Mentre a Ginevra si apre il primo tavolo intergovernativo dell'ONU sull'intelligenza artificiale, un dato del report che lo precede fissa la posta in gioco: due paesi controllano circa il 90% della potenza di calcolo che addestra l'AI più avanzata. Stati Uniti tre quarti, Cina circa il 15%.",
      "Quanto pesa questa concentrazione sul lavoro di chi, in Italia, costruisce servizi e formazione sull'AI senza possedere né i modelli né i data center che li addestrano?",
      "È il report preliminare del primo panel scientifico indipendente dell'ONU sull'AI, uscito il 1° luglio. Riunisce 40 scienziati scelti tra oltre 2.600 candidature da più di 140 paesi. Lo co-presiedono Yoshua Bengio, premio Turing 2018, e Maria Ressa, giornalista e premio Nobel per la pace 2021.",
      "Il mandato di ricerca è scientifico, non regolatorio; i benefici elencati sono già realtà verificabili. L'AI ha previsto la struttura di oltre 200 milioni di proteine, accelerando la ricerca su farmaci e antibiotici. Aiuta a diagnosticare precocemente tumori come quello al seno. Alimenta sistemi di allerta contro l'insicurezza alimentare e amplia l'accesso alla tecnologia per le persone con disabilità.",
      "I rischi corrono alla stessa velocità. Il report cita abusi online e deepfake sessuali, con donne e minori più esposti, disinformazione indistinguibile dal vero, frodi e attacchi informatici, sistemi che rafforzano convinzioni dannose fino ad aggravare crisi di salute mentale, oltre all'impronta ambientale dei data center.",
      "Bengio non addolcisce il messaggio: «Le capacità dell'AI stanno superando sia la comprensione scientifica sia la capacità dei governi di adattarsi». E aggiunge che, con prove crescenti di comportamenti ingannevoli dei modelli, la scienza oggi non può garantire l'assenza di danni gravi.",
      "Il quadro regolatorio purtroppo arranca: nel mondo esistono oltre 40 tra norme e linee guida sull'AI, ma restano frammentate e quasi mai testate sul campo. Molte valutazioni di sicurezza le conducono le stesse aziende che sviluppano i sistemi.",
      "## I miei consigli",
      "Trattate la governance come parte del prodotto e non come un adempimento da sbrigare a valle, pretendendo da fornitori e clienti prove indipendenti di sicurezza al posto delle autocertificazioni.",
      "Conviene mappare per iscritto le dipendenze tecnologiche, perché sapere dove calcolo e dati restano concentrati orienta scelte contrattuali più solide. E vale la pena investire subito in competenze interne, dato che chi non può ispezionare o adattare la tecnologia finisce per subirla.",
      "Il report confluisce nel Global Dialogue on AI Governance, a Ginevra il 6 e 7 luglio; la versione completa è attesa nel 2027. Il panel lo riassume così: l'AI non è né buona né cattiva in sé, e il suo impatto dipende dalle scelte che governi, imprese e società compiono oggi.",
      "«La tecnologia non è né buona né cattiva, e nemmeno neutrale» (Melvin Kranzberg, prima legge della tecnologia, 1986)."
    ]
  },
  {
    slug: "sap-riqualificare-invece-di-licenziare",
    date: "2026-07-04",
    dateLabel: "luglio 2026",
    tag: "Lavoro",
    title: "SAP sceglie la riqualificazione: reinventarsi il lavoro invece di perderlo",
    summary: "Il più grande produttore di software d'Europa scommette sul reskilling al posto dei tagli. Visione lungimirante o rinvio del problema? Cosa insegna alle imprese che stanno automatizzando.",
    title_en: "SAP bets on reskilling: reinventing jobs instead of cutting them",
    summary_en: "Europe's largest software maker bets on reskilling instead of layoffs. Far-sighted vision or a postponed problem? Lessons for companies that are automating.",
    body: [
      "C'è un modo elegante per evitare i licenziamenti: chiedere ai dipendenti di inventarsi un lavoro nuovo.",
      "SAP, il più grande produttore di software d'Europa, scommette sulla riqualificazione al posto dei tagli. Lo racconta il New York Times del 2 luglio 2026, a firma di Jim Tankersley.",
      "Riqualificare invece di licenziare: visione lungimirante o rinvio del problema?",
      "Il contesto pesa: nel 2024 SAP aveva avviato una ristrutturazione arrivata a colpire circa 10.000 posti, alcuni per effetto dell'automazione, senza chiarire quanti fossero legati direttamente all'AI né quali mansioni sparissero.",
      "La contromossa arriva subito dopo. Dal 2023 l'azienda dichiara un saldo positivo di oltre 3.500 posti netti, con figure prima inesistenti come i forward-deployed engineer, tecnici che affiancano i clienti nello sviluppo di soluzioni basate sull'intelligenza artificiale.",
      "La logica è lineare: invece di sostituire le persone, SAP chiede loro di spostarsi verso attività a maggior valore, servendosi di strumenti che migliorano in fretta.",
      "Gli economisti, però, si dividono. Nicola Fuchs-Schündeln, presidente del WZB Berlin Social Science Center, sostiene che l'AI potrebbe salvare l'Europa da una grave carenza di manodopera legata all'invecchiamento demografico. Marcel Fratzscher, presidente del DIW Berlin – German Institute for Economic Research, ne riconosce il potenziale a una condizione precisa: che il continente investa in fretta e in misura adeguata.",
      "Restano i dubbi di merito, perché riconvertire su larga scala richiede tempo, formazione seria e non rende allo stesso modo per ogni mansione.",
      "Un dettaglio di sfondo completa il quadro: lo stesso 2 luglio un memo interno visionato da Bloomberg segnalava una stretta sulle nuove assunzioni, concentrate sui profili AI, insieme a un taglio delle spese non essenziali. La riqualificazione, dunque, nasce dentro una precisa pressione sui costi.",
      "## I miei consigli",
      "Trattate questa vicenda come un segnale operativo e non come una notizia lontana.",
      "Mappate le competenze già presenti in azienda prima di cercarle sul mercato, perché il reskilling costa meno di una ricerca esterna e trattiene la conoscenza dei processi.",
      "Individuate le mansioni ripetitive più esposte all'automazione e ridisegnatele attorno a ciò che l'AI non sa fare, cioè relazione, giudizio e contesto.",
      "Legate la formazione a obiettivi misurabili anziché a corsi generici, perché tra una promessa e un risultato sta sempre la verifica. E parlate con chiarezza alle persone, dato che la fiducia si costruisce dicendo cosa cambia, non tenendolo nascosto.",
      "Come scriveva Alan Kay, il modo migliore per prevedere il futuro è inventarlo."
    ]
  },
  {
    slug: "ford-veterani-conoscenza-tacita",
    date: "2026-07-01",
    dateLabel: "luglio 2026",
    tag: "Casi aziendali",
    title: "Ford richiama i veterani: la conoscenza tacita è il collo di bottiglia dell'AI",
    summary: "Ford ha riassunto circa 350 ingegneri veterani e ha vinto la J.D. Power Initial Quality Study 2026. Non è la rivincita degli umani sulle macchine: è il valore che si sposta verso ciò che non sta nei manuali.",
    title_en: "Ford rehires its veterans: tacit knowledge is AI's bottleneck",
    summary_en: "Ford rehired some 350 veteran engineers and won the 2026 J.D. Power Initial Quality Study. Not humans beating machines — value shifting toward what no manual contains.",
    body: [
      "Ford Motor Company ha riassunto circa 350 ingegneri veterani in tre anni e li ha pagati a caro prezzo per capire che l'esperienza non si carica come un file in un sistema AI.",
      "La notizia vera di questa storia sta nel finale, che molti titoli letti in Europa tagliano: dopo aver riportato in azienda quei tecnici, Ford ha conquistato il primo posto tra i marchi mainstream nella J.D. Power Initial Quality Study 2026, il miglior risultato in sedici anni.",
      "Chi scrive che «l'AI ha fatto cilecca» racconta metà della storia. L'altra metà è che il modello ibrido ha funzionato. Cosa insegna questo caso a chi sta automatizzando i propri processi?",
      "Vale la pena ripercorrere i fatti in ordine. Charles Poon, vicepresidente hardware, lo ha candidamente ammesso ai giornalisti: «pensavamo che bastasse introdurre l'AI e darle in pasto i requisiti di progettazione per ottenere un prodotto di alta qualità». Quella convinzione si è rivelata sbagliata.",
      "Il problema non era la tecnologia, ma la mancanza di repository: i tecnici più esperti avevano lasciato Ford prima di trasferire il loro sapere ai sistemi. Le 900 telecamere basate su AI lavoravano su fondamenta incomplete, e l'automazione amplificava gli errori invece di correggerli.",
      "Kumar Galhotra, chief operating officer, ha spiegato il cambio di rotta: dall'approccio reattivo «trova e ripara» a un modello che previene i difetti prima della linea di montaggio. I veterani oggi riscrivono i dati di addestramento e formano i più giovani. Fanno fare di più all'AI, non di meno.",
      "Serve onestà sul contesto: Ford resta il marchio più richiamato negli Stati Uniti, con 51 campagne nel 2026, che Galhotra definisce un indicatore di coda legato ad auto costruite con il vecchio metodo.",
      "A questo punto arriva la nota stonata: nel luglio 2025, ad Aspen, il CEO Jim Farley aveva dichiarato che «l'intelligenza artificiale sostituirà letteralmente metà dei lavoratori impiegatizi negli Stati Uniti». E Poon stesso lascia intendere che, una volta travasato il sapere, quei veterani potrebbero tornare sostituibili.",
      "Non è la rivincita degli umani sulle macchine, ma qualcosa di più interessante. Il valore si è spostato: la conoscenza tacita, quella che si costruisce in anni di errori e non sta nei manuali, è diventata il collo di bottiglia. Chi la possiede ha leva, almeno finché non l'ha ceduta. La famosa storia del professionista pagato per dare una martellata in un certo modo e in un certo punto…",
      "## I miei consigli",
      "Mappate la conoscenza tacita dei vostri esperti prima di automatizzare, non dopo averli lasciati andare, e siate chiari in ciò che fate.",
      "Trattate i profili senior come fonti di dati di addestramento e non come la prima voce di costo da tagliare.",
      "Misurate l'automazione su un risultato di qualità verificabile, come ha fatto Ford con J.D. Power, e non sul numero di teste rimosse.",
      "«L'esperienza è il nome che ciascuno dà ai propri errori» (Oscar Wilde, Il ventaglio di Lady Windermere)."
    ]
  },
  {
    slug: "notebooklm-florida-state-tutor-ai",
    date: "2026-06-24",
    dateLabel: "giugno 2026",
    tag: "Formazione",
    title: "Un tutor AI per ogni studente: la lezione della Florida State University",
    summary: "La Florida State University ha dato a ogni studente un tutor AI ancorato ai materiali dei docenti. Un caso d'uso già validato sul campo, che parla direttamente alle scuole e agli atenei italiani.",
    title_en: "An AI tutor for every student: the lesson from Florida State University",
    summary_en: "Florida State University gave every student an AI tutor grounded in the professors' own materials. A field-tested use case that speaks directly to Italian schools and universities.",
    body: [
      "Un tutor disponibile 24 ore su 24, capace di generare quiz personalizzati, schede di studio, guide di preparazione e sintesi audio di materiali densi, ancorato esclusivamente ai testi del docente: non è fantascienza, è esattamente quello che la Florida State University ha messo nelle mani di ogni suo studente attraverso Google NotebookLM.",
      "Negli atenei e nelle scuole italiane si sta muovendo qualcosa in questa direzione?",
      "Il resoconto, pubblicato il 22 giugno 2026 sul blog ufficiale Google, porta la firma di Jonathan Fouzard, Vice President e Chief Information Officer della Florida State University. L'università ha avviato un pilota strutturato con Google for Education con un obiettivo dichiarato: portare l'AI direttamente nelle mani della comunità accademica e misurare l'impatto reale sul rendimento.",
      "Studenti che si trovavano stabilmente con risultati insufficienti hanno trasformato abitudini di studio e voti nel giro di poche settimane, secondo Fouzard. Si tratta di un dato autoriferito dall'ateneo: nessuno studio indipendente è citato nell'articolo.",
      "Cosa distingue NotebookLM da un chatbot generico? Il vincolo deliberato: lo strumento non naviga liberamente sul web, ma lavora soltanto sui materiali caricati dal professore, che siano dispense, articoli scientifici o trascrizioni di lezione. Lo studente rimane così ancorato al programma del corso, non alle risposte plausibili che un modello aperto genererebbe. Per i docenti universitari italiani, da sempre diffidenti delle allucinazioni dei modelli linguistici, è un argomento di peso.",
      "Sul versante dei docenti, FSU segnala un secondo effetto concreto: la preparazione delle lezioni, la generazione di materiali visivi e l'analisi dei dati avvengono più rapidamente, restituendo ore da reinvestire nel rapporto diretto con gli studenti.",
      "L'AI non sostituisce i docenti: li moltiplica nell'impatto. Fouzard lo chiama «force multiplier», moltiplicatore di forze, non sostituto.",
      "L'Italia, con le sue istituzioni scolastiche cronicamente sottofinanziate, un rapporto docenti-studenti tra i più squilibrati d'Europa e una digitalizzazione della didattica ancora frammentata, ha davanti a sé un caso d'uso già validato sul campo. Il punto di partenza non è l'invenzione: è l'adattamento intelligente di modelli che già funzionano altrove.",
      "## I miei consigli",
      "Per gli istituti che stanno valutando l'introduzione dell'AI: si dovrebbe cominciare da strumenti grounded, cioè ancorati a fonti controllate, piuttosto che da chatbot aperti.",
      "Il modello FSU riduce il rischio più temuto in ambito accademico — la generazione di contenuti fuori contesto — senza rinunciare alla personalizzazione dell'apprendimento. Vale la pena portarlo al tavolo dei consigli di amministrazione già oggi, come riferimento metodologico prima ancora che tecnologico.",
      "«L'istruzione è l'arma più potente che si possa usare per cambiare il mondo» (Nelson Mandela, discorso alla Mindset Network, Johannesburg, 16 luglio 2003)."
    ]
  },
  {
    slug: "claude-code-istruzioni-guardrail",
    date: "2026-06-20",
    dateLabel: "giugno 2026",
    tag: "AI",
    title: "Un'istruzione non è un guardrail: governare davvero gli agenti AI",
    summary: "Dare un'istruzione a un'AI non garantisce che venga seguita: la guida tecnica di Anthropic su Claude Code distingue tra istruzioni al modello e vincoli deterministici. Una lezione di ingegneria organizzativa, non solo di software.",
    title_en: "An instruction is not a guardrail: truly governing AI agents",
    summary_en: "Giving an AI an instruction doesn't guarantee it will be followed: Anthropic's technical guide to Claude Code separates model instructions from deterministic constraints. A lesson in organisational engineering, not just software.",
    body: [
      "Dare un'istruzione a un'AI non garantisce che venga seguita.",
      "Anthropic lo afferma esplicitamente nella guida tecnica pubblicata il 18 giugno su Claude Code: in sessioni lunghe, sotto pressione o in presenza di prompt injection nei file letti durante il lavoro, il modello può disattendere anche le regole scritte nero su bianco.",
      "Hai già una strategia per gestire questo rischio nei tuoi processi?",
      "Claude Code mette a disposizione sette metodi per istruire l'agente: il file CLAUDE.md, le regole, le skill, i subagenti, gli hook, gli stili di output e l'aggiunta al system prompt. Ognuno ha un costo di contesto diverso, un comportamento diverso durante la compattazione della sessione e un diverso livello di autorità. Scegliere il metodo sbagliato significa sprecare token o, peggio, avere un agente che si comporta in modo imprevedibile.",
      "La distinzione centrale, secondo Anthropic, è tra istruzione e guardrail deterministico. Un'istruzione al modello viene seguita quasi sempre, non sempre. Un vincolo assoluto richiede un hook: un comando eseguito dal codice indipendentemente dal ragionamento del modello, capace di bloccare qualsiasi chiamata non autorizzata. È la differenza tra una policy sull'AI e un guardrail reale.",
      "I subagenti operano secondo una logica diversa: girano in una finestra di contesto separata e restituiscono alla sessione principale solo il risultato finale. Anthropic indica che questo schema consente di orchestrare decine di agenti in parallelo senza saturare il contesto e senza perdere fedeltà alle istruzioni originali.",
      "## I miei consigli",
      "Prima di inserire qualcosa nel file principale di istruzioni, chiediti se deve valere in ogni sessione e in ogni contesto oppure solo su file specifici: in quel caso, una regola con ambito ristretto consuma token solo quando serve.",
      "Prima di scrivere «non fare mai X», convertilo in un guardrail deterministico, perché un'istruzione al modello non ha la stessa certezza di esecuzione di una riga di codice.",
      "Se stai costruendo flussi di lavoro con agenti AI nel tuo team, mappa i sette metodi disponibili e assegna a ciascuna istruzione il meccanismo giusto: il comportamento dell'agente e il costo computazionale dipendono da questa scelta, non dalla lunghezza del prompt.",
      "Claude Code è già uno strumento di ingegneria organizzativa, non solo di sviluppo software. Chi ignora la sua architettura di controllo lascia variabile ciò che potrebbe essere deterministico.",
      "«Non basta sapere; bisogna anche applicare. Non basta volere; bisogna anche agire» (Johann Wolfgang von Goethe, Massime e riflessioni, 1833)."
    ]
  },
  {
    slug: "unilever-arte-del-sacrificio",
    date: "2026-04-02",
    dateLabel: "aprile 2026",
    tag: "Strategia",
    title: "Unilever e l'arte del sacrificio: scegliere cosa lasciar andare",
    summary: "Fernando Fernández fonde il business alimentare di Unilever con McCormick e ripete un solo mantra: la crescita dei volumi. Ogni portafoglio, anche professionale, cresce quando si decide cosa lasciar andare.",
    title_en: "Unilever and the art of sacrifice: choosing what to let go",
    summary_en: "Fernando Fernández merges Unilever's food business with McCormick, repeating a single mantra: volume growth. Every portfolio — professional ones included — grows when you decide what to let go.",
    body: [
      "Fernando Fernández non ha fretta, eppure ha già venduto perfino la maionese — con uno scopo preciso.",
      "L'argentino guida Unilever dal marzo 2025. Il 31 marzo 2026 ha annunciato la fusione del business alimentare del gruppo con McCormick & Company, il produttore di spezie. L'operazione valuta la divisione food di Unilever circa 44,8 miliardi di dollari e McCormick circa 21 miliardi (fonti: Reuters, CNBC). Nasce un colosso da circa 20 miliardi di fatturato annuo, secondo i comunicati stampa delle due società.",
      "Quanto vale, oggi, la disciplina di rinunciare?",
      "La struttura dell'accorpamento è un Reverse Morris Trust: Unilever incassa 15,7 miliardi in contanti e i suoi azionisti ottengono il 55,1% della società combinata, mentre il gruppo trattiene il 9,9% (fonte: CNBC). L'India resta fuori dall'accordo, la cui chiusura è prevista a metà 2027.",
      "Prima erano arrivati i gelati: a dicembre 2025 Unilever aveva scorporato Magnum e Ben & Jerry's nella Magnum Ice Cream Company. «La strategia è l'arte del sacrificio», ha dichiarato Fernández al WSJ Leadership Institute. È una sua affermazione, da leggere come visione e non come dato verificato.",
      "Nel taglio si legge una logica economica precisa: il food garantisce margini alti, eppure la sua crescita resta indietro rispetto a beauty e personal care, le divisioni su cui Unilever punta a una crescita annua del 4-6% (fonte: Reuters). In ogni riunione Fernández ripete un solo mantra, la crescita dei volumi, e nel terzo trimestre 2025 quel volume è salito dell'1,7% (fonti: Unilever, Storyboard18).",
      "La pressione, però, viene da lontano: l'attivista Nelson Peltz, che predica la focalizzazione, è azionista dal 2022 ed è stato collegato all'uscita di due amministratori delegati precedenti; Fernández è il terzo in sei anni.",
      "Il mercato non ha applaudito: nei giorni dell'annuncio il titolo Unilever ha perso oltre il 7% e McCormick circa il 9% (fonte: FoodNavigator). Sul giudizio pesa il cattivo storico delle mega-fusioni alimentari più della struttura dell'accordo.",
      "Resta l'altra metà della scommessa: Fernández lavora con 300.000 creatori di contenuti e si prepara a un mondo in cui i modelli linguistici rimodelleranno la scoperta dei prodotti (fonti: Marketing Week, Storyboard18). Per questo investe in ricerca, così da conquistare la preferenza degli algoritmi.",
      "## I miei consigli",
      "Questa cessione andrebbe letta come un esercizio di messa a fuoco e non come una ritirata, perché ogni portafoglio, anche professionale, cresce quando si decide cosa lasciar andare.",
      "Conviene domandarsi quali attività tratteniamo per affetto e non per rendimento, e accettare che la rilevanza si misuri nei volumi di scelte altrui più che nel numero di cose che sappiamo fare.",
      "Preparate infine i vostri contenuti alla mediazione dell'intelligenza artificiale, poiché la prossima vetrina sarà algoritmica.",
      "«L'essenza della strategia è scegliere cosa non fare» (Michael Porter)."
    ]
  },
  {
    slug: "ia-claude-valore-domande",
    date: "2026-06-20",
    dateLabel: "2026",
    tag: "AI",
    title: "IA, Claude e il valore di chi sa porre le domande",
    summary: "Una riflessione su come l'intelligenza artificiale e strumenti come Claude stiano cambiando il modo di lavorare: la tecnologia amplifica chi sa fare le domande giuste.",
    title_en: "AI, Claude and the value of asking the right questions",
    summary_en: "A reflection on how AI and tools like Claude are changing the way we work: technology amplifies those who ask the right questions.",
    linkedin: "https://www.linkedin.com/posts/domenicomjacobone_ia-claude-cashin-share-7476695148257792000-LHu5/"
  },
  {
    slug: "terremoto-venezuela-pochi-secondi",
    date: "2026-06-21",
    dateLabel: "2026",
    tag: "Attualità",
    title: "Terremoto in Venezuela: il valore di pochi secondi",
    summary: "Pochi secondi di preavviso: cosa ci insegna un evento sismico sul valore dei sistemi di allerta, della tecnologia e della prontezza di risposta.",
    title_en: "Earthquake in Venezuela: the value of a few seconds",
    summary_en: "A few seconds of warning: what a seismic event teaches us about the value of alert systems, technology and readiness to respond.",
    linkedin: "https://www.linkedin.com/posts/domenicomjacobone_in-venezuela-pochi-secondi-di-preavviso-share-7476901741427429376-G2Ut/"
  },
  {
    slug: "innovazione-appunti-dal-feed",
    date: "2026-06-18",
    dateLabel: "2026",
    tag: "Innovazione",
    title: "Innovazione e tecnologie emergenti: appunti dal mio feed",
    summary: "Spunti e considerazioni su innovazione, tecnologie emergenti e impatto sul business, condivisi sul mio profilo LinkedIn.",
    title_en: "Innovation and emerging tech: notes from my feed",
    summary_en: "Thoughts on innovation, emerging technologies and business impact, shared on my LinkedIn profile.",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7476643102502477824/"
  }
];
