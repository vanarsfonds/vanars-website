export type MisLink = [label: string, url: string];

export interface Mis {
  id: string;
  /** true = zondagsmis (beide tabs), false = alleen in "Alle missen" */
  sunday: boolean;
  org: "SSPX" | "FSSP" | "Diocesaan" | "Overig";
  name: string;
  city: string;
  time: string;
  address: string;
  lon: number;
  lat: number;
  links: MisLink[];
}

export const MISSEN: Mis[] = [
    { id: "gerwen", sunday: true, org: "SSPX", name: "Clemenskerk", city: "Gerwen", time: "Zondag 10.30 uur", address: "Heuvel 23, 5674 RR Nuenen-Gerwen", lon: 5.555, lat: 51.468, links: [["Website", "https://fsspx.be/nl/priorij-sint-clemens-gerwen-41523"], ["Instagram", "https://instagram.com/fsspx.gerwen"]] },
    { id: "utrecht", sunday: true, org: "SSPX", name: "Willibrordkerk", city: "Utrecht", time: "Zondag 10.30 uur", address: "Minrebroederstraat 21, 3512 GS Utrecht", lon: 5.122, lat: 52.093, links: [["Website", "https://sintwillibrordkerk.nl"], ["Instagram", "https://www.instagram.com/sintwillibrordkerk/"]] },
    { id: "leiden-sspx", sunday: true, org: "SSPX", name: "O.L.V. van de Rozenkrans", city: "Leiden", time: "Zondag 10.30 uur", address: "Sumatrastraat 197, 2315 BD Leiden", lon: 4.468, lat: 52.142, links: [["Website", "https://fsspx.be/nl/kapel-o-l-v-rozenkrans-leiden-41527"], ["Instagram", "https://www.instagram.com/olv_vanderozenkrans/"]] },
    { id: "lobith", sunday: true, org: "FSSP", name: "H. Maria Onbevlekt Ontvangen", city: "Lobith", time: "Zondag 10.30 uur", address: "Markt 4, 6915 AH Lobith", lon: 6.105, lat: 51.863, links: [["Website", "https://lobith.fssp.nl/mis-sacramenten/"], ["Instagram", "https://instagram.com/fssp.lobith"], ["Misrooster", "https://misrooster.nl/kerk/lobith/h-maria-onbevlekt-ontvangen"]] },
    { id: "amsterdam", sunday: true, org: "FSSP", name: "Agneskerk", city: "Amsterdam", time: "Zondag 11.00 uur", address: "Amstelveenseweg 163, 1075 XA Amsterdam", lon: 4.855, lat: 52.352, links: [["Website", "https://agneskerk.nl/liturgische-kalender/"], ["Instagram", "https://instagram.com/fssp.amsterdam"], ["Misrooster", "https://misrooster.nl/kerk/amsterdam/st-agneskerk"]] },
    { id: "warfhuizen", sunday: true, org: "Overig", name: "Besloten Tuin", city: "Warfhuizen", time: "Zondag 11.00 uur", address: "Baron van Asbeckweg 13, 9963 PA Warfhuizen", lon: 6.285, lat: 53.365, links: [["Website", "https://www.beslotentuin.nl/liturgie/"], ["Instagram", "https://instagram.com/paterhugowarfhuizen"], ["Misrooster", "https://misrooster.nl/kerk/warfhuizen/onze-lieve-vrouwe-van-de-besloten-tuin"]] },
    { id: "oss", sunday: true, org: "Diocesaan", name: "Grote Kerk", city: "Oss", time: "Zondag 12.00 uur", address: "Kerkstraat 15, 5341 BK Oss", lon: 5.517, lat: 51.765, links: [["Website", "https://tlmdenbosch.nl"], ["Instagram", "https://instagram.com/latijnsemisoss"], ["Misrooster", "https://misrooster.nl/kerk/oss/ol-vrouw-onbevlekt-ontvangen"]] },
    { id: "overveen", sunday: true, org: "Diocesaan", name: "O.L.V. Onbevlekt Ontvangen", city: "Overveen", time: "Zondag 16.30 uur, 2× per maand", address: "Korte Zijlweg 5, 2051 BD Overveen", lon: 4.603, lat: 52.390, links: [["Website", "https://rkhaarlem.nl/tridentijns/"], ["Misrooster", "https://misrooster.nl/kerk/overveen/onze-lieve-vrouw-onbevlekt-ontvangen"]] },

    { id: "heiloo", sunday: false, org: "Diocesaan", name: "Bedevaartkapel O.L.V. ter Nood", city: "Heiloo", time: "Elke tweede en vierde dinsdag van de maand, 18.30 uur", address: "Kapellaan 146, 1851 PE Heiloo", lon: 4.700, lat: 52.600, links: [["Website", "https://olvternood.nl/tridentijnse-missen-op-het-heiligdom"], ["Misrooster", "https://misrooster.nl/kerk/heiloo/bedevaartskerk-ol-vrouw-ter-nood"]] },
    { id: "leiden-lodewijk", sunday: false, org: "Diocesaan", name: "Lodewijkkerk", city: "Leiden", time: "Elke dinsdag, 19.00 uur", address: "Steenschuur 19, 2311 ES Leiden", lon: 4.490, lat: 52.160, links: [["Website", "https://lodewijkparochie.nl/vieringen"], ["Misrooster", "https://misrooster.nl/kerk/leiden/lodewijkkerk-vm-kapel-sint-jacobsgasthuis"]] },
    { id: "limbricht", sunday: false, org: "Diocesaan", name: "Salviuskerk", city: "Limbricht", time: "Elke vrijdag, 19.00 uur, en zaterdag, 9.00 uur", address: "Pastoor Janssenstraat 14, 6141 AN Limbricht", lon: 5.805, lat: 51.003, links: [["Website", "https://parochieclusterlimbricht.nl/kerkberichten-misintenties"], ["Misrooster", "https://misrooster.nl/kerk/limbricht/heilige-salvius"]] },
    { id: "steenwijkerwold", sunday: false, org: "Diocesaan", name: "Andreaskerk", city: "Steenwijkerwold", time: "Elke dag, 7.30 uur behalve zondag", address: "Gelderingen 79, 8341 PV Steenwijkerwold", lon: 6.015, lat: 52.785, links: [["Misrooster", "https://misrooster.nl/kerk/steenwijkerwold/sint-andreaskerk"]] }
  ] as Mis[];
