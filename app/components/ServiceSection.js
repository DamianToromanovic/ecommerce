"use client";

export default function ServiceSection() {
  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8 text-blue-900">
          Unser Service für Sie
        </h2>

        <div className="mx-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {/* card 1 */}
          <div className="text-center space-y-2 bg-white p-6 rounded-lg shadow-md min-h-[200px] w-full">
            <img
              src="/images/icons/Thumbs.png"
              alt="Markenware"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="font-semibold text-gray-800">
              Markenware zu Online-Preisen
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Bei uns erhalten Sie 1A-Markenware von Qualitätsherstellern zu
              günstigen Online-Konditionen.
            </p>
          </div>

          {/* card 2 */}
          <div className="text-center space-y-2 bg-white p-6 rounded-lg shadow-md min-h-[200px] w-full">
            <img
              src="/images/icons/truck.png"
              alt="Versandkostenfreie "
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="font-semibold text-gray-800">
              VERSANDKOSTEN FREI *
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Innerhalb Deutschland verstandkostenfrei - ganz bequem.
            </p>
          </div>

          {/* card 3 */}
          <div className="text-center space-y-2 bg-white p-6 rounded-lg shadow-md min-h-[200px] w-full">
            <img
              src="/images/icons/Chat.png"
              alt="Versandkostenfreie "
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="font-semibold text-gray-800">
              Kompetente Fachberatung
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Sie sind sich unsicher, ob Ihr Produkt passend ist? Unsere
              Fachberater helfen Ihnen gerne weiter.
            </p>
          </div>

          {/* card 4 */}
          <div className="text-center space-y-2 bg-white p-6 rounded-lg shadow-md min-h-[200px] w-full">
            <img
              src="/images/icons/Lock.jpg"
              alt="Sicher Einkaufen"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="font-semibold text-gray-800">
              Sicher & geprüft einkaufen
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Trusted Shops Käuferschutz bis 20.000 € Google Zertifizierter
              Händler SSL-Verschlüsselung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
