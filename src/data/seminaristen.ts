import chapelAsset from "@/assets/uploads/chapel.jpg.asset.json";
import liturgicalAsset from "@/assets/uploads/liturgical.jpg.asset.json";

const gijsImg = chapelAsset.url;
const fabianImg = liturgicalAsset.url;

export type Seminarist = {
  slug: string;
  name: string;
  subtitle: string;
  birthYear: number;
  origin: string;
  image: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
  numbered: { title: string; quote: string }[];
};

const gijsSections: Seminarist["sections"] = [
  {
    title: "Roeping en spiritueel leven",
    paragraphs: [
      "“Sinds mijn bekering heb ik veel nagedacht over een eventuele roeping, ik wist al vrij snel dat deze op de bovennatuurlijke weg lag, het priesterschap of het religieuze leven dus. Ik was vooral heel erg zoekende tussen deze twee en uiteindelijk heb ik in het Instituut, die als het ware een tussenweg is, mijn roeping gevonden. Het was voor mij een ontwikkeling van stap voor stap om mijn roeping en de juiste plek te vinden. De Heilige Mis in de tridentijnse ritus, de Sacramenten, het gebed en vooral de ware devotie tot de Heilige Maagd Maria hebben mij ontzettend geholpen. Zonder Maria zou ik nooit mijn roeping hebben gevonden en zelfs niet Katholiek zijn geweest. Door Maria tot Jezus!”",
      "“Zoals ik al zei heeft Maria een leidende rol gehad in de roepingsweg, maar ik heb ook veel te danken aan de Heilige Joseph en de Heilige Franciscus de Sales — één van de patroonheiligen van ons Instituut — die mij ontzettend heeft geholpen door zijn spiritualiteit die mij als het ware naar het Instituut heeft getrokken waar deze spiritualiteit wordt nageleefd.”",
      "“Het is een relatie die door de Heilige Mis en het gebed voor het Allerheiligste Sacrament erg versterkt en verinnerlijkt is. Binnen ons Instituut hebben wij vooral een grote gehechtheid aan het Getijdengebed vanwege onze kanoniale roeping, die mij ook erg eigen is geworden. Het getijdengebed is na de Heilige Mis het belangrijkste gebed van de Heilige Kerk; het is door het zingen en bidden van de heilige gezangen uit de Heilige Schrift dat we ons in de Heilige Geest met het hoofd van de Kerk, Christus zelf, verbinden en een passend lof en verheerlijking brengen aan de Almachtige Vader.”",
    ],
  },
  {
    title: "Seminarie-ervaring",
    paragraphs: [
      "Afgelopen juli ben ik exorcist gewijd en nu zit ik in het vierde jaar van mijn opleiding in het Seminarie van het Instituut van Christus Koning in Gricigliano vlak bij Florence. Ik ben dit jaar met de Theologie begonnen na drie jaar spiritualiteit en filosofie te hebben afgerond. Onze opleiding bedraagt zeven jaar in totaal, met één jaar van voorbereiding voorafgaand in een ander huis van het Instituut.",
      "De studie is uitdagend maar tegelijkertijd erg interessant. Dit samen met nog veel meer seminaristen te mogen doen is een grote vreugde. De onderlinge band is erg belangrijk; het is een echt opbouwende factor in het seminarie. Men kan veel van de anderen en vooral van de oversten en priesters aldaar leren.",
      "Vooral de conferenties die meerdere keren per jaar door onze stichter en generaal-overste worden gegeven zijn erg versterkend voor mijn roeping. Ook de begeleiding van de oversten helpt mij vaak de reden van mijn roeping in te zien en met nieuwe overtuiging door te kunnen gaan. Onze bedevaart voor het Heilig Jaar naar Rome heeft mij ook erg geraakt: een ware manifestatie van onze gehechtheid aan de Heilige Vader de Paus en aan de Ene, Heilige, Katholieke en Apostolische Kerk die ik persoonlijk zo trouw mogelijk wil dienen.",
      "In het seminarie worden we op alle facetten voorbereid van het priesterschap door middel van lessen, instructies, repetities voor de liturgie en lessen in gregoriaans. Naast de vorming hebben we ook met regelmaat handenarbeid om praktisch bezig te zijn en te leren voor onszelf te zorgen. Het leven als priester in de huidige maatschappij is in het geheel niet makkelijk; gelukkig worden we daar goed mee geholpen en sterk gemaakt om daartegen op te kunnen.",
    ],
  },
  {
    title: "Dankbaarheid en connectie met ondersteuners",
    paragraphs: [
      "Deze ondersteuning betekent heel veel voor mij. Het betekent vooral dat ik mijn opleiding kan bekostigen en geen schulden over zal houden na afloop. Daarnaast geldt dit ook voor kleding, boeken, schrijfgerei en andere artikelen nodig voor het leven als seminarist.",
      "Het gebed is het allerbelangrijkst wat iemand voor mij kan doen. Het is de beste ondersteuning die men aan een seminarist kan geven om te kunnen volharden en dat God de nodige genaden blijft verlenen.",
      "Ik wil hen vooral heel dankbaar zijn voor de nodige steun die door hen gegeven wordt. Deze dankbaarheid breng ik vooral in praktijk door mijn gebeden voor hen en ook door middel van Missen voor hun intenties in de toekomst. Ik zal minstens twee keer per dag een gebed tot de Heilige Joseph voor hen en hun intenties bidden en altijd open staan intenties of andere vragen te kunnen ontvangen en te beantwoorden.",
      "Voor het belang van onze congregaties en onze eigen vorming is het noodzakelijk dat de gelovigen bijdragen op financiële wijze. Wij worden niet door Rome noch door het bisdom ondersteund en het is een realiteit dat de docenten en de inwoning van de seminaristen moeten worden bekostigd, om de kwaliteit van de opleiding van de priester voor de toekomst optimaal te kunnen behouden. Dit is ook van groot belang voor de gelovigen zelf om goed gevormde priesters te hebben die hen kunnen begeleiden en helpen.",
    ],
  },
  {
    title: "Visie en toekomst",
    paragraphs: [
      "Voor mij is het vooral belangrijk zo geheel mogelijk de idealen van onze spiritualiteit te kunnen naleven: leven rondom het Altaar van God en in gemeenschap met anderen, en van daaruit het apostolaat te kunnen beoefenen bij de gelovigen. De priester is ten eerste hij die apart is gezet door God voor zijn dienst en van daaruit leeft hij zelf en geeft hij zich voor de anderen.",
      "De hedendaagse wereld is heel erg leeg, als het ware. De mens kan zijn volheid alleen vinden in God en ik denk dat deze dorst naar Hem door de realisatie van de leegte en de schoonheid van de Waarheid van het Katholicisme velen langzamerhand naar de Kerk zal gaan brengen. Daar is de rol van de priester erg belangrijk om deze mensen op te vangen, voor hen de deuren van de redding door de sacramenten te openen en het leven van de genade in hun harten te laten stromen. Ik hoop daarbij mijn rol in dienst van Christus te kunnen spelen in en door Hem.",
      "In realiteit komt er geen één priester een waar verschil brengen in de Kerk als het niet door een bijzondere roeping van God is. Het is van hem gevraagd zich zo veel mogelijk in de Nederigheid en de Zachtmoedigheid van het Hart van Jezus te laten vormen en zo een waarlijk instrument te kunnen zijn in de hand van God. Dat trekt van zichzelf de mensen naar God toe — kijken we maar naar de Heilige Pastoor van Ars en de Heilige Pater Pio. Als de priester denkt door zichzelf de Kerk te kunnen veranderen, vergist hij zich flink en zal door zijn ijdelheid zijn ware doel en roeping niet bereiken.",
    ],
  },
];

