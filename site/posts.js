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
    slug: "volkswagen-pecore-agrivoltaico-polonia",
    date: "2026-07-16",
    dateLabel: "16 luglio 2026",
    tag: "Sostenibilità",
    title: "Le pecore di Volkswagen: quando la manutenzione migliore si nutre da sola",
    summary: "Volkswagen ha messo 100 pecore a pascolare sotto i pannelli del suo impianto fotovoltaico in Polonia, in un caso concreto di agrivoltaico che unisce produzione di energia e agricoltura sullo stesso ettaro. Una lezione di ingegneria semplice per chi cerca sempre la soluzione più complessa.",
    title_en: "Volkswagen's sheep: when the best maintenance feeds itself",
    summary_en: "Volkswagen has put 100 sheep to graze under the panels of its solar plant in Poland, a concrete case of agrivoltaics combining energy production and farming on the same hectare. A lesson in simple engineering for those who always reach for the most complex solution.",
    body: [
      "La parte più avanzata dell'impianto solare Volkswagen in Polonia ha quattro zampe e mangia erba.",
      "Volkswagen ha messo al lavoro 100 pecore sotto i 31.000 pannelli del suo parco fotovoltaico di Września. Il loro compito è tosare il prato pascolando, e come compenso ricevono erba fresca all'ombra dei moduli.",
      "Vi sareste mai aspettati che il tagliaerba del futuro fosse un animale addomesticato migliaia di anni fa?",
      "Dietro la scena apparentemente buffa c'è ingegneria seria: l'impianto, costruito e gestito da Quanta Energy, ha una potenza di 18,3 MW e copre circa un quarto del fabbisogno elettrico annuo della fabbrica che produce il Crafter. Nelle giornate di sole, per la prima volta, ha alimentato l'intero stabilimento.",
      "Le pecore non sono un vezzo pubblicitario, ma sostituiscono i rasaerba meccanici, abbattono costi di manutenzione ed emissioni e creano habitat per insetti e piccola fauna, a beneficio della biodiversità. La stessa superficie genera elettricità e, nel frattempo, nutre un gregge, in un esempio concreto di agrivoltaico.",
      "C'è anche ricerca vera. L'Università di Scienze della Vita di Poznań studia come i pannelli influiscano sul benessere animale, sul microclima e sul suolo, e se la loro ombra riduca lo stress da calore delle pecore. Volkswagen colloca il progetto tra i più avanzati d'Europa nel suo genere.",
      "Il gregge resterà fino all'autunno, sorvegliato da allevatori esperti. Poi, presumibilmente, andrà in ferie fino alla prossima primavera.",
      "Questa storia riguarda anche chi con le pecore non ha nulla a che fare. Il modello si chiama doppio uso del suolo: lo stesso ettaro produce energia e ospita agricoltura. In un continente dove la terra scarseggia, far convivere due funzioni sulla medesima superficie conta più di qualsiasi slogan.",
      "## I miei consigli",
      "Leggete questo caso come un promemoria: la soluzione più elegante non è sempre la più tecnologica, e a volte la manutenzione migliore è quella che si nutre da sola.",
      "Prima di aggiungere un sistema complesso a un processo, chiedetevi se esista una risposta più semplice, più economica e già collaudata dalla natura. Innovare, molto spesso, significa combinare bene ciò che già esiste, più che inventare da zero.",
      "«La natura non fa nulla di inutile» (Aristotele, Politica)."
    ]
  },
  {
    slug: "debito-cognitivo-ai-pensiero-critico",
    date: "2026-07-15",
    dateLabel: "15 luglio 2026",
    tag: "AI",
    title: "Debito cognitivo: cosa succede al cervello di chi lascia scrivere all'AI",
    summary: "Due studi, dal MIT Media Lab e da Microsoft Research con Carnegie Mellon, misurano il costo cognitivo della delega totale all'intelligenza artificiale: meno connettività cerebrale, meno pensiero critico. La maieutica socratica indica una via diversa per usare l'AI al lavoro.",
    title_en: "Cognitive debt: what happens to the brain of those who let AI write for them",
    summary_en: "Two studies — from MIT Media Lab and from Microsoft Research with Carnegie Mellon — measure the cognitive cost of fully delegating to AI: weaker brain connectivity, less critical thinking. Socratic maieutics points to a different way of using AI at work.",
    body: [
      "I collaboratori che hanno lasciato scrivere ChatGPT al posto loro hanno mostrato la connettività cerebrale più debole tra i gruppi osservati, e in maggioranza non sapevano citare una riga di quanto avevano appena consegnato.",
      "Il dato arriva dallo studio «Your Brain on ChatGPT» del MIT Media Lab, giugno 2025: 54 partecipanti monitorati con elettroencefalogramma, divisi in tre gruppi, chi usava un modello linguistico, chi un motore di ricerca, chi nessuno strumento.",
      "Le reti neurali più estese le aveva chi scriveva a mente nuda, il gruppo AI le aveva più spente. Resta un preprint non ancora sottoposto a revisione, e riguarda solo testi brevi.",
      "Quanti dei vostri collaboratori saprebbero ricostruire il ragionamento dietro l'ultimo documento prodotto con l'AI?",
      "Il quadro si allarga con la ricerca di Microsoft Research e Carnegie Mellon presentata a CHI 2025: 319 lavoratori della conoscenza, 936 casi d'uso reali. Chi riponeva più fiducia nell'AI esercitava meno pensiero critico, chi confidava nelle proprie competenze continuava a verificare i risultati. Sono dati autoriferiti, raccolti tramite questionario.",
      "Gli autori lo chiamano debito cognitivo: risparmio di fatica nell'immediato, competenze che si atrofizzano nel tempo. Un'azienda che usa l'intelligenza artificiale come oracolo ritrova il conto sulla qualità delle decisioni.",
      "Qui entra la maieutica, l'arte socratica della levatrice, che non travasa nozioni già pronte ma aiuta a far nascere le idee di chi ha di fronte. Al lavoro serve un'AI che interroghi prima di rispondere.",
      "Gli stessi ricercatori di Microsoft hanno confrontato due prototipi su un compito d'investimento: RecommendAI, che porge la raccomandazione pronta, ed ExtendAI, che chiede all'utente di articolare il proprio ragionamento prima di dare un riscontro. Advait Sarkar, coautore dello studio, sostiene che l'obiettivo non sia cancellare il pensiero critico, semmai adattarlo al lavoro assistito senza perdere le capacità analitiche.",
      "## I miei consigli",
      "Configurate gli assistenti aziendali perché aprano con una domanda invece che con una risposta, costringendo chi li usa a dichiarare la propria ipotesi prima di vedere il risultato e a difendere le premesse.",
      "Affidate all'AI il ruolo dell'avvocato del diavolo sulle scelte importanti, chiedendole cosa manca e quali assunzioni restano fragili, e riservate la modalità oracolo ai compiti ripetitivi e a basso rischio.",
      "La prova del nove è una sola: se una persona non sa più ricostruire senza l'AI come è arrivata a una conclusione, l'azienda ha comprato velocità pagandola in comprensione, e la formazione torna una priorità.",
      "La levatrice socratica non riempiva teste, le aiutava a pensare. Vale anche per le macchine che oggi mettiamo accanto alle persone.",
      "«La mente non è un vaso da riempire, ma un fuoco da accendere» (Plutarco, Sull'ascoltare)."
    ]
  },
  {
    slug: "remarkable-riddle-diario-e-ink-scrittura",
    date: "2026-07-14",
    dateLabel: "14 luglio 2026",
    tag: "Innovazione",
    title: "Scrivi a penna, risponde la carta: il tablet e-ink che imita la tua calligrafia",
    summary: "Il progetto open source riddle trasforma un reMarkable Paper Pro nel diario stregato di Tom Riddle: scrivi a mano, un modello visivo legge la pagina e ti risponde in tempo reale con una calligrafia animata. Un esperimento che indica una via diversa per l'AI: niente schermo acceso, niente notifiche.",
    title_en: "Write by hand, the paper answers: the e-ink tablet that mimics your handwriting",
    summary_en: "The open-source project riddle turns a reMarkable Paper Pro into Tom Riddle's enchanted diary: you write by hand, a vision model reads the page and answers in real time with animated handwriting. An experiment pointing to a different kind of AI — no screen, no notifications.",
    body: [
      "Non è un oggetto uscito da «Harry Potter e la Camera dei Segreti», ma un tablet e-ink del 2026.",
      "Scrivi una frase a penna, l'inchiostro svanisce nella pagina e pochi secondi dopo la carta ti risponde con una calligrafia animata.",
      "Lo sviluppatore canadese Maxime Rivest ha ricreato l'equivalente del diario di Tom Riddle su un reMarkable Paper Pro.",
      "Il progetto si chiama riddle, è open source con licenza MIT e ha raccolto circa 450 stelle su GitHub in pochi giorni. La demo è circolata il 4 luglio; la prima release è del 5 luglio 2026.",
      "Quanto siamo disposti a confidarci con un oggetto che pensa, ma di cui non vediamo dove tiene il cervello?",
      "Il funzionamento lo descrive la pagina GitHub del progetto. Quando smetti di scrivere, dopo circa 2,8 secondi il sistema fotografa la pagina, la converte in PNG e la invia a un modello linguistico con capacità visive.",
      "La risposta arriva in streaming, frase dopo frase, resa in tratti di penna animati. Il primo segno compare dopo circa un secondo, riporta Android Authority.",
      "Il titolo che circola merita un chiarimento. Nella demo la voce del diario è Claude Fable 5 di Anthropic. Il software, però, resta agnostico rispetto al modello: gira con qualsiasi LLM visivo tramite endpoint compatibili con le API OpenAI.",
      "La magia non è il modello, ma la pipeline. E l'incanto ha un prezzo tecnico: riddle funziona solo su reMarkable Paper Pro in modalità sviluppatore, si esegue come root, spegne l'interfaccia del produttore e pilota direttamente il motore e-ink.",
      "È stato testato solo sulle versioni 3.26 e 3.27 del sistema operativo. reMarkable non c'entra nulla: resta un progetto personale che si installa a proprio rischio.",
      "Sul fronte dei dati la scelta è controcorrente. Le memorie restano sul dispositivo, conservano le ultime 400 pagine e non prevedono telemetria. L'immagine della pagina viene cancellata dopo la lettura e la funzione si può disattivare.",
      "Il senso va cercato oltre il gioco: questo è uno dei primi esempi convincenti di AI visiva che lascia il browser per abitare un hardware lento e sobrio. Non ci sono tastiera, notifiche o bagliori, e la scrittura a mano torna interfaccia.",
      "Rivest ha già mostrato una «Mappa del Malandrino» interattiva e promette altri capitoli.",
      "## I miei consigli",
      "Guardate al metodo, non al costume di Halloween. Il paradigma che conta sta nell'interazione cauta: catturare un gesto naturale, ragionarci con un modello, restituire una risposta senza rubare attenzione.",
      "Se progettate esperienze o formate persone, immaginate flussi senza chat né schermo acceso, e chiedetevi quale gesto potreste rendere conversazionale.",
      "Tenete ferma la questione della fiducia: un oggetto che risponde con la vostra stessa grafia abbassa le difese; progettatelo pensando prima a chi lo userà, poi a ciò che sa fare.",
      "«Mai fidarsi di qualcosa che è capace di pensare da solo, se non riesci a vedere dove tiene il cervello» (Arthur Weasley, in «Harry Potter e la Camera dei Segreti»)."
    ]
  },
  {
    slug: "anthropic-reflect-uso-consapevole-ai",
    date: "2026-07-13",
    dateLabel: "13 luglio 2026",
    tag: "AI",
    title: "Reflect di Anthropic: uno specchio professionale, non un cruscotto di vanità",
    summary: "Anthropic ha rilasciato in beta Reflect, un cruscotto che mostra come, quando e su cosa si usa Claude, con promemoria per fare una pausa. Il valore reale non sta nel conteggio, ma nella domanda che lo accompagna: cosa vogliamo continuare a fare da soli?",
    title_en: "Anthropic's Reflect: a professional mirror, not a vanity dashboard",
    summary_en: "Anthropic has released Reflect in beta, a dashboard that shows how, when and for what you use Claude, with reminders to take a break. Its real value lies not in the count, but in the question it raises: what do we want to keep doing ourselves?",
    body: [
      "Un'azienda di intelligenza artificiale che progetta una funzione per ricordarti di spegnere l'intelligenza artificiale.",
      "Sembra un controsenso commerciale, si rivela invece la scommessa che Anthropic ha appena messo in campo.",
      "Il 9 luglio 2026 Anthropic ha rilasciato in beta Reflect, un cruscotto che mostra come, quando e su cosa una persona usa Claude, con l'opzione di fissare orari di silenzio e promemoria per fare una pausa.",
      "Quante delle attività che oggi deleghiamo vorremmo continuare a svolgere di persona, pur sapendo che l'algoritmo le sbrigherebbe in minor tempo?",
      "Lo strumento è raggiungibile dalle Impostazioni di Claude su web e app desktop, riservato agli utenti Free, Pro e Max che abbiano attivato la memoria.",
      "L'analisi copre gli ultimi 1, 3, 6 o 12 mesi e restituisce i temi ricorrenti e le fasce orarie di utilizzo più dense. Il valore dichiarato risiede meno nel conteggio e più nella domanda che lo accompagna.",
      "Reflect propone periodicamente sollecitazioni come «Qual è una cosa che vuoi continuare a fare da solo, anche se Claude potrebbe farla più in fretta?», e apre lo spazio per discuterne.",
      "L'impianto poggia sul 4D AI Fluency Framework richiamato da Anthropic, articolato su quattro competenze: la delega, ovvero decidere se e come coinvolgere l'AI; la descrizione degli obiettivi; il discernimento nel valutare i risultati; la diligenza nell'assumersi la responsabilità di ciò che si produce.",
      "Sulla riservatezza, che tocca da vicino chi tratta dati di clienti, l'azienda dichiara limiti precisi. Reflect non attinge dalle conversazioni in incognito e non estrae i file sottostanti agli strumenti collegati.",
      "Le conversazioni legate a integrazioni sanitarie restano escluse, e i contenuti sensibili compaiono solo a livello generale. Anthropic riferisce di aver sviluppato lo strumento con l'AHA program del MIT Media Lab, il Digital Wellness Lab del Boston Children's Hospital e il Family Online Safety Institute.",
      "## I miei consigli",
      "Trattate Reflect come uno specchio professionale, non come un cruscotto di vanità.",
      "Definite l'obiettivo prima di generare il resoconto, distinguendo le attività da presidiare in prima persona da quelle cedibili senza rimpianti.",
      "Leggete il dato sulle fasce orarie contro la propria agenda, per capire se l'uso di Claude segue una strategia o riempie i vuoti della giornata.",
      "Prendete alla lettera la sollecitazione sulle cose da fare da soli, perché la competenza che non si esercita più tende ad atrofizzarsi. Verificate i confini di riservatezza prima di collegare strumenti aziendali, se lavorate con dati riservati.",
      "La funzione resta in beta: il conteggio del tempo speso e il riflesso sulle conversazioni di Cowork sono annunciati, ma non ancora disponibili.",
      "«Una vita senza esame non è degna di essere vissuta» (Socrate, nel racconto di Platone, Apologia di Socrate)."
    ]
  },
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
