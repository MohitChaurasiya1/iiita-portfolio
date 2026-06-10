import "./Publications.css";

function Publications() {
  const journalPapers = [
    {
      title:
        "A diagnosis and treatment of liver diseases: integrating batch processing, rule-based event detection and explainable artificial intelligence",
      year: "2025",
      venue: "Evolving Systems",
      type: "Journal",
    },
    {
      title:
        "Multimodal image fusion on ECG signals for congestive heart failure classification",
      year: "2024",
      venue: "Multimedia Tools and Applications",
      type: "Journal",
    },
    {
      title:
        "Empirical analysis of chronic disease dataset for multiclass classification using optimal feature selection-based hybrid model with spark streaming",
      year: "2023",
      venue: "Future Generation Computer Systems",
      type: "Journal",
    },
  ];

  const conferencePapers = [
    {
      title:
        "Deep Semantics for Structured Data: Hybrid LLM-Based Models for Temporal Forecasting",
      year: "2025",
      venue: "ICONIP 2025",
    },
    {
      title:
        "Ontology-Based Forest Fire Management Using Complex Event Processing and Large Language Models",
      year: "2025",
      venue: "DEXA 2025",
    },
    {
      title:
        "Melanoma Classification using GAN based augmentation and Self-Supervised feature extraction",
      year: "2024",
      venue: "IEEE BigData 2024",
    },
  ];

  return (
    <div className="publications-page">
      <section className="publications-header">
        <h1>Publications</h1>
        <p>
          Research contributions in Data Mining, Machine Learning,
          Healthcare Analytics and Artificial Intelligence.
        </p>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>18+</h2>
          <p>Publications</p>
        </div>

        <div className="stat-card">
          <h2>4+</h2>
          <p>Q1 Journals</p>
        </div>

        <div className="stat-card">
          <h2>6+</h2>
          <p>Core Ranked Conferences</p>
        </div>

        <div className="stat-card">
          <h2>2</h2>
          <p>Patent & Copyright</p>
        </div>
      </section>

      <section className="publication-section">
        <h2>Journal Publications</h2>

        <div className="publication-grid">
          {journalPapers.map((paper, index) => (
            <div key={index} className="publication-card">
              <span>{paper.year}</span>
              <h3>{paper.title}</h3>
              <p>{paper.venue}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="publication-section">
        <h2>Conference Publications</h2>

        <div className="publication-grid">
          {conferencePapers.map((paper, index) => (
            <div key={index} className="publication-card">
              <span>{paper.year}</span>
              <h3>{paper.title}</h3>
              <p>{paper.venue}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="publication-section">
        <h2>Patents & Copyrights</h2>

        <div className="publication-card">
          <span>2026</span>
          <h3>
            A Wearable Assistive System with Integrated Real-Time Health and
            Emotion Monitoring of Lower-Limb Disabled Persons
          </h3>
          <p>Patent Application</p>
        </div>

        <div className="publication-card">
          <span>2026</span>
          <h3>
            Ontology-Driven Knowledge Modeling for IoT-Based Health Monitoring
            of Wheelchair Users
          </h3>
          <p>Copyright Application</p>
        </div>
      </section>
    </div>
  );
}

export default Publications;