const gijsNumbered: Seminarist["numbered"] = [
  {
    title: "Opvoeding",
    quote:
      "“Ik ben de jongste van drie jongens uit een grote en hechte familie. Mijn familie is protestants en ik ben zelf 8 jaar Katholiek sinds Pasen 2017. Ook al was mijn opvoeding niet Katholiek, toch heb ik veel kennis van de Bijbel en een zekere relatie met God meegekregen die mij uiteindelijk ook veel geholpen heeft om na te denken over de Waarheid en mij uiteindelijk te kunnen bekeren tot de Katholieke Kerk.”",
  },
  {
    title: "Studie",
    quote:
      "“Voorafgaand aan het seminarie heb ik drie jaar verpleegkunde gestudeerd in Utrecht. Ik heb daar veel over mensen en hun manier van denken kunnen leren en ook wat ziekte en lijden eigenlijk inhoudt. De kennis en ervaring die ik daar heb opgedaan kan voor mij erg handig zijn voor het pastoraat in de toekomst. Naast mijn opleiding deed ik veel vrijwilligerswerk voor de parochie en het jongerenwerk zoals het tienerkamp van het bisdom Haarlem-Amsterdam. Op zaterdag en tijdens de vakanties was ik ook werkzaam op een zorgboerderij voor kinderen met een verstandelijke beperking.”",
  },
  {
    title: "Aspecten van het priesterschap",
    quote:
      "“Vooral de Heilige Liturgie trekt mij heel erg aan als essentieel deel van de roeping als Kanunnik die we proberen zo juist en mooi mogelijk uit te oefenen. Daarnaast ook de bediening van de heilige sacramenten en de gelovigen te kunnen helpen ingroeien in hun geloof door de geestelijke begeleiding.”",
  },
  {
    title: "Persoonlijke noot",
    quote:
      "“Het bijbelvers ‘Spiritus en Sponsa dicunt veni’ uit het laatste hoofdstuk van het boek Openbaringen grijpt mij erg aan. Het is God de Heilige Geest zelf die ons de roeping geeft door zijn Bruid de Heilige Kerk; het is alleen door de Geest en de Kerk dat iedere ziel zijn redding kan verkrijgen en wij onze specifieke roeping ontvangen. Buiten hen om dient het tot niets, maar in hen kunnen we leven in de vreugde van de kinderen Gods en onze roeping tot opbouw van het koninkrijk bewerkstelligen.”",
  },
];

