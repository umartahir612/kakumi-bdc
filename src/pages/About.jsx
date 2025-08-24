import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Company Overview */}
      <section className="overview">
        <h1>About KAKUMI BDC LTD</h1>
        <p>
          KAKUMI BDC LTD is a licensed Bureau de Change located at Suite 13,
          Ground Floor, Wuse Zone 4, Abuja. We specialize in providing secure,
          fast, and transparent currency exchange services to individuals and
          businesses across Nigeria.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mvv">
        <h2>Our Mission, Vision & Values</h2>
        <div className="mvv-grid">
          <div className="card">
            <h3>Mission</h3>
            <p>To provide trusted and transparent foreign exchange services.</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>To become Nigeria’s most reliable Bureau de Change.</p>
          </div>
          <div className="card">
            <h3>Core Values</h3>
            <ul>
              <li>Trust</li>
              <li>Integrity</li>
              <li>Transparency</li>
              <li>Speed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/ceo (2).png" alt="CEO" />
            <h4>Umar Dahiru Kakumi</h4>
            <p>Managing Director / CEO</p>
          </div>
          <div className="team-card">
            <img src="/images/compliance.png" alt="Compliance" />
            <h4>Abubakar Umar Tahir</h4>
            <p>Compliance Officer</p>
          </div>
          <div className="team-card">
            <img src="/images/staff.png" alt="Staff" />
            <h4>Forex Operations</h4>
            <p>Senior Forex Officer</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <h2>Our Journey</h2>
        <ul>
          <li><b>2005:</b> Established operations in Abuja</li>
          <li><b>2015:</b> Expanded corporate forex services</li>
          <li><b>2019:</b> Recognized as trusted BDC in Zone 4</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need Trusted Forex Services?</h2>
        <a
          href="https://wa.me/2348037869368"
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default About;
