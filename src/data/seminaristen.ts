import chapelAsset from "@/assets/uploads/chapel.jpg.asset.json";
import liturgicalAsset from "@/assets/uploads/liturgical.jpg.asset.json";

const gijsImg = chapelAsset.url;
const fabianImg = liturgicalAsset.url;

export type LocalizedText = { nl: string; en: string };

export type Seminarist = {
  slug: string;
  name: string;
  subtitle: LocalizedText;
  birthYear: number;
  origin: LocalizedText;
  image: string;
  intro: LocalizedText;
  sections: { title: LocalizedText; paragraphs: LocalizedText[] }[];
  numbered: { title: LocalizedText; quote: LocalizedText }[];
};

const gijsSections: Seminarist["sections"] = [
  {
    title: {
      nl: "Roeping en spiritueel leven",
      en: "Vocation and Spiritual Life",
    },
    paragraphs: [
      {
        nl: `"Sinds mijn bekering heb ik veel nagedacht over een eventuele roeping, ik wist al vrij snel dat deze op de bovennatuurlijke weg lag, het priesterschap of het religieuze leven dus. Ik was vooral heel erg zoekende tussen deze twee en uiteindelijk heb ik in het Instituut, die als het ware een tussenweg is, mijn roeping gevonden. Het was voor mij een ontwikkeling van stap voor stap om mijn roeping en de juiste plek te vinden. De Heilige Mis in de tridentijnse ritus, de Sacramenten, het gebed en vooral de ware devotie tot de Heilige Maagd Maria hebben mij ontzettend geholpen. Zonder Maria zou ik nooit mijn roeping hebben gevonden en zelfs niet Katholiek zijn geweest. Door Maria tot Jezus!"`,
        en: `"Since my conversion I have thought a great deal about a possible vocation; I knew fairly quickly that it lay on the supernatural path — the priesthood or religious life. I was especially searching between these two, and ultimately I found my vocation in the Institute, which is in a certain sense a middle way. For me it was a step-by-step development to find my vocation and the right place. The Holy Mass in the Tridentine Rite, the Sacraments, prayer and above all true devotion to the Blessed Virgin Mary have helped me immensely. Without Mary I would never have found my vocation and would not even be Catholic. Through Mary to Jesus!"`,
      },
      {
        nl: `"Zoals ik al zei heeft Maria een leidende rol gehad in de roepingsweg, maar ik heb ook veel te danken aan de Heilige Joseph en de Heilige Franciscus de Sales — één van de patroonheiligen van ons Instituut — die mij ontzettend heeft geholpen door zijn spiritualiteit die mij als het ware naar het Instituut heeft getrokken waar deze spiritualiteit wordt nageleefd."`,
        en: `"As I already said, Mary has had a guiding role in the vocational journey, but I also owe much to Saint Joseph and Saint Francis de Sales — one of the patron saints of our Institute — who helped me greatly through his spirituality, which drew me, as it were, to the Institute where this spirituality is lived."`,
      },
      {
        nl: `"Het is een relatie die door de Heilige Mis en het gebed voor het Allerheiligste Sacrament erg versterkt en verinnerlijkt is. Binnen ons Instituut hebben wij vooral een grote gehechtheid aan het Getijdengebed vanwege onze kanoniale roeping, die mij ook erg eigen is geworden. Het getijdengebed is na de Heilige Mis het belangrijkste gebed van de Heilige Kerk; het is door het zingen en bidden van de heilige gezangen uit de Heilige Schrift dat we ons in de Heilige Geest met het hoofd van de Kerk, Christus zelf, verbinden en een passend lof en verheerlijking brengen aan de Almachtige Vader."`,
        en: `"It is a relationship that has been greatly strengthened and interiorised through the Holy Mass and prayer before the Blessed Sacrament. Within our Institute we have a great attachment to the Divine Office because of our canonical vocation, which has also become very much my own. The Divine Office is, after the Holy Mass, the most important prayer of the Holy Church; it is through the singing and praying of the sacred chants from Holy Scripture that we unite ourselves in the Holy Spirit with the Head of the Church, Christ himself, and offer fitting praise and glorification to the Almighty Father."`,
      },
    ],
  },
  {
    title: {
      nl: "Seminarie-ervaring",
      en: "Seminary Experience",
    },
    paragraphs: [
      {
        nl: "Afgelopen juli ben ik exorcist gewijd en nu zit ik in het vierde jaar van mijn opleiding in het Seminarie van het Instituut van Christus Koning in Gricigliano vlak bij Florence. Ik ben dit jaar met de Theologie begonnen na drie jaar spiritualiteit en filosofie te hebben afgerond. Onze opleiding bedraagt zeven jaar in totaal, met één jaar van voorbereiding voorafgaand in een ander huis van het Instituut.",
        en: "Last July I was ordained as an exorcist and now I am in my fourth year of formation at the Seminary of the Institute of Christ the King in Gricigliano near Florence. This year I have begun Theology after completing three years of spirituality and philosophy. Our formation lasts seven years in total, with one preparatory year beforehand at another house of the Institute.",
      },
      {
        nl: "De studie is uitdagend maar tegelijkertijd erg interessant. Dit samen met nog veel meer seminaristen te mogen doen is een grote vreugde. De onderlinge band is erg belangrijk; het is een echt opbouwende factor in het seminarie. Men kan veel van de anderen en vooral van de oversten en priesters aldaar leren.",
        en: "The study is challenging but at the same time very interesting. Being able to do this together with so many other seminarians is a great joy. The mutual bond is very important; it is a truly upbuilding factor in the seminary. One can learn much from the others and especially from the superiors and priests there.",
      },
      {
        nl: "Vooral de conferenties die meerdere keren per jaar door onze stichter en generaal-overste worden gegeven zijn erg versterkend voor mijn roeping. Ook de begeleiding van de oversten helpt mij vaak de reden van mijn roeping in te zien en met nieuwe overtuiging door te kunnen gaan. Onze bedevaart voor het Heilig Jaar naar Rome heeft mij ook erg geraakt: een ware manifestatie van onze gehechtheid aan de Heilige Vader de Paus en aan de Ene, Heilige, Katholieke en Apostolische Kerk die ik persoonlijk zo trouw mogelijk wil dienen.",
        en: "The conferences given several times a year by our founder and superior general are especially strengthening for my vocation. The guidance of the superiors also often helps me to see the reason for my vocation and to continue with new conviction. Our pilgrimage for the Holy Year to Rome also moved me deeply: a true manifestation of our attachment to the Holy Father the Pope and to the One, Holy, Catholic and Apostolic Church, which I personally wish to serve as faithfully as possible.",
      },
      {
        nl: "In het seminarie worden we op alle facetten voorbereid van het priesterschap door middel van lessen, instructies, repetities voor de liturgie en lessen in gregoriaans. Naast de vorming hebben we ook met regelmaat handenarbeid om praktisch bezig te zijn en te leren voor onszelf te zorgen. Het leven als priester in de huidige maatschappij is in het geheel niet makkelijk; gelukkig worden we daar goed mee geholpen en sterk gemaakt om daartegen op te kunnen.",
        en: "In the seminary we are prepared in all aspects of the priesthood through lessons, instructions, rehearsals for the liturgy and lessons in Gregorian chant. Alongside formation we also regularly do manual work to be practically engaged and to learn to care for ourselves. Life as a priest in contemporary society is in no way easy; fortunately we are well helped and strengthened to face it.",
      },
    ],
  },
  {
    title: {
      nl: "Dankbaarheid en connectie met ondersteuners",
      en: "Gratitude and Connection with Supporters",
    },
    paragraphs: [
      {
        nl: "Deze ondersteuning betekent heel veel voor mij. Het betekent vooral dat ik mijn opleiding kan bekostigen en geen schulden over zal houden na afloop. Daarnaast geldt dit ook voor kleding, boeken, schrijfgerei en andere artikelen nodig voor het leven als seminarist.",
        en: "This support means a great deal to me. Above all it means that I can afford my formation and will have no debts at the end. This also extends to clothing, books, writing materials and other items needed for life as a seminarian.",
      },
      {
        nl: "Het gebed is het allerbelangrijkst wat iemand voor mij kan doen. Het is de beste ondersteuning die men aan een seminarist kan geven om te kunnen volharden en dat God de nodige genaden blijft verlenen.",
        en: "Prayer is the most important thing anyone can do for me. It is the best support one can give a seminarian to be able to persevere and for God to continue granting the necessary graces.",
      },
      {
        nl: "Ik wil hen vooral heel dankbaar zijn voor de nodige steun die door hen gegeven wordt. Deze dankbaarheid breng ik vooral in praktijk door mijn gebeden voor hen en ook door middel van Missen voor hun intenties in de toekomst. Ik zal minstens twee keer per dag een gebed tot de Heilige Joseph voor hen en hun intenties bidden en altijd open staan intenties of andere vragen te kunnen ontvangen en te beantwoorden.",
        en: "I especially wish to be very grateful to them for the necessary support they provide. I put this gratitude into practice above all through my prayers for them and also through Masses for their intentions in the future. I will pray at least twice a day to Saint Joseph for them and their intentions, and will always be open to receiving and answering intentions or other requests.",
      },
      {
        nl: "Voor het belang van onze congregaties en onze eigen vorming is het noodzakelijk dat de gelovigen bijdragen op financiële wijze. Wij worden niet door Rome noch door het bisdom ondersteund en het is een realiteit dat de docenten en de inwoning van de seminaristen moeten worden bekostigd, om de kwaliteit van de opleiding van de priester voor de toekomst optimaal te kunnen behouden. Dit is ook van groot belang voor de gelovigen zelf om goed gevormde priesters te hebben die hen kunnen begeleiden en helpen.",
        en: "For the benefit of our congregations and our own formation it is necessary that the faithful contribute financially. We receive no support from Rome or the diocese, and it is a reality that the teachers and the accommodation of the seminarians must be funded in order to maintain the quality of priestly formation for the future. This is also of great importance for the faithful themselves, in order to have well-formed priests who can guide and help them.",
      },
    ],
  },
  {
    title: {
      nl: "Visie en toekomst",
      en: "Vision and the Future",
    },
    paragraphs: [
      {
        nl: "Voor mij is het vooral belangrijk zo geheel mogelijk de idealen van onze spiritualiteit te kunnen naleven: leven rondom het Altaar van God en in gemeenschap met anderen, en van daaruit het apostolaat te kunnen beoefenen bij de gelovigen. De priester is ten eerste hij die apart is gezet door God voor zijn dienst en van daaruit leeft hij zelf en geeft hij zich voor de anderen.",
        en: "For me it is above all important to be able to live out as fully as possible the ideals of our spirituality: to live around the Altar of God and in community with others, and from there to exercise the apostolate among the faithful. The priest is first of all one who has been set apart by God for his service, and from that he lives himself and gives himself for others.",
      },
      {
        nl: "De hedendaagse wereld is heel erg leeg, als het ware. De mens kan zijn volheid alleen vinden in God en ik denk dat deze dorst naar Hem door de realisatie van de leegte en de schoonheid van de Waarheid van het Katholicisme velen langzamerhand naar de Kerk zal gaan brengen. Daar is de rol van de priester erg belangrijk om deze mensen op te vangen, voor hen de deuren van de redding door de sacramenten te openen en het leven van de genade in hun harten te laten stromen. Ik hoop daarbij mijn rol in dienst van Christus te kunnen spelen in en door Hem.",
        en: "The contemporary world is, as it were, very empty. Man can find his fullness only in God, and I think that this thirst for Him — through the realisation of the emptiness and the beauty of the Truth of Catholicism — will gradually bring many people to the Church. There the role of the priest is very important: to receive these people, to open for them the doors of salvation through the sacraments, and to let the life of grace flow into their hearts. I hope to be able to play my role there in the service of Christ, in and through Him.",
      },
      {
        nl: "In realiteit komt er geen één priester een waar verschil brengen in de Kerk als het niet door een bijzondere roeping van God is. Het is van hem gevraagd zich zo veel mogelijk in de Nederigheid en de Zachtmoedigheid van het Hart van Jezus te laten vormen en zo een waarlijk instrument te kunnen zijn in de hand van God. Dat trekt van zichzelf de mensen naar God toe — kijken we maar naar de Heilige Pastoor van Ars en de Heilige Pater Pio. Als de priester denkt door zichzelf de Kerk te kunnen veranderen, vergist hij zich flink en zal door zijn ijdelheid zijn ware doel en roeping niet bereiken.",
        en: "In reality not a single priest can bring a true difference to the Church unless it is through a special vocation from God. He is asked to allow himself to be formed as much as possible in the Humility and Meekness of the Heart of Jesus, and thus to be a true instrument in the hand of God. That in itself draws people toward God — we need only look at the Holy Curé of Ars and Saint Padre Pio. If a priest thinks he can change the Church by himself, he is greatly mistaken, and through his vanity he will not achieve his true goal and vocation.",
      },
    ],
  },
];

