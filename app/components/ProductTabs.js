"use client";

import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("beschreibung");

  // shared content return
  const sharedContent = (
    <div className="mt-6 space-y-2 text-sm">
      <h2 className="text-lg font-semibold text-gray-800">
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
          befestigen. Bei Auswahl "OHNE Hahnloch" verlängert sich die
          Lieferzeit. Über den Liefertermin werden Sie zeitnah informiert.
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
    <div className="mt-6">
      {/* Tabs Buttons */}
      <div className="flex space-x-4  border-gray-300 rounded-t-md overflow-hidden">
        <button
          className={`py-2 px-14 text-sm font-medium border border-gray-300 ${
            activeTab === "beschreibung"
              ? "bg-white border-b-2 border-blue-600 text-blue-700"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
          onClick={() => setActiveTab("beschreibung")}
        >
          {" "}
          Produktbeschreibung
        </button>

        <button
          className={`py-2 px-14 text-sm font-medium border border-gray-300 ${
            activeTab === "zubehör"
              ? "bg-white border-b-2 border-blue-600 text-blue-700"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
          onClick={() => setActiveTab("zubehör")}
        >
          {" "}
          Zubehör
        </button>

        <button
          className={`py-2 px-14 text-sm font-medium border border-gray-300  ${
            activeTab === "lieferung"
              ? "bg-white border-b-2 border-blue-600 text-blue-700"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
          onClick={() => setActiveTab("lieferung")}
        >
          {" "}
          Lieferung
        </button>

        <button
          className={`py-2 px-14 text-sm font-medium border border-gray-300  ${
            activeTab === "herstellerinformation"
              ? "bg-white border-b-2 border-blue-600 text-blue-700"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
          onClick={() => setActiveTab("herstellerinformation")}
        >
          {" "}
          Herstellerinformation
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-4">
        {activeTab === "beschreibung" && (
          <p>
            Dies ist die Produktbeschreibung. Hier können sie alle wichtigen
            info über das produkt lesen.
          </p>
        )}

        {activeTab === "zubehör" && (
          <p>Zubehör: Alle relevanten Zubehörteile werden hier aufgelistet.</p>
        )}

        {activeTab === "lieferung" && (
          <p>
            Lieferung: ca. 2-3 Wochen. Versandkostenfrei innerhalb Deutschlands.
          </p>
        )}
      </div>
    </div>
  );
}
