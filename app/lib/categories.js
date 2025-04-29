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
        image: "/images/products/set2.jpg",
      },
      {
        name: "Waschtische mit Unterschrank",
        slug: "waschtische",
        image: "/images/products/waschtisch2.jpg",
      },
      {
        name: "Spiegelschränke",
        slug: "spiegelschraenke",
        image: "/images/products/spiegelschrank1.jpg",
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
    image: getRandomDefaultImage(),
    subcategories: [
      {
        name: "Handtuchheizkörper",
        slug: "handtuchheizkoerper",
        image: getRandomDefaultImage(),
      },
      {
        name: "Elektroheizkörper",
        slug: "elektroheizkoerper",
        image: getRandomDefaultImage(),
      },
      {
        name: "Flächenheizkörper",
        slug: "flaechenheizkoerper",
        image: getRandomDefaultImage(),
      },
      {
        name: "Röhrenheizkörper",
        slug: "roehrensysteme",
        image: getRandomDefaultImage(),
      },
      {
        name: "Paneelheizkörper",
        slug: "paneelheizkoerper",
        image: getRandomDefaultImage(),
      },
      {
        name: "Infrarotheizkörper",
        slug: "infrarotheizkoerper",
        image: getRandomDefaultImage(),
      },
      {
        name: "Gäste- & Kleinbäder",
        slug: "gaestebad",
        image: getRandomDefaultImage(),
      },
    ],
  },
  {
    slug: "badkeramik",
    title: "Badkeramik",
    image: getRandomDefaultImage(),
    subcategories: [
      {
        name: "Waschtische & Waschbecken",
        slug: "waschtische",
        image: getRandomDefaultImage(),
      },
      {
        name: "Aufsatzwaschbecken",
        slug: "aufsatzwaschbecken",
        image: getRandomDefaultImage(),
      },
      {
        name: "Handwaschbecken",
        slug: "handwaschbecken",
        image: getRandomDefaultImage(),
      },
      {
        name: "WCs & Toiletten",
        slug: "toiletten",
        image: getRandomDefaultImage(),
      },
      { name: "Bidets", slug: "bidets", image: getRandomDefaultImage() },
      { name: "Urinale", slug: "urinale", image: getRandomDefaultImage() },
      {
        name: "Drückerplatten & Betätigungsplatten",
        slug: "drueckerplatten",
        image: getRandomDefaultImage(),
      },
      {
        name: "Spülkästen",
        slug: "spuelkaesten",
        image: getRandomDefaultImage(),
      },
      {
        name: "Ablauf- & Montagesysteme",
        slug: "montagesysteme",
        image: getRandomDefaultImage(),
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
        image: getRandomDefaultImage(),
      },
      {
        name: "Duscharmaturen",
        slug: "duscharmaturen",
        image: getRandomDefaultImage(),
      },
      {
        name: "Badewannenarmaturen",
        slug: "badewannenarmaturen",
        image: getRandomDefaultImage(),
      },
      {
        name: "Bidetarmaturen",
        slug: "bidetarmaturen",
        image: getRandomDefaultImage(),
      },
      {
        name: "Duschsysteme & -paneele",
        slug: "duschsysteme",
        image: getRandomDefaultImage(),
      },
      { name: "Brausen", slug: "brausen", image: getRandomDefaultImage() },
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
        image: getRandomDefaultImage(),
      },
      {
        name: "Bad-Zubehör",
        slug: "bad-zubehoer",
        image: getRandomDefaultImage(),
      },
      {
        name: "Bad-Accessoire Sets",
        slug: "accessoire-sets",
        image: getRandomDefaultImage(),
      },
      {
        name: "Handtuchhalter",
        slug: "handtuchhalter",
        image: getRandomDefaultImage(),
      },
      {
        name: "Kosmetikspiegel",
        slug: "kosmetikspiegel",
        image: getRandomDefaultImage(),
      },
      {
        name: "Barrierefreies Bad",
        slug: "barrierefrei",
        image: getRandomDefaultImage(),
      },
    ],
  },
];

export default categories;
