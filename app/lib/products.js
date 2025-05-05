const categories = [
  {
    id: "badmoebel",
    name: "Badmöbel",
    subcategories: [
      {
        id: "badmoebel-sets",
        name: "Badmöbel Sets",
        products: [
          {
            id: "1",
            name: "Badmöbel-Set Elegance",
            description:
              "Modernes Badmöbel-Set mit Spiegel und Unterschrank in Hochglanz-Optik.",
            price: 899.99,
            stock: 12,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Badmöbel-Set Elegance1.jpg",
            images: [
              "/images/products/Badmöbel-Set Elegance1.jpg",
              "/images/products/Badmöbel-Set Elegance2.jpg",
              "/images/products/Badmöbel-Set Elegance3.jpg",
              "/images/products/Badmöbel-Set Elegance4.jpg",
            ],
          },
          {
            id: "2",
            name: "Badmöbel-Set Classic",
            description:
              "Klassisches Badmöbel-Set aus Massivholz für ein warmes Badezimmer-Ambiente.",
            price: 749.99,
            stock: 5,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Badmöbel-Set Classic1.jpg",
            images: [
              "/images/products/Badmöbel-Set Classic1.jpg",
              "/images/products/Badmöbel-Set Classic2.jpg",
              "/images/products/Badmöbel-Set Classic3.jpg",
              "/images/products/Badmöbel-Set Classic4.jpg",
            ],
          },
          {
            id: "3",
            name: "Badmöbel-Set Minimal",
            description:
              "Minimalistisches Badmöbel-Set mit großzügigem Stauraum und LED-Beleuchtung.",
            price: 699.99,
            stock: 8,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Badmöbel-Set Minimal1.jpg",
            images: [
              "/images/products/Badmöbel-Set Minimal1.jpg",
              "/images/products/Badmöbel-Set Minimal2.jpg",
              "/images/products/Badmöbel-Set Minimal3.jpg",
              "/images/products/Badmöbel-Set Minimal4.jpg",
            ],
          },
        ],
      },
      {
        id: "waschtische",
        name: "Waschtische mit Unterschrank",
        products: [
          {
            id: "4",
            name: "Waschtisch Urban",
            description:
              "Kompakter Waschtisch mit Unterschrank – ideal für kleine Bäder.",
            price: 499.99,
            stock: 15,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Waschtisch Urban3.jpg",
            images: [
              "/images/products/Waschtisch Urban1.jpg",
              "/images/products/Waschtisch Urban2.jpg",
              "/images/products/Waschtisch Urban3.jpg",
              "/images/products/Waschtisch Urban4.jpg",
            ],
          },
          {
            id: "5",
            name: "Waschtisch Deluxe",
            description:
              "Luxuriöser Waschtisch mit doppelseitigem Unterschrank und Marmorplatte.",
            price: 899.99,
            stock: 4,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Waschtisch Deluxe4.jpg",
            images: [
              "/images/products/Waschtisch Deluxe1.jpg",
              "/images/products/Waschtisch Deluxe2.jpg",
              "/images/products/Waschtisch Deluxe3.jpg",
              "/images/products/Waschtisch Deluxe4.jpg",
            ],
          },
          {
            id: "6",
            name: "Waschtisch Nordic",
            description:
              "Skandinavischer Stil: Heller Waschtisch mit Holzoptik-Unterschrank.",
            price: 599.99,
            stock: 10,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Waschtisch Nordic1.jpg",
            images: [
              "/images/products/Waschtisch Nordic1.jpg",
              "/images/products/Waschtisch Nordic2.jpg",
              "/images/products/Waschtisch Nordic3.jpg",
              "/images/products/Waschtisch Nordic4.jpg",
            ],
          },
        ],
      },
      {
        id: "spiegelschraenke",
        name: "Spiegelschränke",
        products: [
          {
            id: "7",
            name: "Spiegelschrank Vision",
            description:
              "Großer Spiegelschrank mit LED-Beleuchtung und Steckdose innen.",
            price: 399.99,
            stock: 9,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Spiegelschrank Vision1.jpg",
            images: [
              "/images/products/Spiegelschrank Vision1.jpg",
              "/images/products/Spiegelschrank Vision2.jpg",
              "/images/products/Spiegelschrank Vision3.jpg",
              "/images/products/Spiegelschrank Vision4.jpg",
            ],
          },
          {
            id: "8",
            name: "Spiegelschrank Compact",
            description: "Kompakter Spiegelschrank mit 2 Türen und Ablagen.",
            price: 299.99,
            stock: 18,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Spiegelschrank Compact1.jpg",
            images: [
              "/images/products/Spiegelschrank Compact1.jpg",
              "/images/products/Spiegelschrank Compact2.jpg",
              "/images/products/Spiegelschrank Compact3.jpg",
              "/images/products/Spiegelschrank Compact4.jpg",
            ],
          },
          {
            id: "9",
            name: "Spiegelschrank Lux",
            description:
              "Eleganter Spiegelschrank mit Touch-Sensor und Dimmfunktion.",
            price: 499.99,
            stock: 7,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Spiegelschrank Lux2.jpg",
            images: [
              "/images/products/Spiegelschrank Lux1.jpg",
              "/images/products/Spiegelschrank Lux2.jpg",
              "/images/products/Spiegelschrank Lux3.jpg",
              "/images/products/Spiegelschrank Lux4.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "duschen",
    name: "Duschen",
    subcategories: [
      {
        id: "duschkabinen",
        name: "Duschkabinen",
        products: [
          {
            id: "10",
            name: "Duschkabine Corner",
            description:
              "Eck-Duschkabine aus Sicherheitsglas mit Schiebetüren.",
            price: 649.99,
            stock: 6,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Duschkabine Corner1.jpg",
            images: [
              "/images/products/Duschkabine Corner1.jpg",
              "/images/products/Duschkabine Corner2.jpg",
              "/images/products/Duschkabine Corner3.jpg",
              "/images/products/Duschkabine Corner4.jpg",
            ],
          },
          {
            id: "11",
            name: "Walk-In Duschkabine",
            description:
              "Offene Walk-In Duschkabine für ein modernes Badezimmergefühl.",
            price: 799.99,
            stock: 5,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Walk-In Duschkabine1.jpg",
            images: [
              "/images/products/Walk-In Duschkabine1.jpg",
              "/images/products/Walk-In Duschkabine2.jpg",
              "/images/products/Walk-In Duschkabine3.jpg",
              "/images/products/Walk-In Duschkabine4.jpg",
            ],
          },
          {
            id: "12",
            name: "Runddusche Compact",
            description:
              "Platzsparende Runddusche ideal für kleine Badezimmer.",
            price: 599.99,
            stock: 8,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Runddusche Compact1.jpg",
            images: [
              "/images/products/Runddusche Compact1.jpg",
              "/images/products/Runddusche Compact2.jpg",
              "/images/products/Runddusche Compact3.jpg",
              "/images/products/Runddusche Compact4.jpg",
            ],
          },
        ],
      },
      {
        id: "duschwannen",
        name: "Duschwannen",
        products: [
          {
            id: "13",
            name: "Duschwanne Slim",
            description:
              "Ultra-flache Duschwanne mit rutschhemmender Oberfläche.",
            price: 349.99,
            stock: 10,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Duschwanne Slim1.jpg",
            images: [
              "/images/products/Duschwanne Slim1.jpg",
              "/images/products/Duschwanne Slim2.jpg",
              "/images/products/Duschwanne Slim3.jpg",
              "/images/products/Duschwanne Slim4.jpg",
            ],
          },
          {
            id: "14",
            name: "Duschwanne Classic",
            description: "Klassische Duschwanne aus Sanitäracryl.",
            price: 299.99,
            stock: 12,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Duschwanne Classic1.jpg",
            images: [
              "/images/products/Duschwanne Classic1.jpg",
              "/images/products/Duschwanne Classic2.jpg",
              "/images/products/Duschwanne Classic3.jpg",
              "/images/products/Duschwanne Classic4.jpg",
            ],
          },
          {
            id: "15",
            name: "Duschwanne Stone",
            description: "Edle Steinoptik für luxuriöse Badezimmer.",
            price: 499.99,
            stock: 7,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/Duschwanne Stone1.jpg",
            images: [
              "/images/products/Duschwanne Stone1.jpg",
              "/images/products/Duschwanne Stone2.jpg",
              "/images/products/Duschwanne Stone3.jpg",
              "/images/products/Duschwanne Stone4.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "baden",
    name: "Baden",
    subcategories: [
      {
        id: "badewannen",
        name: "Badewannen",
        products: [
          {
            id: "16",
            name: "Freistehende Badewanne Pure",
            description:
              "Elegante freistehende Wanne für ultimatives Badeerlebnis.",
            price: 1199.99,
            stock: 4,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/badewann1.jpg",

            image: "/images/products/Freistehende Badewanne Pure1.jpg",
            images: [
              "/images/products/Freistehende Badewanne Pure1.jpg",
              "/images/products/Freistehende Badewanne Pure2.jpg",
              "/images/products/Freistehende Badewanne Pure3.jpg",
              "/images/products/Freistehende Badewanne Pure4.jpg",
            ],
          },
          {
            id: "17",
            name: "Badewanne Relax",
            description:
              "Komfort-Badewanne mit ergonomischer Form und Armlehnen.",
            price: 999.99,
            stock: 6,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/badewanne2.jpg",

            image: "/images/products/Badewanne Relax1.jpg",
            images: [
              "/images/products/Badewanne Relax1.jpg",
              "/images/products/Badewanne Relax2.jpg",
              "/images/products/Badewanne Relax3.jpg",
              "/images/products/Badewanne Relax4.jpg",
            ],
          },
          {
            id: "18",
            name: "Badewanne Eco",
            description: "Nachhaltige Badewanne aus recyclebarem Material.",
            price: 899.99,
            stock: 9,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/badewann3.jpg",

            image: "/images/products/Badewanne Eco1.jpg",
            images: [
              "/images/products/Badewanne Eco1.jpg",
              "/images/products/Badewanne Eco2.jpg",
              "/images/products/Badewanne Eco3.jpg",
              "/images/products/Badewanne Eco4.jpg",
            ],
          },
        ],
      },
      {
        id: "badewannenaufsaetze",
        name: "Badewannenaufsätze",
        products: [
          {
            id: "19",
            name: "Badewannenaufsatz Glas",
            description: "Moderner Badewannenaufsatz aus Klarglas.",
            price: 249.99,
            stock: 14,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/aufsatz.jpg",

            image: "/images/products/Badewannenaufsatz Glas1.jpg",
            images: [
              "/images/products/Badewannenaufsatz Glas1.jpg",
              "/images/products/Badewannenaufsatz Glas2.jpg",
              "/images/products/Badewannenaufsatz Glas3.jpg",
              "/images/products/Badewannenaufsatz Glas4.jpg",
            ],
          },
          {
            id: "20",
            name: "Badewannenaufsatz Faltbar",
            description: "Faltbarer Aufsatz für flexible Nutzung.",
            price: 199.99,
            stock: 17,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/aufsatz2.jpg",

            image: "/images/products/Badewannenaufsatz Faltbar2.jpg",
            images: [
              "/images/products/Badewannenaufsatz Faltbar1.jpg",
              "/images/products/Badewannenaufsatz Faltbar2.jpg",
              "/images/products/Badewannenaufsatz Faltbar3.jpg",
              "/images/products/Badewannenaufsatz Faltbar4.jpg",
            ],
          },
          {
            id: "21",
            name: "Badewannenaufsatz Premium",
            description: "Hochwertiger Aufsatz mit Beschichtung gegen Kalk.",
            price: 299.99,
            stock: 11,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/aufsatz3.jpg",

            image: "/images/products/Badewannenaufsatz Premium1.jpg",
            images: [
              "/images/products/Badewannenaufsatz Premium1.jpg",
              "/images/products/Badewannenaufsatz Premium2.jpg",
              "/images/products/Badewannenaufsatz Premium3.jpg",
              "/images/products/Badewannenaufsatz Premium4.jpg",
            ],
          },
        ],
      },
      {
        id: "badewannenarmaturen",
        name: "Badewannenarmaturen",
        products: [
          {
            id: "22",
            name: "Armatur Elegance",
            description: "Elegante Badewannenarmatur mit Thermostat.",
            price: 349.99,
            stock: 15,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/armaturen1.jpg",

            image: "/images/products/Badewannenarmaturen1.jpg",
            images: [
              "/images/products/Badewannenarmaturen1.jpg",
              "/images/products/Badewannenarmaturen2.jpg",
              "/images/products/Badewannenarmaturen3.jpg",
              "/images/products/Badewannenarmaturen4.jpg",
            ],
          },
          {
            id: "23",
            name: "Armatur Classic",
            description: "Klassische Wannenarmatur mit Handbrause.",
            price: 299.99,
            stock: 12,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/armaturen2.jpg",

            image: "/images/products/Armatur Classic1.jpg",
            images: [
              "/images/products/Armatur Classic1.jpg",
              "/images/products/Armatur Classic2.jpg",
              "/images/products/Armatur Classic3.jpg",
              "/images/products/Armatur Classic4.jpg",
            ],
          },
          {
            id: "24",
            name: "Armatur Minimal",
            description: "Minimalistische Badewannenarmatur aus Edelstahl.",
            price: 399.99,
            stock: 8,

            oldPrice: 1179.0,
            discount: 24,
            articleNumber: "HSK-426018",
            width: "103.2cm",
            depth: "46.5 cm",

            image: "/images/products/armaturen3.jpg",

            image: "/images/products/Armatur Minimal1.jpg",
            images: [
              "/images/products/Armatur Minimal1.jpg",
              "/images/products/Armatur Minimal2.jpg",
              "/images/products/Armatur Minimal3.jpg",
              "/images/products/Armatur Minimal4.jpg",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "badheizkoerper",
    name: "Badheizkörper",
    subcategories: [
      {
        id: "handtuchheizkoerper",
        name: "Handtuchheizkörper",
        products: [
          {
            id: "25",
            name: "Handtuchheizkörper Classic",
            description: "Zeitloser Handtuchheizkörper aus Edelstahl.",
            price: 249.99,
            stock: 10,
            image: "/images/products/Handtuchheizkörper1.jpg",
            images: [
              "/images/products/Handtuchheizkörper1.jpg",
              "/images/products/Handtuchheizkörper2.jpg",
              "/images/products/Handtuchheizkörper3.jpg",
              "/images/products/Handtuchheizkörper4.jpg",
            ],
          },
          {
            id: "26",
            name: "Handtuchheizkörper Modern",
            description: "Flacher Design-Heizkörper für moderne Bäder.",
            price: 299.99,
            stock: 7,
            image: "/images/products/Handtuchheizkörper Modern1.jpg",
            images: [
              "/images/products/Handtuchheizkörper Modern1.jpg",
              "/images/products/Handtuchheizkörper Modern2.jpg",
              "/images/products/Handtuchheizkörper Modern3.jpg",
              "/images/products/Handtuchheizkörper Modern4.jpg",
            ],
          },
          {
            id: "27",
            name: "Handtuchheizkörper Premium",
            description: "Hochwertiger Heizkörper mit schneller Aufheizung.",
            price: 349.99,
            stock: 5,
            image: "/images/products/Handtuchheizkörper Premium1.jpg",
            images: [
              "/images/products/Handtuchheizkörper Premium1.jpg",
              "/images/products/Handtuchheizkörper Premium2.jpg",
              "/images/products/Handtuchheizkörper Premium3.jpg",
              "/images/products/Handtuchheizkörper Premium4.jpg",
            ],
          },
        ],
      },
      {
        id: "elektroheizkoerper",
        name: "Elektroheizkörper",
        products: [
          {
            id: "28",
            name: "Elektroheizkörper Slim",
            description: "Kompakter Elektroheizkörper für kleine Räume.",
            price: 299.99,
            stock: 8,
            image: "/images/products/Elektroheizkörper Slim1.jpg",
            images: [
              "/images/products/Elektroheizkörper Slim1.jpg",
              "/images/products/Elektroheizkörper Slim2.jpg",
              "/images/products/Elektroheizkörper Slim3.jpg",
              "/images/products/Elektroheizkörper Slim4.jpg",
            ],
          },
          {
            id: "29",
            name: "Elektroheizkörper Eco",
            description: "Energieeffizienter Heizkörper mit Thermostat.",
            price: 349.99,
            stock: 6,
            image: "/images/products/Elektroheizkörper Eco1.jpg",
            images: [
              "/images/products/Elektroheizkörper Eco1.jpg",
              "/images/products/Elektroheizkörper Eco2.jpg",
              "/images/products/Elektroheizkörper Eco3.jpg",
              "/images/products/Elektroheizkörper Eco4.jpg",
            ],
          },
          {
            id: "30",
            name: "Elektroheizkörper Design",
            description: "Stylischer Elektroheizkörper in Schwarz-Matt.",
            price: 399.99,
            stock: 4,
            image: "/images/products/Elektroheizkörper Design1.jpg",
            images: [
              "/images/products/Elektroheizkörper Design1.jpg",
              "/images/products/Elektroheizkörper Design2.jpg",
              "/images/products/Elektroheizkörper Design3.jpg",
              "/images/products/Elektroheizkörper Design4.jpg",
            ],
          },
        ],
      },
      {
        id: "flaechenheizkoerper",
        name: "Flächenheizkörper",
        products: [
          {
            id: "31",
            name: "Flächenheizkörper Classic",
            description:
              "Flacher Flächenheizkörper für effiziente Wärmeverteilung.",
            price: 399.99,
            stock: 9,
            image: "/images/products/Flaechenheizkoerper Classic1.jpg",
            images: [
              "/images/products/Flaechenheizkoerper Classic1.jpg",
              "/images/products/Flaechenheizkoerper Classic2.jpg",
              "/images/products/Flaechenheizkoerper Classic3.jpg",
              "/images/products/Flaechenheizkoerper Classic4.jpg",
            ],
          },
          {
            id: "32",
            name: "Flächenheizkörper XL",
            description: "Extra großer Flächenheizkörper für große Bäder.",
            price: 499.99,
            stock: 3,
            image: "/images/products/Flaechenheizkörper XL1.jpg",
            images: [
              "/images/products/Flaechenheizkörper XL1.jpg",
              "/images/products/Flaechenheizkörper XL2.jpg",
              "/images/products/Flaechenheizkörper XL3.jpg",
              "/images/products/Flaechenheizkörper XL4.jpg",
            ],
          },
          {
            id: "33",
            name: "Flächenheizkörper Design",
            description:
              "Modern designter Flächenheizkörper mit hoher Leistung.",
            price: 549.99,
            stock: 5,
            image: "/images/products/Flaechenheizkoerper Design1.jpg",
            images: [
              "/images/products/Flaechenheizkoerper Design1.jpg",
              "/images/products/Flaechenheizkoerper Design2.jpg",
              "/images/products/Flaechenheizkoerper Design3.jpg",
              "/images/products/Flaechenheizkoerper Design4.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "badkeramik",
    name: "Badkeramik",
    subcategories: [
      {
        id: "waschtische",
        name: "Waschtische & Waschbecken",
        products: [
          {
            id: "34",
            name: "Waschtisch Classic",
            description: "Zeitloser Waschtisch aus Keramik in Weiß.",
            price: 299.99,
            stock: 12,
            image: "/images/products/Waschtisch Classic1.jpg",
            images: [
              "/images/products/Waschtisch Classic1.jpg",
              "/images/products/Waschtisch Classic2.jpg",
              "/images/products/Waschtisch Classic3.jpg",
              "/images/products/Waschtisch Classic4.jpg",
            ],
          },
          {
            id: "35",
            name: "Waschtisch Modern",
            description: "Flacher Design-Waschtisch für moderne Badezimmer.",
            price: 349.99,
            stock: 8,
            image: "/images/products/Waschtisch Modern1.jpg",
            images: [
              "/images/products/Waschtisch Modern1.jpg",
              "/images/products/Waschtisch Modern2.jpg",
              "/images/products/Waschtisch Modern3.jpg",
              "/images/products/Waschtisch Modern4.jpg",
            ],
          },
          {
            id: "36",
            name: "Waschtisch Premium",
            description: "Hochwertiger Waschtisch mit Nano-Beschichtung.",
            price: 399.99,
            stock: 6,
            image: "/images/products/Waschtisch Premium1.jpg",
            images: [
              "/images/products/Waschtisch Premium1.jpg",
              "/images/products/Waschtisch Premium2.jpg",
              "/images/products/Waschtisch Premium3.jpg",
              "/images/products/Waschtisch Premium4.jpg",
            ],
          },
        ],
      },
      {
        id: "aufsatzwaschbecken",
        name: "Aufsatzwaschbecken",
        products: [
          {
            id: "37",
            name: "Aufsatzwaschbecken Elegant",
            description: "Elegantes Aufsatzwaschbecken aus Feinsteinzeug.",
            price: 249.99,
            stock: 10,
            image: "/images/products/Aufsatzwaschbecken2.jpg",
            images: [
              "/images/products/Aufsatzwaschbecken1.jpg",
              "/images/products/Aufsatzwaschbecken2.jpg",
              "/images/products/Aufsatzwaschbecken3.jpg",
              "/images/products/Aufsatzwaschbecken4.jpg",
            ],
          },
          {
            id: "38",
            name: "Aufsatzwaschbecken Oval",
            description: "Ovales Aufsatzbecken für stilvolle Bäder.",
            price: 279.99,
            stock: 7,
            image: "/images/products/Aufsatzwaschbecken Oval1.jpg",
            images: [
              "/images/products/Aufsatzwaschbecken Oval1.jpg",
              "/images/products/Aufsatzwaschbecken Oval2.jpg",
              "/images/products/Aufsatzwaschbecken Oval3.jpg",
              "/images/products/Aufsatzwaschbecken Oval4.jpg",
            ],
          },
          {
            id: "39",
            name: "Aufsatzwaschbecken Minimal",
            description: "Minimalistisches Design für moderne Bäder.",
            price: 229.99,
            stock: 9,
            image: "/images/products/Aufsatzwaschbecken Minimal2.jpg",
            images: [
              "/images/products/Aufsatzwaschbecken Minimal1.jpg",
              "/images/products/Aufsatzwaschbecken Minimal2.jpg",
              "/images/products/Aufsatzwaschbecken Minimal3.jpg",
              "/images/products/Aufsatzwaschbecken Minimal4.jpg",
            ],
          },
        ],
      },
      {
        id: "handwaschbecken",
        name: "Handwaschbecken",
        products: [
          {
            id: "40",
            name: "Handwaschbecken Kompakt",
            description: "Kleines Handwaschbecken ideal für Gäste-WCs.",
            price: 199.99,
            stock: 15,
            image: "/images/products/Handwaschbecken Kompakt1.jpg",
            images: [
              "/images/products/Handwaschbecken Kompakt1.jpg",
              "/images/products/Handwaschbecken Kompakt2.jpg",
              "/images/products/Handwaschbecken Kompakt3.jpg",
              "/images/products/Handwaschbecken Kompakt4.jpg",
            ],
          },
          {
            id: "41",
            name: "Handwaschbecken Rund",
            description: "Rundes Handwaschbecken mit moderner Optik.",
            price: 219.99,
            stock: 11,
            image: "/images/products/Handwaschbecken Rund1.jpg",
            images: [
              "/images/products/Handwaschbecken Rund1.jpg",
              "/images/products/Handwaschbecken Rund2.jpg",
              "/images/products/Handwaschbecken Rund3.jpg",
              "/images/products/Handwaschbecken Rund4.jpg",
            ],
          },
          {
            id: "42",
            name: "Handwaschbecken Eckig",
            description: "Eckiges Design für kleine Bäder.",
            price: 209.99,
            stock: 13,
            image: "/images/products/Handwaschbecken Eckig2.jpg",
            images: [
              "/images/products/Handwaschbecken Eckig1.jpg",
              "/images/products/Handwaschbecken Eckig2.jpg",
              "/images/products/Handwaschbecken Eckig3.jpg",
              "/images/products/Handwaschbecken Eckig4.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "badarmaturen",
    name: "Badarmaturen",
    subcategories: [
      {
        id: "waschtischarmaturen",
        name: "Waschtischarmaturen",
        products: [
          {
            id: "43",
            name: "Waschtischarmatur Modern",
            description: "Moderne Waschtischarmatur mit Einhebelmischer.",
            price: 199.99,
            stock: 10,
            image: "/images/products/Waschtischarmatur Modern1.jpg",
            images: [
              "/images/products/Waschtischarmatur Modern1.jpg",
              "/images/products/Waschtischarmatur Modern2.jpg",
              "/images/products/Waschtischarmatur Modern3.jpg",
              "/images/products/Waschtischarmatur Modern4.jpg",
            ],
          },
          {
            id: "44",
            name: "Waschtischarmatur Classic",
            description: "Klassische Waschtischarmatur aus Chrom.",
            price: 179.99,
            stock: 8,
            image: "/images/products/Waschtischarmatur Classic1.jpg",
            images: [
              "/images/products/Waschtischarmatur Classic1.jpg",
              "/images/products/Waschtischarmatur Classic2.jpg",
              "/images/products/Waschtischarmatur Classic3.jpg",
              "/images/products/Waschtischarmatur Classic4.jpg",
            ],
          },
          {
            id: "45",
            name: "Waschtischarmatur Premium",
            description: "Premium-Waschtischarmatur mit Wasserfall-Auslauf.",
            price: 249.99,
            stock: 6,
            image: "/images/products/Waschtischarmatur Premium1.jpg",
            images: [
              "/images/products/Waschtischarmatur Premium1.jpg",
              "/images/products/Waschtischarmatur Premium2.jpg",
              "/images/products/Waschtischarmatur Premium3.jpg",
              "/images/products/Waschtischarmatur Premium4.jpg",
            ],
          },
        ],
      },
      {
        id: "duscharmaturen",
        name: "Duscharmaturen",
        products: [
          {
            id: "46",
            name: "Duscharmatur Thermostat",
            description:
              "Duscharmatur mit Thermostatfunktion für konstante Temperaturen.",
            price: 229.99,
            stock: 7,
            image: "/images/products/Duscharmaturen Thermostat1.jpg",
            images: [
              "/images/products/Duscharmaturen Thermostat1.jpg",
              "/images/products/Duscharmaturen Thermostat2.jpg",
              "/images/products/Duscharmaturen Thermostat3.jpg",
              "/images/products/Duscharmaturen Thermostat4.jpg",
            ],
          },
          {
            id: "47",
            name: "Duscharmatur Minimal",
            description: "Minimalistische Duscharmatur im modernen Design.",
            price: 199.99,
            stock: 9,
            image: "/images/products/Duscharmaturen Minimal1.jpg",
            images: [
              "/images/products/Duscharmaturen Minimal1.jpg",
              "/images/products/Duscharmaturen Minimal2.jpg",
              "/images/products/Duscharmaturen Minimal3.jpg",
              "/images/products/Duscharmaturen Minimal4.jpg",
            ],
          },
          {
            id: "48",
            name: "Duscharmatur Komfort",
            description: "Komfortable Duscharmatur mit großer Handbrause.",
            price: 249.99,
            stock: 5,
            image: "/images/products/Duscharmaturen Komfort1.jpg",
            images: [
              "/images/products/Duscharmaturen Komfort1.jpg",
              "/images/products/Duscharmaturen Komfort2.jpg",
              "/images/products/Duscharmaturen Komfort3.jpg",
              "/images/products/Duscharmaturen Komfort4.jpg",
            ],
          },
        ],
      },
      {
        id: "badewannenarmaturen",
        name: "Badewannenarmaturen",
        products: [
          {
            id: "49",
            name: "Badewannenarmatur Elegance",
            description: "Elegante Badewannenarmatur mit Handbrause.",
            price: 299.99,
            stock: 8,
            image: "/images/products/Badewannenarmatur Elegance1.jpg",
            images: [
              "/images/products/Badewannenarmatur Elegance1.jpg",
              "/images/products/Badewannenarmatur Elegance2.jpg",
              "/images/products/Badewannenarmatur Elegance3.jpg",
              "/images/products/Badewannenarmatur Elegance4.jpg",
            ],
          },
          {
            id: "50",
            name: "Badewannenarmatur Classic",
            description: "Klassische 2-Griff Badewannenarmatur.",
            price: 279.99,
            stock: 7,
            image: "/images/products/Badewannenarmatur Classic1.jpg",
            images: [
              "/images/products/Badewannenarmatur Classic1.jpg",
              "/images/products/Badewannenarmatur Classic2.jpg",
              "/images/products/Badewannenarmatur Classic3.jpg",
              "/images/products/Badewannenarmatur Classic4.jpg",
            ],
          },
          {
            id: "51",
            name: "Badewannenarmatur Design",
            description: "Design-Badewannenarmatur in Schwarz-Matt.",
            price: 349.99,
            stock: 4,
            image: "/images/products/Badewannenarmatur Design2.jpg",
            images: [
              "/images/products/Badewannenarmatur Design1.jpg",
              "/images/products/Badewannenarmatur Design2.jpg",
              "/images/products/Badewannenarmatur Design3.jpg",
              "/images/products/Badewannenarmatur Design4.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "zubehoer",
    name: "Zubehör",
    subcategories: [
      {
        id: "bad-accessoires",
        name: "Bad-Accessoires",
        products: [
          {
            id: "52",
            name: "Handtuchhalter Modern",
            description: "Moderner Handtuchhalter aus Edelstahl.",
            price: 59.99,
            stock: 20,
            image: "/images/products/Handtuchhalter Modern4.jpg",
            images: [
              "/images/products/Handtuchhalter Modern1.jpg",
              "/images/products/Handtuchhalter Modern2.jpg",
              "/images/products/Handtuchhalter Modern3.jpg",
              "/images/products/Handtuchhalter Modern4.jpg",
            ],
          },
          {
            id: "53",
            name: "Seifenspender Classic",
            description: "Klassischer Seifenspender aus Keramik.",
            price: 29.99,
            stock: 25,
            image: "/images/products/Seifenspender Classic1.jpg",
            images: [
              "/images/products/Seifenspender Classic1.jpg",
              "/images/products/Seifenspender Classic2.jpg",
              "/images/products/Seifenspender Classic3.jpg",
              "/images/products/Seifenspender Classic4.jpg",
            ],
          },
          {
            id: "54",
            name: "Zahnputzbecher Premium",
            description: "Edler Zahnputzbecher aus Glas.",
            price: 24.99,
            stock: 18,
            image: "/images/products/Zahnputzbecher Premium1.jpg",
            images: [
              "/images/products/Zahnputzbecher Premium1.jpg",
              "/images/products/Zahnputzbecher Premium2.jpg",
              "/images/products/Zahnputzbecher Premium3.jpg",
              "/images/products/Zahnputzbecher Premium4.jpg",
            ],
          },
        ],
      },
      {
        id: "bad-zubehoer",
        name: "Bad-Zubehör",
        products: [
          {
            id: "55",
            name: "Duschvorhang Weiß",
            description: "Wasserabweisender Duschvorhang in schlichtem Weiß.",
            price: 39.99,
            stock: 15,
            image: "/images/products/Duschvorhang Weiß1.jpg",
            images: [
              "/images/products/Duschvorhang Weiß1.jpg",
              "/images/products/Duschvorhang Weiß2.jpg",
              "/images/products/Duschvorhang Weiß3.jpg",
              "/images/products/Duschvorhang Weiß4.jpg",
            ],
          },
          {
            id: "56",
            name: "Ablagekorb Edelstahl",
            description: "Praktischer Ablagekorb für Duschutensilien.",
            price: 49.99,
            stock: 12,
            image: "/images/products/Ablagekorb Edelstahl3.jpg",
            images: [
              "/images/products/Ablagekorb Edelstahl1.jpg",
              "/images/products/Ablagekorb Edelstahl2.jpg",
              "/images/products/Ablagekorb Edelstahl3.jpg",
              "/images/products/Ablagekorb Edelstahl4.jpg",
            ],
          },
          {
            id: "57",
            name: "Badezimmerteppich Set",
            description: "Rutschfester Badezimmerteppich im 2er Set.",
            price: 69.99,
            stock: 10,
            image: "/images/products/Badezimmerteppich Set1.jpg",
            images: [
              "/images/products/Badezimmerteppich Set1.jpg",
              "/images/products/Badezimmerteppich Set2.jpg",
              "/images/products/Badezimmerteppich Set3.jpg",
              "/images/products/Badezimmerteppich Set4.jpg",
            ],
          },
        ],
      },
      {
        id: "accessoire-sets",
        name: "Bad-Accessoire Sets",
        products: [
          {
            id: "58",
            name: "Bad-Set Elegant",
            description: "4-teiliges Accessoire-Set im eleganten Design.",
            price: 89.99,
            stock: 8,
            image: "/images/products/Bad-Accessoire Sets1.jpg",
            images: [
              "/images/products/Bad-Accessoire Sets1.jpg",
              "/images/products/Bad-Accessoire Sets2.jpg",
              "/images/products/Bad-Accessoire Sets3.jpg",
              "/images/products/Bad-Accessoire Sets4.jpg",
            ],
          },
          {
            id: "59",
            name: "Bad-Set Modern",
            description:
              "Modernes Set aus Seifenschale, Becher, Halter und Spender.",
            price: 79.99,
            stock: 10,
            image: "/images/products/Bad-Set Modern1.jpg",
            images: [
              "/images/products/Bad-Set Modern1.jpg",
              "/images/products/Bad-Set Modern2.jpg",
              "/images/products/Bad-Set Modern3.jpg",
              "/images/products/Bad-Set Modern4.jpg",
            ],
          },
          {
            id: "60",
            name: "Bad-Set Natur",
            description: "Accessoire-Set aus natürlichen Materialien.",
            price: 99.99,
            stock: 5,
            image: "/images/products/Bad-Set Natur1.jpg",
            images: [
              "/images/products/Bad-Set Natur1.jpg",
              "/images/products/Bad-Set Natur2.jpg",
              "/images/products/Bad-Set Natur3.jpg",
              "/images/products/Bad-Set Natur4.jpg",
            ],
          },
        ],
      },
    ],
  },
];

export default categories;
