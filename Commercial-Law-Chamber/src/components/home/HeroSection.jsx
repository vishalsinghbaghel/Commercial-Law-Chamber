import React from "react";
import "./HeroSection.css"; // Import the CSS file

const HeroSection = () => {
  return (
    <div className="container">
      
      <section className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Leading Law Firm for Tax & Commercial Litigation
          </h1>
          <p className="hero-subtitle">
            Trusted by industry leaders for high-stakes disputes and regulatory
            expertise.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Schedule a Consultation</button>
            <button className="btn-secondary">Explore Our Services</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