const fabianSections: Seminarist["sections"] = [
  {
    title: "Persoonlijke achtergrond",
    paragraphs: [
      "Ik ben geboren in São Paulo, Brazilië, en opgegroeid in België met Nederlandse familiewortels in Brabant en Gelderland. Mijn tweelingbroer en ik groeiden op in een niet-gelovige omgeving: mijn vader was cultureel katholiek maar niet praktiserend, mijn moeder niet gelovig. Het katholieke geloof was voor mij vrijwel onbekend tot mijn eenentwintigste. Ik was toen overtuigd atheïst — voor mij was geloof een kunstmatige constructie die door ‘simpele mensen’ beoefend werd. Kerken vond ik mooi om de schoonheid, maar verder had het geen betekenis voor mij.",
      "Toch bleef er iets knagen vanbinnen — een gevoel dat er iets niet klopte aan het beeld dat ik had van de wereld en van de kerk. Op een gegeven moment vroeg ik oprecht aan een mogelijke God wat de waarheid was. Niet lang daarna vond ik spontaan de Catechismus van de Katholieke Kerk in een bibliotheek. Ik was diep onder de indruk van de logische en redelijke uiteenzetting van het geloof. Hierna is een natuurlijke interesse ontstaan die alleen maar sterker werd.",
      "Qua werk heb ik verschillende dingen gedaan: in de ICT, als timmerman en in de logistiek. Ik heb drie jaar op Campus Aquino (broeders van Sint-Jan) in Utrecht gewoond, waar ik een actief lid was van de gemeenschap. Ik organiseerde activiteiten, startte een initiatief tegen eenzaamheid in de buurt en bezocht regelmatig eenzame mensen om een luisterend oor te bieden. Het afgelopen jaar hielp ik een organisatie met het opzetten van een website en werkte ik als IT-support — mensen thuis helpen met hun telefoon, computer en printer.",
    ],
  },
  {
    title: "Roeping en spiritueel leven",
    paragraphs: [
      "Het eerste moment dat ik me sterk geroepen voelde was tijdens mijn doopsel, vijf jaar geleden op 23 augustus 2020. Ik reisde vanuit België zelfstandig naar het voor mij onbekende Sint-Janscentrum in Den Bosch. Daar vertelde men mij dat ik eerst een paar jaar katholiek moest zijn alvorens zo’n grote stap te zetten — dat voelde als een teleurstelling, maar ik aanvaardde het. Sindsdien is de vraag van de roeping altijd aanwezig gebleven in mijn leven, en zij werd sterker toen ik op Casa Nova ging wonen, waar Pater Jan Koopman mij inspireerde het idee van het priesterschap verder te verkennen.",
      "Een bijzondere rol speelt de Heilige Maagd Maria, voor wie ik een diepe devotie voel — voornamelijk dankzij de heilige Louis Marie Grignion de Montfort en zijn boek ‘De Ware Godsvrucht’. Ik heb sterk de indruk dat ik op een bijzondere manier aan Maria verbonden ben. Naast haar was de heilige Jozef een grote steun voor mij in het fysieke werk; hij kon betekenis geven aan het soms herhalende handenarbeid. Pater Jan Koopman is voor mij een persoonlijke gids geweest: ik voel mij diep verbonden met hem en ben ervan overtuigd dat hij voor mij bidt en mij aanspoort het priesterschap op te zoeken.",
      "Mijn relatie met God beschrijf ik als die van een vader en een zoon. In mijn jeugd heb ik mijn vader verloren aan leukemie. Die ervaring heeft mij geholpen een Vader in God te zien en te vinden — het gaat voor mij grotendeels om het betekenis geven aan lijden en verdriet, waarop Jezus het perfecte antwoord biedt. Samen met Jezus de Vader opzoeken is een grote bron van kracht. Ik voel mij ook sterk verbonden met de devotie tot de Smartelijke Maria. In mijn zwakheid is God sterk.",
    ],
  },
  {
    title: "Visie en toekomst",
    paragraphs: [
      "Als God het wil, zie ik mezelf als een priester die dicht bij de mensen staat: die veel begeleiding biedt in spirituele zaken en mogelijke genezing van geestelijke aandoeningen, en die als onderwijzer van het Woord van God mensen naar Hem brengt. Mijn missie is de afgewezenen accepteren door Gods liefde.",
      "In de moderne wereld zie ik veel leegte, en ik wil het goede nieuws verkondigen dat de wereld niet leeg is en dat er hoop is. In het Westen zijn er grote problemen rondom vaderschap en identiteit. Het priesterschap biedt hier het perfecte antwoord: er is wel een Vader die om ons geeft en zijn Zoon heeft opgeofferd om ons te redden. Door Christus’ identiteit te omarmen mogen wij het zoonschap van God de Vader ontvangen.",
      "Het grote verschil dat ik kan maken vloeit voort uit de sterkte van mijn devotie tot Jezus in de Eucharistie en tot zijn heilige Moeder. Ik kan zelf geen verschil maken — alleen God door mij. Als God het wil, wil ik mij verder verdiepen in de leer van de menselijke ziel volgens de Thomistische psychologie, om mensen ook op psychologisch vlak te kunnen bijstaan.",
    ],
  },
  {
    title: "Dankbaarheid en verbondenheid",
    paragraphs: [
      "De financiële ondersteuning van de stichting betekent heel veel voor mij. Het helpt mij te weten dat de gemeenschap achter ons staat en bijdraagt aan Gods plannen. Ik ben er enorm dankbaar voor — het is niet voor niets: we zijn in gebed verbonden.",
      "Ik zou graag om gebed willen vragen voor mijn familie, die niet gelovig is. Dat is een groot gemis in mijn leven. Het zou een droom zijn als ook zij dezelfde waarheid en liefde met betrekking tot onze Heer en zijn Moeder zouden leren kennen.",
      "De beste manier om ons te blijven ondersteunen is in gebed verbonden te blijven, ons af en toe te bezoeken en brieven te sturen. Bidt vooral voor vertrouwen en volharding.",
    ],
  },
];

