"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faDiscord,
  faLinkedin,
  faInstagram,
  faCcVisa,
  faPaypal,
  faCcMastercard,
  faGooglePay,
  faCcApplePay,
  faBitcoin,
  faFedex,
  faDhl,
  faUps,
} from "@fortawesome/free-brands-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-10 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Sozial</h3>
          <p className="mb-4">Folgen Sie uns</p>
          <div className="flex gap-4 text-2xl">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faDiscord} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Sicher Bezahlen</h3>
          <div className="flex flex-wrap gap-4 text-2xl">
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faPaypal} />
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faBitcoin} />
            <FontAwesomeIcon icon={faGooglePay} />
            <FontAwesomeIcon icon={faCcApplePay} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Schnell Versendet</h3>
          <div className="flex flex-wrap gap-4 text-2xl">
            <FontAwesomeIcon icon={faFedex} />
            <FontAwesomeIcon icon={faDhl} />
            <FontAwesomeIcon icon={faUps} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Sicher Einkaufen</h3>
          <p>100 Tage kostenlose Rückgabe</p>
          <p>10 Jahre Garantie</p>
          <p>Sicher mit SSL-Verschlüsselung</p>
          <p>Kaufschutz und Datenschutz</p>
        </div>
      </div>

      <div className="mt-10 text-center space-y-4">
        <h2 className="text-2xl font-bold">Empfehlen Sie uns weiter</h2>
        <FontAwesomeIcon icon={faFaceSmile} className="text-3xl" />
        <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4">
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
          <Link href="/kontakt" className="hover:underline">
            Kontakt
          </Link>
          <a href="/aboutUs/page.js">über uns</a>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          &copy; 2025 BadezimmerWelt. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