const gijsNumbered: Seminarist["numbered"] = [
  {
    title: { nl: "Opvoeding", en: "Upbringing" },
    quote: {
      nl: `"Ik ben de jongste van drie jongens uit een grote en hechte familie. Mijn familie is protestants en ik ben zelf 8 jaar Katholiek sinds Pasen 2017. Ook al was mijn opvoeding niet Katholiek, toch heb ik veel kennis van de Bijbel en een zekere relatie met God meegekregen die mij uiteindelijk ook veel geholpen heeft om na te denken over de Waarheid en mij uiteindelijk te kunnen bekeren tot de Katholieke Kerk."`,
      en: `"I am the youngest of three boys from a large and close family. My family is Protestant and I myself have been Catholic for 8 years since Easter 2017. Even though my upbringing was not Catholic, I did receive considerable knowledge of the Bible and a certain relationship with God, which ultimately helped me greatly to reflect on the Truth and eventually to convert to the Catholic Church."`,
    },
  },
  {
    title: { nl: "Studie", en: "Studies" },
    quote: {
      nl: `"Voorafgaand aan het seminarie heb ik drie jaar verpleegkunde gestudeerd in Utrecht. Ik heb daar veel over mensen en hun manier van denken kunnen leren en ook wat ziekte en lijden eigenlijk inhoudt. De kennis en ervaring die ik daar heb opgedaan kan voor mij erg handig zijn voor het pastoraat in de toekomst. Naast mijn opleiding deed ik veel vrijwilligerswerk voor de parochie en het jongerenwerk zoals het tienerkamp van het bisdom Haarlem-Amsterdam. Op zaterdag en tijdens de vakanties was ik ook werkzaam op een zorgboerderij voor kinderen met een verstandelijke beperking."`,
      en: `"Before the seminary I studied nursing for three years in Utrecht. There I was able to learn a great deal about people and their ways of thinking, and also about what illness and suffering actually mean. The knowledge and experience I gained there can be very useful for me in pastoral work in the future. Alongside my studies I did a great deal of volunteer work for the parish and youth ministry, such as the teenage camp of the Diocese of Haarlem-Amsterdam. On Saturdays and during holidays I also worked at a care farm for children with intellectual disabilities."`,
    },
  },
  {
    title: { nl: "Aspecten van het priesterschap", en: "Aspects of the Priesthood" },
    quote: {
      nl: `"Vooral de Heilige Liturgie trekt mij heel erg aan als essentieel deel van de roeping als Kanunnik die we proberen zo juist en mooi mogelijk uit te oefenen. Daarnaast ook de bediening van de heilige sacramenten en de gelovigen te kunnen helpen ingroeien in hun geloof door de geestelijke begeleiding."`,
      en: `"Above all the Holy Liturgy draws me greatly as an essential part of the vocation as a Canon, which we strive to exercise as correctly and beautifully as possible. In addition, the administration of the holy sacraments and being able to help the faithful grow in their faith through spiritual direction."`,
    },
  },
  {
    title: { nl: "Persoonlijke noot", en: "Personal Note" },
    quote: {
      nl: `"Het bijbelvers 'Spiritus en Sponsa dicunt veni' uit het laatste hoofdstuk van het boek Openbaringen grijpt mij erg aan. Het is God de Heilige Geest zelf die ons de roeping geeft door zijn Bruid de Heilige Kerk; het is alleen door de Geest en de Kerk dat iedere ziel zijn redding kan verkrijgen en wij onze specifieke roeping ontvangen. Buiten hen om dient het tot niets, maar in hen kunnen we leven in de vreugde van de kinderen Gods en onze roeping tot opbouw van het koninkrijk bewerkstelligen."`,
      en: `"The biblical verse 'Spiritus et Sponsa dicunt veni' from the last chapter of the Book of Revelation moves me deeply. It is God the Holy Spirit himself who gives us the vocation through his Bride the Holy Church; it is only through the Spirit and the Church that every soul can obtain its salvation and we receive our specific vocation. Apart from them it amounts to nothing, but within them we can live in the joy of the children of God and bring about our vocation in the building up of the kingdom."`,
    },
  },
];