const fabianNumbered: Seminarist["numbered"] = [
  {
    title: "Opvoeding",
    quote:
      "“Ik ben opgegroeid in een niet-gelovige familie in België. Het katholieke geloof was voor mij vrijwel onbekend tot mijn eenentwintigste — geloof was in mijn ogen iets dat door ‘simpele mensen’ beoefend werd. Maar iets diep vanbinnen bleef knagen, totdat ik oprecht vroeg aan een mogelijke God wat de waarheid was. Niet lang daarna vond ik spontaan de Catechismus van de Katholieke Kerk in een bibliotheek. Ik was diep onder de indruk van de logische en redelijke uiteenzetting van het geloof — en daarna is alles veranderd.”",
  },
  {
    title: "Opleiding en werk",
    quote:
      "“Ik heb het middelbaar ASO Wetenschappen-Wiskunde gedaan in België en een tijd Theologie gestudeerd aan de Universiteit van Tilburg in Utrecht, maar stopte daar omdat ik de inhoud niet constructief vond voor mijn geloof en toekomstig doel. Daarna volgde ik een opleiding timmeren en behaalde ik verschillende gerelateerde certificaten, evenals een beroepscertificaat in het bouwen van websites. Ik heb gewerkt in de ICT, als timmerman en in de logistiek. Het afgelopen jaar werkte ik als IT-support en hielp ik een organisatie met het opzetten van een website — ik vond het fijn om mensen net iets gelukkiger te kunnen maken.”",
  },
  {
    title: "Aspecten van het priesterschap",
    quote:
      "“Onderwijzing en prediking van het geloof zijn aspecten waartoe ik mij sterk geroepen voel — in het verleden voelde ik mij sterk gedragen in zulke momenten. Ook de biecht spreekt mij erg aan: ik analyseer graag mensen en hun problemen en wil een antwoord bieden. Het persoonlijk helpen van mensen, geestelijke begeleiding bieden en spirituele genezing — dat is waartoe ik mij het diepst geroepen voel.”",
  },
  {
    title: "Persoonlijke noot",
    quote:
      "“Sinds ik voor het geloof heb gekozen, is mijn leven een avontuur geworden. Hoe meer ik kies voor de Heer, hoe meer het een avontuur wordt. Johannes 8:12 inspireert mij bijzonder: ‘Ik ben het licht der wereld. Wie Mij volgt, zal niet in de duisternis wandelen, maar het licht des levens bezitten.’ Je kunt licht niet zomaar ‘doen’ — je kunt het alleen zijn. Net zoals je licht kunt zien met je ogen en voelen met je huid zonder te kunnen uitleggen hoe het werkt, zo werkt ook God.”",
  },
];

