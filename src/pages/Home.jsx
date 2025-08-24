import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>KAKUMI BDC LTD</h1>
          <p>Trusted Bureau de Change in Abuja</p>
          <div className="hero-buttons">
            <Link to="/rates" className="btn btn-primary">Check Rates</Link>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Exchange Rates */}
      <section className="rates">
        <h2>Today’s Exchange Rates</h2>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Buy (₦)</th>
              <th>Sell (₦)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>1,540</td>
              <td>1,550</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>2,100</td>
              <td>2,130</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>1,650</td>
              <td>1,680</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* About Us */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          At KAKUMI BDC LTD, we provide reliable, secure and transparent
          currency exchange services in the heart of Abuja. Our mission is to
          deliver the best exchange rates with excellent customer service.
        </p>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">💱 Forex Trading</div>
          <div className="service-card">💵 Currency Exchange</div>
          <div className="service-card">🏦 Corporate & Personal Clients</div>
          <div className="service-card">⚡ Fast Transfers</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Trustworthy & Transparent</li>
          <li>✔️ Best Exchange Rates</li>
          <li>✔️ Secure Transactions</li>
          <li>✔️ Abuja Central Location</li>
        </ul>
      </section>

      {/* Contact & Map */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          📍 Suite 13, Zone 4 Plaza, Wuse Zone 4, Abuja <br />
          📞 +234 803 786 9368<br />
          ✉️ infor@kakumibdc.com
        </p>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.506662632447!2d7.489297!3d9.057854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5d1741c6f1%3A0x2db657d7df0e90!2sWuse%20Zone%204!5e0!3m2!1sen!2sng!4v1699999999999"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <a
          href="https://wa.me/2348037869368"
          className="btn-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          💬 Chat on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} KAKUMI BDC LTD. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
