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