const fabianSections: Seminarist["sections"] = [
  {
    title: { nl: "Persoonlijke achtergrond", en: "Personal Background" },
    paragraphs: [
      {
        nl: "Ik ben geboren in São Paulo, Brazilië, en opgegroeid in België met Nederlandse familiewortels in Brabant en Gelderland. Mijn tweelingbroer en ik groeiden op in een niet-gelovige omgeving: mijn vader was cultureel katholiek maar niet praktiserend, mijn moeder niet gelovig. Het katholieke geloof was voor mij vrijwel onbekend tot mijn eenentwintigste. Ik was toen overtuigd atheïst — voor mij was geloof een kunstmatige constructie die door 'simpele mensen' beoefend werd. Kerken vond ik mooi om de schoonheid, maar verder had het geen betekenis voor mij.",
        en: "I was born in São Paulo, Brazil, and raised in Belgium with Dutch family roots in Brabant and Gelderland. My twin brother and I grew up in a non-believing environment: my father was culturally Catholic but non-practising, my mother not religious. The Catholic faith was virtually unknown to me until I was twenty-one. I was a convinced atheist at the time — for me faith was an artificial construct practised by 'simple people'. I found churches beautiful for their beauty, but beyond that it held no meaning for me.",
      },
      {
        nl: "Toch bleef er iets knagen vanbinnen — een gevoel dat er iets niet klopte aan het beeld dat ik had van de wereld en van de kerk. Op een gegeven moment vroeg ik oprecht aan een mogelijke God wat de waarheid was. Niet lang daarna vond ik spontaan de Catechismus van de Katholieke Kerk in een bibliotheek. Ik was diep onder de indruk van de logische en redelijke uiteenzetting van het geloof. Hierna is een natuurlijke interesse ontstaan die alleen maar sterker werd.",
        en: "Yet something kept nagging inside — a feeling that something was wrong with the image I had of the world and of the Church. At a certain point I sincerely asked a possible God what the truth was. Not long afterwards I spontaneously found the Catechism of the Catholic Church in a library. I was deeply impressed by the logical and reasonable exposition of the faith. From that point a natural interest arose that only grew stronger.",
      },
      {
        nl: "Qua werk heb ik verschillende dingen gedaan: in de ICT, als timmerman en in de logistiek. Ik heb drie jaar op Campus Aquino (broeders van Sint-Jan) in Utrecht gewoond, waar ik een actief lid was van de gemeenschap. Ik organiseerde activiteiten, startte een initiatief tegen eenzaamheid in de buurt en bezocht regelmatig eenzame mensen om een luisterend oor te bieden. Het afgelopen jaar hielp ik een organisatie met het opzetten van een website en werkte ik als IT-support — mensen thuis helpen met hun telefoon, computer en printer.",
        en: "As for work, I have done various things: in IT, as a carpenter, and in logistics. I lived for three years at Campus Aquino (Brothers of Saint John) in Utrecht, where I was an active member of the community. I organised activities, started an initiative against loneliness in the neighbourhood and regularly visited lonely people to offer a listening ear. Last year I helped an organisation set up a website and worked as IT support — helping people at home with their phone, computer and printer.",
      },
    ],
  },
  {
    title: { nl: "Roeping en spiritueel leven", en: "Vocation and Spiritual Life" },
    paragraphs: [
      {
        nl: "Het eerste moment dat ik me sterk geroepen voelde was tijdens mijn doopsel, vijf jaar geleden op 23 augustus 2020. Ik reisde vanuit België zelfstandig naar het voor mij onbekende Sint-Janscentrum in Den Bosch. Daar vertelde men mij dat ik eerst een paar jaar katholiek moest zijn alvorens zo'n grote stap te zetten — dat voelde als een teleurstelling, maar ik aanvaardde het. Sindsdien is de vraag van de roeping altijd aanwezig gebleven in mijn leven, en zij werd sterker toen ik op Casa Nova ging wonen, waar Pater Jan Koopman mij inspireerde het idee van het priesterschap verder te verkennen.",
        en: "The first moment I felt strongly called was during my baptism, five years ago on 23 August 2020. I travelled independently from Belgium to the Saint John Centre in Den Bosch, which was unknown to me. There they told me I would first need to be Catholic for a few years before taking such a major step — that felt like a disappointment, but I accepted it. Since then the question of vocation has always remained present in my life, and it grew stronger when I went to live at Casa Nova, where Father Jan Koopman inspired me to further explore the idea of the priesthood.",
      },
      {
        nl: "Een bijzondere rol speelt de Heilige Maagd Maria, voor wie ik een diepe devotie voel — voornamelijk dankzij de heilige Louis Marie Grignion de Montfort en zijn boek 'De Ware Godsvrucht'. Ik heb sterk de indruk dat ik op een bijzondere manier aan Maria verbonden ben. Naast haar was de heilige Jozef een grote steun voor mij in het fysieke werk; hij kon betekenis geven aan het soms herhalende handenarbeid. Pater Jan Koopman is voor mij een persoonlijke gids geweest: ik voel mij diep verbonden met hem en ben ervan overtuigd dat hij voor mij bidt en mij aanspoort het priesterschap op te zoeken.",
        en: "A special role is played by the Blessed Virgin Mary, for whom I feel a deep devotion — primarily thanks to Saint Louis Marie Grignion de Montfort and his book 'True Devotion to Mary'. I have a strong impression that I am bound to Mary in a special way. Alongside her, Saint Joseph was a great support to me in physical work; he could give meaning to sometimes repetitive manual labour. Father Jan Koopman has been a personal guide for me: I feel deeply connected to him and am convinced that he prays for me and encourages me to pursue the priesthood.",
      },
      {
        nl: "Mijn relatie met God beschrijf ik als die van een vader en een zoon. In mijn jeugd heb ik mijn vader verloren aan leukemie. Die ervaring heeft mij geholpen een Vader in God te zien en te vinden — het gaat voor mij grotendeels om het betekenis geven aan lijden en verdriet, waarop Jezus het perfecte antwoord biedt. Samen met Jezus de Vader opzoeken is een grote bron van kracht. Ik voel mij ook sterk verbonden met de devotie tot de Smartelijke Maria. In mijn zwakheid is God sterk.",
        en: "I describe my relationship with God as that of a father and a son. In my youth I lost my father to leukaemia. That experience helped me to see and find a Father in God — for me it is largely about giving meaning to suffering and sorrow, for which Jesus offers the perfect answer. Seeking the Father together with Jesus is a great source of strength. I also feel strongly connected to devotion to Our Lady of Sorrows. In my weakness God is strong.",
      },
    ],
  },
  {
    title: { nl: "Visie en toekomst", en: "Vision and the Future" },
    paragraphs: [
      {
        nl: "Als God het wil, zie ik mezelf als een priester die dicht bij de mensen staat: die veel begeleiding biedt in spirituele zaken en mogelijke genezing van geestelijke aandoeningen, en die als onderwijzer van het Woord van God mensen naar Hem brengt. Mijn missie is de afgewezenen accepteren door Gods liefde.",
        en: "If God wills it, I see myself as a priest who is close to people: one who offers much guidance in spiritual matters and possible healing of spiritual afflictions, and who as a teacher of the Word of God brings people to Him. My mission is to welcome the rejected through God's love.",
      },
      {
        nl: "In de moderne wereld zie ik veel leegte, en ik wil het goede nieuws verkondigen dat de wereld niet leeg is en dat er hoop is. In het Westen zijn er grote problemen rondom vaderschap en identiteit. Het priesterschap biedt hier het perfecte antwoord: er is wel een Vader die om ons geeft en zijn Zoon heeft opgeofferd om ons te redden. Door Christus' identiteit te omarmen mogen wij het zoonschap van God de Vader ontvangen.",
        en: "In the modern world I see much emptiness, and I want to proclaim the good news that the world is not empty and that there is hope. In the West there are great problems surrounding fatherhood and identity. The priesthood offers the perfect answer here: there is indeed a Father who cares for us and who has sacrificed his Son to save us. By embracing Christ's identity we may receive the sonship of God the Father.",
      },
      {
        nl: "Het grote verschil dat ik kan maken vloeit voort uit de sterkte van mijn devotie tot Jezus in de Eucharistie en tot zijn heilige Moeder. Ik kan zelf geen verschil maken — alleen God door mij. Als God het wil, wil ik mij verder verdiepen in de leer van de menselijke ziel volgens de Thomistische psychologie, om mensen ook op psychologisch vlak te kunnen bijstaan.",
        en: "The great difference I can make flows from the strength of my devotion to Jesus in the Eucharist and to his holy Mother. I can make no difference myself — only God through me. If God wills it, I wish to deepen my understanding of the doctrine of the human soul according to Thomistic psychology, in order to be able to support people also on a psychological level.",
      },
    ],
  },
  {
    title: { nl: "Dankbaarheid en verbondenheid", en: "Gratitude and Connection" },
    paragraphs: [
      {
        nl: "De financiële ondersteuning van de stichting betekent heel veel voor mij. Het helpt mij te weten dat de gemeenschap achter ons staat en bijdraagt aan Gods plannen. Ik ben er enorm dankbaar voor — het is niet voor niets: we zijn in gebed verbonden.",
        en: "The financial support of the foundation means a great deal to me. It helps me to know that the community stands behind us and contributes to God's plans. I am enormously grateful for it — it is not in vain: we are united in prayer.",
      },
      {
        nl: "Ik zou graag om gebed willen vragen voor mijn familie, die niet gelovig is. Dat is een groot gemis in mijn leven. Het zou een droom zijn als ook zij dezelfde waarheid en liefde met betrekking tot onze Heer en zijn Moeder zouden leren kennen.",
        en: "I would like to ask for prayers for my family, who are not believers. That is a great lack in my life. It would be a dream if they too were to come to know the same truth and love concerning our Lord and his Mother.",
      },
      {
        nl: "De beste manier om ons te blijven ondersteunen is in gebed verbonden te blijven, ons af en toe te bezoeken en brieven te sturen. Bidt vooral voor vertrouwen en volharding.",
        en: "The best way to continue to support us is to remain united in prayer, to visit us occasionally and to send letters. Above all pray for trust and perseverance.",
      },
    ],
  },
];

