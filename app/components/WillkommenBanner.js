"use client";

export default function WelkommenBanner() {
  return (
    <section className=" max-w-7xl mx-auto py-10 px-4 space-y-6">
      <div className="bg-blue-950 text-white rounded-md px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold px-6 py-2 text-2xl whitespace-nowrap ">
          10€ geschenkt
        </div>

        <p className="text-sm md:text-base  text-center md:text-left">
          Abonnieren Sie unseren Newsletter und verpassen Sie keine Angebote.
          Als Willkommensgeschenk erhalten Sie einen Gutschein im Wert von 10€
          für Ihre erste Bestellung.
        </p>

        <button className="bg-orange-500 text-white font-bold px-6 py-2 text-2xl whitespace-nowrap rounded-2xl">
          Jetzt anmelden
        </button>
      </div>

      <div className="space-y-4 text-gray-800">
        <h2 className="text-xl font-bold">
          Willkommen bei Badezimmer-Welt - Ihr Badshop für hochwertige Bad- und
          Sanitärlösungen
        </h2>
        <p>
          Planen Sie ein neues Badezimmer oder möchten Sie Ihr bestehendes Bad
          renovieren? In unserem Badshop finden Sie alles, was Sie für die
          perfekte Badausstattung benötigen - von modernen Design-Armaturen über
          stilvolle Badmöbel bis hin zu praktischen Installationslösungen.
        </p>

        <h3 className="font-semibold">
          Ihr Badshop mit 90 Jahren Erfahrung - Ihr Vorteil im Badezimmer
        </h3>
        <p>
          Seit 90 Jahren ist MEGABAD Ihr verlässlicher Badshop und Partner im
          Sanitärbereich. Seit fast einem Jahrhundert stehen wir unseren Kunden
          zur Seite, um für jedes Bad die passenden Lösungen zu finden -
          verlässlich, kompetent und auf die individuellen Bedürfnisse
          abgestimmt. Vertrauen Sie auf unsere Expertise und profitieren Sie von
          unserem Wissen!
        </p>

        <h3 className="font-semibold">
          Sanitärbedarf: Alles für Ihr Wunschbad
        </h3>
        <p>
          In unserem MEGABAD Badshop finden Sie alles, was Sie für Ihr Wunschbad
          benötigen - alles unter einem Dach. Unsere breite Auswahl umfasst
          Badmöbeln, <br /> <strong>Badarmaturen </strong>,
          <strong>Duschkabinen</strong>,<strong>Badewannen</strong> und vielem
          mehr. Ob Ersatzteile, Sanitärbedarf oder praktisches Zubehör - unser
          Angebot deckt jeden Bedarf ab.
        </p>
        <p>
          <strong>Tipp:</strong> Nutzen Sie die Suche in unserem Badshop, um
          gezielt die passenden Produkte für Ihre individuellen Anforderungen zu
          finden.
        </p>
        <p>
          Wir führen renommierte Marken wie Grohe, Hansgrohe, Villeroy & Boch
          und Duravit sowie exklusive Marken wie Kronenbach, Steinkamp, Pianura
          und Alluvion. Bei uns profitieren Sie von der Markenvielfalt und der
          hohen Qualität, die Sie für Ihr perfektes Badezimmer benötigen.
        </p>
        <h3 className="font-semibold">
          Entdecken Sie die Highlights unseres Badshops:
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Doppelwaschbecken </strong>- Perfekt für Familien oder
            größere Badezimmer, unsere Doppelwaschbecken bieten ausreichend
            Platz für mehrere Personen.
          </li>
          <li>
            <strong>Hänge-WCs</strong>- Schaffen Sie ein modernes und
            platzsparendes Ambiente mit unseren Wand-WCs. Außerdem sorgen
            Hänge-WCs für eine leichte Reinigung
          </li>
          <li>
            <strong>Handtuchheizkörper</strong>- Genießen Sie warme Handtücher
            und eine angenehme Raumtemperatur dank unserer praktischen
            Handtuchheizkörper.
          </li>
        </ul>

        <p className="text-sm font-bold text-blue-600 cursor-pointer hover:underline">
          ...Weiter lesen
        </p>
      </div>
    </section>
  );
}
