<<<<<<< HEAD
import React from "react";

const Footer = () => {
  return (
    <footer>
      <script
        src="https://kit.fontawesome.com/fa308e1dac.js"
        crossorigin="anonymous"
      ></script>
      <div>
        <h3>Sozial</h3>
        <p>Folgen sie uns</p>

        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-discord"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
      <div>
        <h3>Sicher Bezahlen</h3>
        <i class="fa-brands fa-cc-visa"></i>
        <i class="fa-brands fa-paypal"></i>
        <i class="fa-brands fa-cc-mastercard"></i>
        <i class="fa-brands fa-btc"></i>
        <i class="fa-brands fa-google-pay"></i>
        <i class="fa-brands fa-cc-apple-pay"></i>
      </div>
      <div>
        <h3>Schnell Versendet</h3>
        <i class="fa-brands fa-fedex"></i>
        <i class="fa-brands fa-dhl"></i>
        <i class="fa-brands fa-ups"></i>
      </div>
      <div>
        <h3>Sicher Einkaufen</h3>
        <p>100 Tage kostenlose Rückgabe</p>
        <p>10 Jahre Garantie</p>
        <p>sicher mit SSL-Verschlüssellung</p>
        <p>Kaufschutz und Datenschutz</p>
      </div>
      <h2>Empfehlen sie uns weiter</h2>
      <i class="fa-solid fa-face-smile"></i>
      <a href="/impressum">Impressum</a>
      <a href="/datenschutz">Datenschutz</a>
      <a href="/kontakt">Kontakt</a>
      <p>&copy; 2025 BadezimmerWelt. Alle Rechte vorbehalten.</p>
    </footer>
  );
};

export default Footer;
=======
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
        </div>
        <p className="text-sm text-gray-600 mt-6">
          &copy; 2025 BadezimmerWelt. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
>>>>>>> main
