import React, { useState } from "react";

export default function FooterSection({ setSelectedCategory, onFilterChange }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`მადლობა გამოწერისთვის: ${email}`);
      setEmail("");
    } else {
      alert("გთხოვთ შეიყვანოთ ელფოსტა");
    }
  };

  const handleCatClick = (cat) => {
    setSelectedCategory(cat);
    onFilterChange();
    window.scrollTo({ top: 700, behavior: "smooth" });
  };

  const handleHelpClick = (type) => {
    if (type === "faq")
      alert("ხშირი კითხვები: მიწოდება ხორციელდება 2-3 დღეში.");
    if (type === "shipping")
      alert("მიწოდება და დაბრუნება: უფასო მიწოდება 100$-დან.");
    if (type === "contact")
      alert("კონტაქტი: support@mravaveri.ge | +995 32 200 00 00");
    if (type === "privacy")
      alert("კონფიდენციალურობა: თქვენი მონაცემები დაცულია.");
  };

  return (
    <div className="footer-combined-wrapper">
      <section className="newsletter-banner-box">
        <div className="newsletter-info">
          <h3>კარგი აღმოჩენა არ გამოგტოვოს.</h3>
          <p>მიიღე სიახლეები და შთააგონება შენს ელფოსტაზე.</p>
        </div>
        <div className="newsletter-input-group">
          <input
            type="email"
            placeholder="შენი ელფოსტა"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>გამოწერე ↗</button>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-inner-grid">
          <div className="footer-col">
            <div className="footer-logo-row">
              <span className="footer-logo-icon">✱</span>
              <h3>მრავალო</h3>
            </div>
            <p>
              მრავალპროფილური ონლაინ მაღაზია. შენი ყოველდღიურობისთვის შერჩეული
              ნივთები — ერთ სივრცეში.
            </p>
            <div className="social-links">📷 📘</div>
          </div>
          <div className="footer-col">
            <h4>აღმოაჩინე</h4>
            <ul>
              <li onClick={() => handleCatClick("women's clothing")}>
                ქალის ტანსაცმელი
              </li>
              <li onClick={() => handleCatClick("men's clothing")}>
                კაცის ტანსაცმელი
              </li>
              <li onClick={() => handleCatClick("jewelery")}>სამკაული</li>
              <li onClick={() => handleCatClick("electronics")}>ელექტრონიკა</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>დახმარება</h4>
            <ul>
              <li onClick={() => handleHelpClick("faq")}>ხშირი კითხვები</li>
              <li onClick={() => handleHelpClick("shipping")}>
                მიწოდება და დაბრუნება
              </li>
              <li onClick={() => handleHelpClick("contact")}>კონტაქტი</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© 2026 მრავავერი. ყველა უფლება დაცულია.</p>
          <p>Product data: Fake Store API · USD ($)</p>
          <p
            className="footer-privacy"
            onClick={() => handleHelpClick("privacy")}
          >
            კონფიდენციალურობა
          </p>
        </div>
      </footer>
    </div>
  );
}
