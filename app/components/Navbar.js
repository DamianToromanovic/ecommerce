export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Top Navbar */}
      <div className="flex justify-between items-center bg-gray-100 px-8 py-4">
        {/* Logo + tagline */}
        <div>
          <h1 className="text-2xl font-bold text-blue-700">Badezimmer-Welt</h1>
          <p className="text-xs text-gray-600 mt-1">wir lieben Bäder</p>
        </div>

        {/* Search bar */}
        <div className=" felx items-center">
          <input
            type="text"
            placeholder="Suchbegriff"
            className="border border-gray-300 px-3 py-1 roundded-1-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></input>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-r-md hover:bg-blue-700">
            🔍
          </button>
        </div>

        {/* icones */}
        <div className="flex gap-6 text-2xl text-gray-600">
          <span className="cursor-pointer hover:text-blue-600">👤</span>
          <span className="cursor-pointer hover:text-blue-600">❤️</span>
          <span className="cursor-pointer hover:text-blue-600">🛒</span>
        </div>
      </div>
      {/* Botton category links */}
      <div className="flex justify-center gap-10 bg-gray-200 py-3 shadow-md text-md font-semibold">
        <Link
          href="/badmoebel"
          className="hover:text-blue-600 transition-colors"
        >
          BADMÖBEL{" "}
        </Link>
        <Link href="/duschen" className="hover:text-blue-600 transition-colors">
          DUSCHEN
        </Link>
        <Link href="/baden" className="hover:text-blue-600 transition-colors">
          BADEN
        </Link>
        <Link
          href="/badheizkoerper"
          className="hover:text-blue-600 transition-colors"
        >
          BADHEIZKÖRPER{" "}
        </Link>
        <Link
          href="/badkeramik"
          className="hover:text-blue-600 transition-colors"
        >
          BADKERAMIK
        </Link>
        <Link
          href="/badarmaturen"
          className="hover:text-blue-600 transition-colors"
        >
          BADARMATUREN
        </Link>
        <Link
          href="/zubehoer"
          className="hover:text-blue-600 transition-colors"
        >
          ZUBEHÖR{" "}
        </Link>
        <Link href="/marken" className="hover:text-blue-600 transition-colors">
          MARKEN{" "}
        </Link>
      </div>

      {/* sale banner below navbar */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold flex justify-center items-center gap-4">
        <span>% SALE - Badmöbel zusätzlich rabattiert</span>
        <button className="bg-white text-orange-600 px-3 py-1 rounded-md text-xs hover:bg-orange-100 transition">
          Jetzt sparen
        </button>
      </div>
    </nav>
  );
}
