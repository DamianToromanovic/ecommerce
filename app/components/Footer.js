"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faDiscord,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-6">
      <div className="bg-gray-100 w-full px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen mx-auto px-4 text-sm text-gray-700  ">
          <div>
            <h3 className="font-bold text-gray-800 mb-4">WIR HELFEN IHNEN</h3>
            <ul className="space-y-1">
              <li>Unser Service für Sie</li>
              <li>Glossar</li>
              <li>Häufige Fragen</li>
              <li>Themenwelt</li>
            </ul>
            <div className="mt-4">
              <p className="font-semibold">02707 / 60777-0</p>
              <p>Mo - Do: 8.00 bis 18.00 Uhr</p>
              <p>Fr: 8.00 bis 16.00 Uhr</p>
              <p>info@Badezimmerwelt.de</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">
              KUNDENINFORMATIONEN
            </h3>
            <ul className="space-y-1">
              <li>Zahlung</li>
              <li>Versandkosten</li>
              <li>Garantie & Gewährleistung</li>
              <li>Reklamation</li>
              <li>Widerrufsbelehrung</li>
              <li>Batterieentsorgung</li>
              <li className="text-blue-600 font-semibold">
                Newsletteranmeldung: Jetzt 10€ sichern
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">UNTERNEHMEN</h3>
            <ul space-y-1>
              <li>Unsere Ausstellung</li>
              <li>Öffnungszeiten & Anfahrt</li>
              <li>Unser Team</li>
              <li>Jobs</li>
              <div className="mt-4">
                <img
                  src="/images/icons/ts-excellence.png"
                  alt="Excellent shop"
                  className="w-24"
                ></img>
              </div>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 w-full mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16  gap-4 ">
            <div className="flex gap-6 flex-wrap justify-center md:justify-start ">
              <Link href="/impressum" className="hover:underline">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:underline">
                Datenschutz
              </Link>
              <Link href="/kontakt" className="hover:underline">
                Kontakt
              </Link>
              <Link href="/aboutUs"></Link>
            </div>

            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white text-xl hover:text-gray-300"
              />
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-white text-xl hover:text-gray-300"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-xl hover:text-gray-300"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-xl hover:text-gray-300"
              />
            </div>
          </div>

          <div className="text-center text-xs py-2 border-t border-blue-800">
            &copy; 2025 BadezimmerWelt. Alle Rechte vorbehalten
          </div>
        </div>
      </div>
    </footer>
  );
}
