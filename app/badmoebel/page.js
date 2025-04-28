"use client";
import Link from "next/link";

export default function BadmoebelPage() {
  return (
    <div className="flex px-8 py-8">
      {/* Banner Image */}
      <img src="" alt="img" className="w-full mb-8 rounded-mb"></img>

      {/* seidbar */}

      {/* Flex Layout for sidebar + counter */}
      <div className="flex">
        <aside className="w-[250px] bg-gray-100 p-4 border-r border-gray-300">
          <h2 className="text-lg font-bold mb-4">BADMÖBEL</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:underline cursor-pointer">Badmöbel Sets</li>
            <li className="hover:underline cursor-pointer">
              Waschtische mit Unterschrank
            </li>
            <li className="hover:underline cursor-pointer">Spiegelschränke</li>
            <li className="hover:underline cursor-pointer">Badspiegel</li>
            <li className="hover:underline cursor-pointer">Badschränke</li>
            <li className="hover:underline cursor-pointer">
              Waschtischunterschränke
            </li>
            <li className="hover:underline cursor-pointer">Einzelmöbel</li>
            <li className="hover:underline cursor-pointer">
              Gäste- & Kleinbäder
            </li>
            <li className="hover:underline cursor-pointer">Sale %</li>
            <li className="hover:underline cursor-pointer">Häufig gesucht</li>

            <li className="pt-4 font-bold">DUSCHEN</li>
            <li className="PT-2 hover:underline cursor-pointer">Baden</li>
            <li className="hover:underline cursor-pointer">Badheizkörper</li>
            <li className="hover:underline cursor-pointer">Badkeramik</li>
            <li className="hover:underline cursor-pointer">Badarmaturen</li>
          </ul>
        </aside>

        {/* Main Content */}

        <main className="flex-1 pl-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Badmöbel</h1>
          <p className="text-gray-600 text-center  text-sm">
            Hier finden Sie Badmöbel und Zubehör von Markenherstellern zu fairen
            Preisen. Vom einzelnen Badschrank oder Spiegel bis zum kompletten
            Badmöbel-Set finden Sie in unserem Online-Shop alles für Ihr
            Badezimmer.
          </p>
          <p className="text-gray-600 text-center  text-sm mt-4">
            Mithilfe der folgenden Übersicht können Sie Ihre Suche bereits grob
            eingrenzen. Natürlich stehen wir Ihnen bei Fragen zum Thema
            Badezimmermöbel sowie bei allen anderen Fragen rund um das Thema Bad
            gerne auch telefonisch zur Seite.
          </p>

          {/* Grid viw - Empty gor now */}
          <div className="grid grid-cols-3 gap-6"></div>
        </main>
      </div>
    </div>
  );
}
