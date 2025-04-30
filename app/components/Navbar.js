// "use client";
// import products from "../lib/flatProducts.js";
// import Link from "next/link";
// import { useState } from "react";
// import categories from "../lib/flatCategories.js";

// export default function Navbar() {
//   const [searchedTerm, setSearchedTerm] = useState("");
//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(searchedTerm)
//   );
//   const filteredCategories = categories.filter((c) =>
//     c.toLowerCase().includes(searchedTerm)
//   );
//   return (
//     <nav className="w-full">
//       <div className="flex justify-between items-center bg-gray-100 px-8 py-4">
//         <Link href="/" className="flex flex-col text-blue-700 hover:opacity-80">
//           <div>
//             <span className="text-2xl font-bold">Badezimmer-Welt</span>
//             <p className="text-xs text-gray-600 mt-1">wir lieben Bäder</p>
//           </div>
//         </Link>

//         <div className=" felx items-center">
//           <input
//             value={searchedTerm}
//             onChange={(e) => setSearchedTerm(e.target.value)}
//             type="text"
//             placeholder="Suchbegriff"
//             className="border border-gray-300 px-3 py-1 roundded-1-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></input>
//           <button className="bg-blue-600 text-white px-4 py-1 rounded-r-md hover:bg-blue-700">
//             🔍
//           </button>
//           <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-white border border-gray-300 shadow-lg rounded-xl p-6 flex gap-8 z-50">
//             <div className="w-1/3">
//               <h3 className="text-sm font-semibold text-gray-600 mb-3">
//                 Kategorien passend zu deiner Suche
//               </h3>
//               <ul className="space-y-2">
//                 {filteredCategories.slice(0, 5).map((cat, index) => (
//                   <li
//                     key={index}
//                     className="cursor-pointer text-sm text-blue-700 hover:underline"
//                   >
//                     {cat}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="w-2/3">
//               <h3 className="text-sm font-semibold text-gray-600 mb-3">
//                 Produkttreffer
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {filteredProducts.slice(0, 5).map((p) => (
//                   <div
//                     key={p.id}
//                     className="flex items-center gap-4 border rounded-md p-3 hover:shadow cursor-pointer"
//                   >
//                     <img
//                       src={p.image}
//                       alt={p.name}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <div>
//                       <p className="text-sm font-medium text-gray-800">
//                         {p.name}
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         €{p.price.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Button unten rechts */}
//               <div className="text-right mt-4">
//                 <button className="text-sm text-blue-600 hover:underline">
//                   Alle Ergebnisse anzeigen
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-6 text-2xl text-gray-600">
//           <span className="cursor-pointer hover:text-blue-600">👤</span>
//           <span className="cursor-pointer hover:text-blue-600">❤️</span>
//           <span className="cursor-pointer hover:text-blue-600">🛒</span>
//         </div>
//       </div>

//       <div className="flex justify-center gap-10 bg-gray-200 py-3 shadow-md text-md font-semibold">
//         <Link
//           href="/badmoebel"
//           className="hover:text-blue-600 transition-colors"
//         >
//           BADMÖBEL{" "}
//         </Link>
//         <Link href="/duschen" className="hover:text-blue-600 transition-colors">
//           DUSCHEN
//         </Link>
//         <Link href="/baden" className="hover:text-blue-600 transition-colors">
//           BADEN
//         </Link>
//         <Link
//           href="/badheizkoerper"
//           className="hover:text-blue-600 transition-colors"
//         >
//           BADHEIZKÖRPER{" "}
//         </Link>
//         <Link
//           href="/badkeramik"
//           className="hover:text-blue-600 transition-colors"
//         >
//           BADKERAMIK
//         </Link>
//         <Link
//           href="/badarmaturen"
//           className="hover:text-blue-600 transition-colors"
//         >
//           BADARMATUREN
//         </Link>
//         <Link
//           href="/zubehoer"
//           className="hover:text-blue-600 transition-colors"
//         >
//           ZUBEHÖR{" "}
//         </Link>
//       </div>

//       <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold flex justify-center items-center gap-4">
//         <span>% SALE - Badmöbel zusätzlich rabattiert</span>
//         <button className="bg-white text-orange-600 px-3 py-1 rounded-md text-xs hover:bg-orange-100 transition">
//           Jetzt sparen
//         </button>
//       </div>
//     </nav>
//   );
// }
