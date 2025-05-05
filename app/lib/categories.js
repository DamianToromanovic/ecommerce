const defaultImageUrls = [
  "/images/products/waschtisch1.jpg",
  "/images/products/waschtisch2.jpg",
  "/images/products/waschtisch3.jpg",
  "/images/products/set2.jpg",
  "/images/products/set3.jpg",
  "/images/products/spiegelschrank1.jpg",
  "/images/products/spiegelschrank2.jpg",
  "/images/products/spiegelschrank3.jpeg",
  "/images/products/duschkabine1.jpg",
  "/images/products/duschkabine2.jpeg",
  "/images/products/duschkabine3.jpg",
  "/images/products/duschwanne2.jpg",
  "/images/products/armaturen1.jpg",
  "/images/products/armaturen2.jpg",
  "/images/products/armaturen3.jpg",
  "/images/products/badewann1.jpg",
  "/images/products/badewanne2.jpg",
  "/images/products/badewann3.jpg",
  "/images/products/aufsatz.jpg",
];

function getRandomDefaultImage() {
  const randomIndex = Math.floor(Math.random() * defaultImageUrls.length);
  return defaultImageUrls[randomIndex];
}

const categories = [
  {
    slug: "badmoebel",
    title: "Badmöbel",
    image: "/images/products/waschtisch1.jpg",
    subcategories: [
      {
        name: "Badmöbel Sets",
        slug: "badmoebel-sets",
        image: "/images/products/Badmöbel-Set Elegance2.jpg",
      },
      {
        name: "Waschtische mit Unterschrank",
        slug: "waschtische",
        image: "/images/products/Waschtisch Urban3.jpg",
      },
      {
        name: "Spiegelschränke",
        slug: "spiegelschraenke",
        image: "/images/products/Spiegelschrank Compact1.jpg",
      },
      {
        name: "Badspiegel",
        slug: "badspiegel",
        image: "/images/products/spiegelschrank2.jpg",
      },
      {
        name: "Badschränke",
        slug: "badschraenke",
        image: "/images/products/spiegelschrank3.jpeg",
      },
      {
        name: "Waschtischunterschränke",
        slug: "waschtischunterschraenke",
        image: "/images/products/waschtisch3.jpg",
      },
      {
        name: "Einzelmöbel",
        slug: "einzelmoebel",
        image: "/images/products/waschtisch1.jpg",
      },
      {
        name: "Gäste- & Kleinbäder",
        slug: "gaestebad",
        image: "/images/products/set3.jpg",
      },
      {
        name: "Sale %",
        slug: "sale",
        image: "/images/products/armaturen1.jpg",
      },
    ],
  },
  {
    slug: "duschen",
    title: "Duschen",
    image: "/images/products/duschkabine1.jpg",
    subcategories: [
      {
        name: "Duschkabinen",
        slug: "duschkabinen",
        image: "/images/products/duschkabine2.jpeg",
      },
      {
        name: "Duschwannen",
        slug: "duschwannen",
        image: "/images/products/duschwanne2.jpg",
      },
      {
        name: "Duschrückwände",
        slug: "duschrueckwaende",
        image: "/images/products/duschkabine3.jpg",
      },
      {
        name: "Duschsysteme",
        slug: "duschsysteme",
        image: "/images/products/duschkabine1.jpg",
      },
      {
        name: "Duschpaneele",
        slug: "duschpaneele",
        image: "/images/products/armaturen1.jpg",
      },
      {
        name: "Brausen",
        slug: "brausen",
        image: "/images/products/armaturen2.jpg",
      },
      {
        name: "Duscharmaturen",
        slug: "duscharmaturen",
        image: "/images/products/armaturen3.jpg",
      },
      {
        name: "Gäste- & Kleinbäder",
        slug: "gaestebad",
        image: "/images/products/waschtisch1.jpg",
      },
      {
        name: "Barrierefreie Duschen",
        slug: "barrierefrei",
        image: "/images/products/duschkabine3.jpg",
      },
      {
        name: "Sale %",
        slug: "sale",
        image: "/images/products/armaturen2.jpg",
      },
    ],
  },
  {
    slug: "baden",
    title: "Baden",
    image: "/images/products/badewann1.jpg",
    subcategories: [
      {
        name: "Badewannen",
        slug: "badewannen",
        image: "/images/products/badewanne2.jpg",
      },
      {
        name: "Whirlpools",
        slug: "whirlpools",
        image: "/images/products/badewann3.jpg",
      },
      {
        name: "Badewannenaufsätze",
        slug: "badewannenaufsaetze",
        image: "/images/products/aufsatz.jpg",
      },
      {
        name: "Badewannenarmaturen",
        slug: "badewannenarmaturen",
        image: "/images/products/armaturen1.jpg",
      },
      {
        name: "Brausegarnituren",
        slug: "brausegarnituren",
        image: "/images/products/armaturen3.jpg",
      },
      {
        name: "Handbrausen",
        slug: "handbrausen",
        image: "/images/products/duschkabine1.jpg",
      },
      {
        name: "Gäste- & Kleinbäder",
        slug: "gaestebad",
        image: "/images/products/badewanne2.jpg",
      },
      {
        name: "Barrierefreie Badewannen",
        slug: "barrierefrei",
        image: "/images/products/badewann3.jpg",
      },
      { name: "Sale %", slug: "sale", image: "/images/products/badewann1.jpg" },
    ],
  },
  {
    slug: "badheizkoerper",
    title: "Badheizkörper",
    image: "/images/products/Handtuchheizkörper1.jpg",
    subcategories: [
      {
        name: "Handtuchheizkörper",
        slug: "handtuchheizkoerper",
        image: "/images/products/Handtuchheizkörper1.jpg",
      },
      {
        name: "Elektroheizkörper",
        slug: "elektroheizkoerper",
        image: "/images/products/Elektroheizkörper Slim1.jpg",
      },
      {
        name: "Flächenheizkörper",
        slug: "flaechenheizkoerper",
        image: "/images/products/Flaechenheizkoerper Classic1.jpg",
      },
      {
        name: "Röhrenheizkörper",
        slug: "roehrensysteme",
        image: "/images/products/Handtuchheizkörper Premium1.jpg",
      },
      {
        name: "Paneelheizkörper",
        slug: "paneelheizkoerper",
        image: "/images/products/Elektroheizkörper Eco1.jpg",
      },
      {
        name: "Infrarotheizkörper",
        slug: "infrarotheizkoerper",
        image: "/images/products/Flaechenheizkörper XL1.jpg",
      },
      {
        name: "Sale %",
        slug: "sale",
        image: "/images/products/Flaechenheizkoerper Design1.jpg",
      },
    ],
  },
  {
    slug: "badkeramik",
    title: "Badkeramik",
    image: "/images/products/Waschtisch Classic1.jpg",
    subcategories: [
      {
        name: "Waschtische & Waschbecken",
        slug: "waschtische",
        image: "/images/products/Waschtisch Classic1.jpg",
      },
      {
        name: "Aufsatzwaschbecken",
        slug: "aufsatzwaschbecken",
        image: "/images/products/Aufsatzwaschbecken1.jpg",
      },
      {
        name: "Handwaschbecken",
        slug: "handwaschbecken",
        image: "/images/products/Handwaschbecken Kompakt1.jpg",
      },
      {
        name: "WCs & Toiletten",
        slug: "toiletten",
        image: "/images/products/wc-toiletten.jpg",
      },
      { name: "Bidets", slug: "bidets", image: "/images/products/bidets.jpg" },
      {
        name: "Urinale",
        slug: "urinale",
        image: "/images/products/urinale.jpeg",
      },
      {
        name: "Drückerplatten & Betätigungsplatten",
        slug: "drueckerplatten",
        image: "/images/products/Drückerplatten & Betätigungsplatten.jpg",
      },
      {
        name: "Spülkästen",
        slug: "spuelkaesten",
        image: "/images/products/spülkästen.jpg",
      },
      {
        name: "Sale %",
        slug: "sale",
        image: "/images/products/badezimmer.jpg",
      },
    ],
  },
  {
    slug: "badarmaturen",
    title: "Badarmaturen",
    image: getRandomDefaultImage(),
    subcategories: [
      {
        name: "Waschtischarmaturen",
        slug: "waschtischarmaturen",
        image: "/images/products/Waschtischarmatur Modern1.jpg",
      },
      {
        name: "Duscharmaturen",
        slug: "duscharmaturen",
        image: "/images/products/Duscharmaturen Thermostat1.jpg",
      },
      {
        name: "Badewannenarmaturen",
        slug: "badewannenarmaturen",
        image: "/images/products/Badewannenarmatur Elegance1.jpg",
      },
      {
        name: "Bidetarmaturen",
        slug: "bidetarmaturen",
        image: "/images/products/bidetarmaturen.jpg",
      },
      {
        name: "Duschsysteme & -paneele",
        slug: "duschsysteme",
        image: "/images/products/duschsysteme.jpg",
      },
      {
        name: "Brausen",
        slug: "brausen",
        image: "/images/products/brausen.jpg",
      },
      {
        name: "Häufig gesucht",
        slug: "haeufig-gesucht",
        image: getRandomDefaultImage(),
      },
    ],
  },
  {
    slug: "zubehoer",
    title: "Zubehör",
    image: getRandomDefaultImage(),
    subcategories: [
      {
        name: "Bad-Accessoires",
        slug: "bad-accessoires",
        image: "/images/products/Bad-Accessoire Sets1.jpg",
      },
      {
        name: "Bad-Zubehör",
        slug: "bad-zubehoer",
        image: "/images/products/Bad-Set Modern1.jpg",
      },
      {
        name: "Bad-Accessoire Sets",
        slug: "accessoire-sets",
        image: "/images/products/accessoire-sets.jpg",
      },
      {
        name: "Handtuchhalter",
        slug: "handtuchhalter",
        image: "/images/products/Handtuchhalter Modern2.jpg",
      },
      {
        name: "Kosmetikspiegel",
        slug: "kosmetikspiegel",
        image: "/images/products/kosmetikspiegel.jpg",
      },
      {
        name: "Barrierefreies Bad",
        slug: "barrierefrei",
        image: "/images/products/barrierefrei.jpg",
      },
    ],
  },
];

export default categories;