const fabianNumbered: Seminarist["numbered"] = [
  {
    title: { nl: "Opvoeding", en: "Upbringing" },
    quote: {
      nl: `"Ik ben opgegroeid in een niet-gelovige familie in België. Het katholieke geloof was voor mij vrijwel onbekend tot mijn eenentwintigste — geloof was in mijn ogen iets dat door 'simpele mensen' beoefend werd. Maar iets diep vanbinnen bleef knagen, totdat ik oprecht vroeg aan een mogelijke God wat de waarheid was. Niet lang daarna vond ik spontaan de Catechismus van de Katholieke Kerk in een bibliotheek. Ik was diep onder de indruk van de logische en redelijke uiteenzetting van het geloof — en daarna is alles veranderd."`,
      en: `"I grew up in a non-believing family in Belgium. The Catholic faith was virtually unknown to me until I was twenty-one — in my eyes faith was something practised by 'simple people'. But something deep inside kept nagging, until I sincerely asked a possible God what the truth was. Not long afterwards I spontaneously found the Catechism of the Catholic Church in a library. I was deeply impressed by the logical and reasonable exposition of the faith — and after that everything changed."`,
    },
  },
  {
    title: { nl: "Opleiding en werk", en: "Education and Work" },
    quote: {
      nl: `"Ik heb het middelbaar ASO Wetenschappen-Wiskunde gedaan in België en een tijd Theologie gestudeerd aan de Universiteit van Tilburg in Utrecht, maar stopte daar omdat ik de inhoud niet constructief vond voor mijn geloof en toekomstig doel. Daarna volgde ik een opleiding timmeren en behaalde ik verschillende gerelateerde certificaten, evenals een beroepscertificaat in het bouwen van websites. Ik heb gewerkt in de ICT, als timmerman en in de logistiek. Het afgelopen jaar werkte ik als IT-support en hielp ik een organisatie met het opzetten van een website — ik vond het fijn om mensen net iets gelukkiger te kunnen maken."`,
      en: `"I completed secondary school in the sciences and mathematics stream in Belgium and studied Theology for a time at the University of Tilburg in Utrecht, but stopped because I did not find the content constructive for my faith and future goal. I then completed a carpentry training course and obtained various related certificates, as well as a vocational certificate in website building. I have worked in IT, as a carpenter and in logistics. Last year I worked as IT support and helped an organisation set up a website — I enjoyed being able to make people just a little happier."`,
    },
  },
  {
    title: { nl: "Aspecten van het priesterschap", en: "Aspects of the Priesthood" },
    quote: {
      nl: `"Onderwijzing en prediking van het geloof zijn aspecten waartoe ik mij sterk geroepen voel — in het verleden voelde ik mij sterk gedragen in zulke momenten. Ook de biecht spreekt mij erg aan: ik analyseer graag mensen en hun problemen en wil een antwoord bieden. Het persoonlijk helpen van mensen, geestelijke begeleiding bieden en spirituele genezing — dat is waartoe ik mij het diepst geroepen voel."`,
      en: `"Teaching and preaching the faith are aspects to which I feel strongly called — in the past I felt strongly supported in such moments. Confession also appeals greatly to me: I like to analyse people and their problems and want to offer an answer. Personally helping people, offering spiritual direction and spiritual healing — that is what I feel most deeply called to."`,
    },
  },
  {
    title: { nl: "Persoonlijke noot", en: "Personal Note" },
    quote: {
      nl: `"Sinds ik voor het geloof heb gekozen, is mijn leven een avontuur geworden. Hoe meer ik kies voor de Heer, hoe meer het een avontuur wordt. Johannes 8:12 inspireert mij bijzonder: 'Ik ben het licht der wereld. Wie Mij volgt, zal niet in de duisternis wandelen, maar het licht des levens bezitten.' Je kunt licht niet zomaar 'doen' — je kunt het alleen zijn. Net zoals je licht kunt zien met je ogen en voelen met je huid zonder te kunnen uitleggen hoe het werkt, zo werkt ook God."`,
      en: `"Since I chose for the faith, my life has become an adventure. The more I choose for the Lord, the more it becomes an adventure. John 8:12 inspires me particularly: 'I am the light of the world. He who follows Me will not walk in darkness, but will have the light of life.' You cannot simply 'do' light — you can only be it. Just as you can see light with your eyes and feel it on your skin without being able to explain how it works, so too does God work."`,
    },
  },
];