export const seminaristen: Seminarist[] = [
  {
    slug: "gijs-uittenbogaard",
    name: "Gijs Uittenbogaard",
    subtitle: "“Spiritus en Sponsa dicunt veni.”",
    birthYear: 2002,
    origin: "uit Groot-Ammers — een klein dorpje in Zuid-Holland.",
    image: gijsImg,
    intro:
      "Ter kennismaking legt Gijs Uittenbogaard verder uit over wie hij is en hoe hij zijn roeping ervaart.",
    sections: gijsSections,
    numbered: gijsNumbered,
  },
  {
    slug: "fabian-van-dijk",
    name: "Fabian van Dijk",
    subtitle: "“Wie Mij volgt, zal niet in de duisternis wandelen.” — Joh. 8:12",
    birthYear: 1997,
    origin: "geboren in Brazilië (São Paulo), opgegroeid in België met Nederlandse herkomst.",
    image: fabianImg,
    intro:
      "Fabian Vitor van Dijk vertelt openhartig over zijn weg van atheïst naar roeping — geleid door genade, een diepe verbondenheid met Maria en de inspiratie van Pater Jan Koopman.",
    sections: fabianSections,
    numbered: fabianNumbered,
  },
];

export const getSeminarist = (slug: string) =>
  seminaristen.find((s) => s.slug === slug);
