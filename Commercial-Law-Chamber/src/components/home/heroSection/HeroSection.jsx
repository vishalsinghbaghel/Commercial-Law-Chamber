
import "./HeroSection.css"; 

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

       <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome to CLC</h2>
          <p>
            At CLC, we specialize in resolving complex disputes and navigating regulatory frameworks
            with precision and integrity. Our commitment to excellence has earned the trust of
            industry leaders across sectors.
          </p>
        </div>
      </section>


    </div>
  );
};

export default HeroSection;