export const seminaristen: Seminarist[] = [
  {
    slug: "gijs-uittenbogaard",
    name: "Gijs Uittenbogaard",
    subtitle: {
      nl: `"Spiritus en Sponsa dicunt veni."`,
      en: `"Spiritus et Sponsa dicunt veni."`,
    },
    birthYear: 2002,
    origin: {
      nl: "uit Groot-Ammers — een klein dorpje in Zuid-Holland.",
      en: "from Groot-Ammers — a small village in South Holland.",
    },
    image: gijsImg,
    intro: {
      nl: "Ter kennismaking legt Gijs Uittenbogaard verder uit over wie hij is en hoe hij zijn roeping ervaart.",
      en: "By way of introduction, Gijs Uittenbogaard further explains who he is and how he experiences his vocation.",
    },
    sections: gijsSections,
    numbered: gijsNumbered,
  },
  {
    slug: "fabian-van-dijk",
    name: "Fabian van Dijk",
    subtitle: {
      nl: `"Wie Mij volgt, zal niet in de duisternis wandelen." — Joh. 8:12`,
      en: `"He who follows Me shall not walk in darkness." — Jn. 8:12`,
    },
    birthYear: 1997,
    origin: {
      nl: "geboren in Brazilië (São Paulo), opgegroeid in België met Nederlandse herkomst.",
      en: "born in Brazil (São Paulo), raised in Belgium with Dutch roots.",
    },
    image: fabianImg,
    intro: {
      nl: "Fabian Vitor van Dijk vertelt openhartig over zijn weg van atheïst naar roeping — geleid door genade, een diepe verbondenheid met Maria en de inspiratie van Pater Jan Koopman.",
      en: "Fabian Vitor van Dijk speaks openly about his journey from atheist to vocation — guided by grace, a deep bond with Mary and the inspiration of Father Jan Koopman.",
    },
    sections: fabianSections,
    numbered: fabianNumbered,
  },
];

export const getSeminarist = (slug: string) =>
  seminaristen.find((s) => s.slug === slug);
