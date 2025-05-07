"use client";

import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("beschreibung");

  const produktdatenContent = (
    <div className="mt-6 space-y-2 text-sm">
      <h2 className="text-lg font-semibold text-blue-900">
        Pelipal Serie 6040 Badmöbel Set 2-3 - 103 cm, Waschtisch wählbar,
        Spiegelschrank mit offenem Fach, Unterschrank, 2 Auszüge
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
        <div>
          <strong>Artikelnummer:</strong>
        </div>
        <div>PE-1595-Bad-Set-2-3</div>
        <div>
          <strong>Breite:</strong>
        </div>
        <div>1032 mm</div>
        <div>
          <strong>Tiefe:</strong>
        </div>
        <div>465 mm</div>
        <div>
          <strong>Material 1:</strong>
        </div>
        <div>E1 Spanplatte</div>
        <div>
          <strong>Material 2:</strong>
        </div>
        <div>MDF Platte lackiert</div>
        <div>
          <strong>Material 3:</strong>
        </div>
        <div>Mineralguss</div>
        <div>
          <strong>Material 4:</strong>
        </div>
        <div>Keramik</div>
        <div>
          <strong>Ausführung:</strong>
        </div>
        <div>
          Spiegelschrank mit 3 Drehtüren und offenem Fach, Mineralmarmor- oder
          Keramikwaschtisch, Unterschrank mit 2 Auszügen
        </div>
        <div>
          <strong>Bemerkung:</strong>
        </div>
        <div>
          Dieses Produkt wird durch Ihre individuelle Auswahl für Sie gefertigt.
          Die Select Frontfarben werden zum Schutz des Lacklaminats mit einer
          Schutzfolie geliefert und muss selbst entfernt werden. Dieses Badmöbel
          wird für Sie vormontiert. Zur Kippsicherung ist dies wandhängend zu
          befestigen. Bei Auswahl OHNE Hahnloch verlängert sich die Lieferzeit.
          Über den Liefertermin werden Sie zeitnah informiert.
        </div>
        <div>
          <strong>Lieferzeit:</strong>
        </div>
        <div>ca. 6 - 8 Wochen1</div>
        <div>
          <strong>Gewährleistung:</strong>
        </div>
        <div>2 Jahre</div>
        <div>
          <strong>Versandindex:</strong>
        </div>
        <div>60</div>
      </div>
    </div>
  );

  return (
    <div className="mt-8 w-full max-w-5xl mx-auto">
      <div className="flex space-x-4  border-gray-300 rounded-t-md overflow-hidden">
        {[
          "produktdaten",
          "beschreibung",
          "zubehör",
          "lieferung",
          "herstellerinformation",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-9 text-sm font-medium border border-gray-300 ${
              activeTab === tab
                ? "bg-white border-b-2 border-blue-600 text-blue-700"
                : "bg-gray-100 text-gray-700 hover:bg-white"
            }`}
          >
            {tab === "beschreibung" && "Produktbeschreibung"}
            {tab === "zubehör" && "Zubehör"}
            {tab === "lieferung" && "Lieferung"}
            {tab === "produktdaten" && "Produktdaten"}
            {tab === "herstellerinformation" && "Herstellerinformation"}
          </button>
        ))}
      </div>

      <div className="border border-gray-300 bg-white rounded-md p-6 mt-2 shadow-sm min-h-[400px] w-full max-w-4xl mx-auto">
        {activeTab === "beschreibung" && (
          <p className="text-gray-700 text-base  leading-relaxed tracking-wide max-w-6xl">
            Dieses stilvolle Badmöbel-Set kombiniert modernes Design mit hoher
            Funktionalität und schafft Ordnung und Eleganz in jedem Badezimmer.
            Hergestellt aus robustem, feuchtigkeitsresistentem Material mit
            pflegeleichten Oberflächen, eignet sich das Set ideal für den
            täglichen Gebrauch. Es umfasst einen Waschbeckenunterschrank, einen
            Spiegelschrank sowie einen Hochschrank-alle mit viel Stauraum für
            Handtücher, Pflegeprodukte und Zubehör. Das grifflose Design und die
            Soft-Close-Funktion sorgen für eine ruhige, komfortable Nutzung.
            Dank der klaren Linien und neutralen Farben passt sich das Set
            harmonisch jeder Badeinrichtung an und lässt sich dank einfacher
            Montage schnell aufbauen.
          </p>
        )}

        {activeTab === "zubehör" && (
          <ul className="list-disc pl-5">
            <li>
              LED-Spiegelbeleuchtung-Energiesparend und ideal für tägliche
              Pflege.
            </li>
            <li>
              Waschbeckenarmatur (Chrom oder Schwarz)-Modernes Design mit Wasser
              sparender Technik.
            </li>
            <li>
              Waschbecken aus Keramik oder Glas-Pflegeleicht, kratzfest und
              stilvoll.
            </li>
            <li>
              Soft-Close-Schubladeneinsätze-Für Ordnung bei Kosmetik und
              Pflegeprodukten.
            </li>
            <li>
              Handtuchhalter zum Ankleben oder Schrauben-Platzsparend und
              elegant.
            </li>
            <li>
              Spiegelschrank mit integrierter Steckdose & Beleuchtung- Praktisch
              für elektrische Geräte.
            </li>
            <li>
              Hochwertiger Siphon-Verchromt oder matt, passend zum Möbeldesign.
            </li>
            <li>
              Badezimmermatte im passenden Farbton-Rutschfest und waschbar.
            </li>
            <li>
              Dekorative Aufbewahrungsboxen-Für Schubladen oder offene Regale.
            </li>
            <li>Wandhaken oder Hängesysteme-Mehr Stauraum ohne Bohren.</li>
          </ul>
        )}

        {activeTab === "lieferung" && (
          <p className="text-gray-700 text-base  leading-relaxed tracking-wide max-w-6xl">
            Die Lieferung erfolgt innerhalb von 3-5 Werktagen nach
            Zahlungseingang. Das Badmöbel-Set wird sicher verpackt und per
            Spedition bis zur Bordsteinkante geliefert. Eine Sendungsverfolgung
            sowie eine Benachrichtigung zum Liefertermin erhalten Sie per
            E-Mail. Bitte stellen Sie sicher, dass die Anlieferung an Ihrer
            Adresse möglich ist.
          </p>
        )}

        {activeTab === "produktdaten" && produktdatenContent}

        {activeTab === "herstellerinformation" && (
          <p className="text-gray-700 text-base  leading-relaxed tracking-wide max-w-6xl">
            Dieses Badmöbel-Set wird von einem renommierten Hersteller
            gefertigt, der sich seit über 20 Jahren auf hochwertige
            Badezimmermöbel spezialisiert hat. Die Produkte zeichnen sich durch
            modernes Design, langlebige Materialien und präzise Verarbeitung
            aus. Alle Möbelstücke werden unter strengen Qualitätsstandards in
            der EU produziert und regelmäßig geprüft. Der Hersteller legt großen
            Wert auf Nachhaltigkeit, Funktionalität und Kundenzufriedenheit-für
            ein Badezimmer, das nicht nur gut aussieht, sondern auch im Alltag
            überzeugt.
          </p>
        )}
      </div>
    </div>
  );
}
