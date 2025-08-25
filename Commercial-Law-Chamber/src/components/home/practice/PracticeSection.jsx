import {FaBalanceScale,FaFileAlt,FaChartLine} from "react-icons/fa";
import "./PracticeSection.css";

export const PracticeSection = () => {
  return (
    <>
     
      <section className="practice-areas">
        <h2 className="section-title">Core Practice Areas</h2>
        <div className="cards-container">
          <div className="practice-card">
            <div className="icon">
              <FaFileAlt />
            </div>
            <h3>Tax Litigation</h3>
            <p>Expert representation in direct and indirect tax disputes.</p>
          </div>
          <div className="practice-card">
            <div className="icon">
              <FaBalanceScale />
            </div>
            <h3>Commercial Disputes</h3>
            <p>
              Resolving complex business conflicts with strategic precision.
            </p>
          </div>
          <div className="practice-card">
            <div className="icon">
              <FaChartLine />
            </div>
            <h3>Regulatory Advisory</h3>
            <p>Guidance on compliance, licensing, and regulatory frameworks.</p>
          </div>
        </div>
      </section>

    </>
  );
};
