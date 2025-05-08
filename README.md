# 🛍️ Modern E-Commerce Frontend

Ein vollständig responsives und modernes E-Commerce-Frontend, entwickelt mit **Next.js** und **Tailwind CSS**. Ziel ist es, eine ansprechende Shop-Erfahrung mit klarer Navigation, Filterfunktionen und einem funktionsfähigen Warenkorb zu bieten.

---

## 📸 Vorschau



![Screenshot Home](./public/images/githubreadme/pic1.png)

![Screenshot list](./public/images/githubreadme/pic3.png)
![Screenshot productDetailPage](./public/images/githubreadme/pic5.png)



---

## 🚀 Features

- 🔍 **Dynamische Kategorieseiten & Produkt-Detailseite**
  - Kategorien und Unterkategorien mit Sidebar-Navigation

- 🛒 **Warenkorb-Funktion**
  - Produkte hinzufügen, entfernen, Menge anpassen
  - Zwischensumme wird automatisch berechnet
- 🖼️ **Produktdetailseiten**
  - Einzelansicht mit Beschreibung, Bild, Preis und "In den Warenkorb"-Button
- 💡 **Suchfunktion**
  - Automatische Vorschläge während der Eingabe
  - Suchergebnisseite mit relevanten Treffern
- 📱 **Responsives Design**
  - Optimiert für Desktop, Tablet und Mobile
- ⚙️ **Modularer Aufbau**
  - Wiederverwendbare Komponenten (Produktkarte, Sidebar, Navbar, Productgrid, Productcard, etc.)

---

## 🧱 Technologien

| Bereich             | Technologie           |
|--------------------|------------------------|
| Framework          | [Next.js](https://nextjs.org/) |
| Styling            | [Tailwind CSS](https://tailwindcss.com/) |
| State Management   | React Hooks (`useState`, `useEffect`, `Zustand`) |
| Deployment         | Vercel |

---

## 🗂️ Projektstruktur

```bash
├── app/
│   ├── [category]/                     # Kategorieseite
│   ├── [subcategory]/                  # Unterkategorie-Seite
│   ├── [id]/                           # Produktdetailseite
│   ├── about-us/                       # Info-Seite "Über uns"
│   ├── cart/                           # Warenkorb-Seite
│   ├── checkout/                       # Checkout-Seite
│   ├── search/
│   │   └── [query]/                    # Suchergebnisseiten (dynamisch)
│   ├── thank-you/                      # Abschluss-Seite nach Kauf
│   ├── layout.js                       # Globales Layout
│   └── page.js                         # Startseite

├── components/                         # Wiederverwendbare UI-Komponenten
│   ├── CategorySidebar.js
│   ├── CheckoutForm.js
│   ├── CheckoutSummary.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── ImageGallery.js
│   ├── Navbar.js
│   ├── ProductCard.js
│   ├── ProductCarousel.js
│   ├── ProductGrid.js
│   └── SearchBar.js
│   └── ... (weitere Komponenten)

├── lib/                                # Statische Daten
│   ├── categories.js
│   ├── flatProducts.js
│   └── products.js

├── public/
│   └── images/                         # Produktbilder, Logos, etc.

├── styles/                             # Globale Styles (optional)
│
└── README.md                           # Projektbeschreibung
