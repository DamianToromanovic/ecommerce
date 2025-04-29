"use client";
import Link from "next/link";

export default function BadmoebelPage() {
  return (
    <div className="px-8 py-8">
      <div className="flex justify-center mb-8">
        {/* Banner Image */}
        <img
          src="/images/hero/hero1.jpeg"
          alt="img"
          className="w-[80%] h-[350px] object-cover rounded-md"
        ></img>
      </div>

      {/* seidbar */}

      {/* Flex Layout for sidebar + counter */}
      <div className="flex px-8">
        <aside className="w-[250px] bg-gray-100 p-4 border-r border-gray-300 ml-35 rounded-md">
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
          </ul>

          <ul className="space-y-2 text-sm text-gray-700 mt-6">
            <li className="pt-4 font-bold">DUSCHEN</li>
            <li className="PT-2 hover:underline cursor-pointer">Baden</li>
            <li className="hover:underline cursor-pointer">Badheizkörper</li>
            <li className="hover:underline cursor-pointer">Badkeramik</li>
            <li className="hover:underline cursor-pointer">Badarmaturen</li>
          </ul>
        </aside>

        {/* Main Content */}

        <main className="flex-1 px-33">
          <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
            Badmöbel
          </h1>
          <p className="text-gray-600 text-center max-w-1xl mx-auto  mb-4">
            Hier finden Sie Badmöbel und Zubehör von Markenherstellern zu fairen
            Preisen. Vom einzelnen Badschrank oder Spiegel bis zum kompletten
            Badmöbel-Set finden Sie in unserem Online-Shop alles für Ihr
            Badezimmer.
          </p>
          <p className="text-gray-600 text-center">
            Mithilfe der folgenden Übersicht können Sie Ihre Suche bereits grob
            eingrenzen. Natürlich stehen wir Ihnen bei Fragen zum Thema
            Badezimmermöbel sowie bei allen anderen Fragen rund um das Thema Bad
            gerne auch telefonisch zur Seite.
          </p>

          {/* Grid viw - Empty gor now */}
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Badmöbel Sets"
                className="w-[100px] h-[100px] object-contain mb-2 "
              ></img>
              <p className="text-sm text-center cursor-pointer">
                Badmöbel Sets →
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Waschtische mit Unterschrank "
                className="w-[100px] h-[100px] object-contain mb-2"
              ></img>
              <p className="text-sm text-center cursor-pointer">
                Waschtische mit Unterschrank →
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Spiegelschränke"
                className="w-[100px] h-[100px] object-contain mb-2"
              ></img>
              <p className="text-sm text-center cursor-pointer">
                Spiegelschränke →
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Badspiegel"
                className="w-[100px] h-[100px] object-contain mb-2"
              ></img>
              <p className="text-sm text-center cursor-pointer">Badspiegel →</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Badschränke"
                className="w-[100px] h-[100px] object-contain mb-2"
              ></img>
              <p className="text-sm text-center cursor-pointer">
                Badschränke →
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Waschtischunterschränke"
                className="w-[100px] h-[100px] object-contain mb-2"
              ></img>
              <p className="text-sm text-center cursor-pointer">
                Waschtischunterschränke →
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Einzelmöbel"
                className="w-[100px] h-[100px] object-contain mb-2"
              ></img>
              <p className="text-sm text-center cursor-pointer">
                Einzelmöbel →
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                alt="Gäste- & Kleinbäder"
                className="w-[100px] h-[100px] object-contain mb-2"
              ></img>
              <p className="text-sm text-center cursor-pointer">
                Gäste- & Kleinbäder →
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
