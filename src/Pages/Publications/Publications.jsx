import "./Publications.css";

function Publications() {
  const journalPapers = [
    {
      year: "2025",
      title: "A diagnosis and treatment of liver diseases: integrating batch processing, rule-based event detection and explainable artificial intelligence",
      venue: "Evolving Systems",
      details: "SCIE Indexed, Q2, IF-2.7",
    },
    {
      year: "2024",
      title: "Multimodal image fusion on ECG signals for congestive heart failure classification",
      venue: "Multimedia Tools and Applications",
      details: "SCIE Indexed, Q1, IF-3.6",
    },
    {
      year: "2023",
      title: "Empirical analysis of chronic disease dataset for multiclass classification using optimal feature selection-based hybrid model with spark streaming",
      venue: "Future Generation Computer Systems",
      details: "SCIE Indexed, Q1, IF-7.5",
    },
    {
      year: "2023",
      title: "Semantic web-based diagnosis and treatment of vector-borne diseases using SWRL rules",
      venue: "Knowledge-Based Systems",
      details: "SCIE Indexed, Q1, IF-8.139",
    },
    {
      year: "2022",
      title: "Forecasting COVID-19 cases using Statistical Models and Ontology-based Semantic Modelling",
      venue: "arXiv",
      details: "Preprint",
    },
    {
      year: "2021",
      title: "A Shrewd Artificial Neural Network-Based Hybrid Model for Pervasive Stress Detection of Students",
      venue: "Big Data",
      details: "SCIE Indexed, Q2, IF-4.6",
    },
    {
      year: "2021",
      title: "Data Stream Management for CPS-based Healthcare: A Contemporary Review",
      venue: "IETE Technical Review",
      details: "SCIE Indexed, Q2, IF-1.9",
    },
    {
      year: "2015",
      title: "Character Recognition using Ensemble Classifier",
      venue: "International Journal of Computer Science & Engineering Technology",
      details: "Journal Publication",
    },
    {
      year: "2013",
      title: "An Optimized Approach for K-Means Clustering",
      venue: "International Journal of Computer Applications",
      details: "Journal Publication",
    },
  ];

  const conferencePapers = [
    {
      year: "2025",
      title: "Deep Semantics for Structured Data: Hybrid LLM-Based Models for Temporal Forecasting",
      venue: "ICONIP 2025",
    },
    {
      year: "2025",
      title: "Ontology-Based Forest Fire Management Using Complex Event Processing and Large Language Models",
      venue: "DEXA 2025",
    },
    {
      year: "2025",
      title: "Innovative Framework for Early Estimation of Mental Disorder Scores to Enable Timely Interventions",
      venue: "DEXA 2025",
    },
    {
      year: "2024",
      title: "Melanoma Classification using GAN based augmentation and Self-Supervised feature extraction",
      venue: "IEEE BigData 2024",
    },
    {
      year: "2023",
      title: "Predicting Habitable Exoplanets in Different Star Systems Using Deep Learning",
      venue: "IJCNN 2023",
    },
    {
      year: "2023",
      title: "Time Series Forecasting of ECG Data Using Transfer Learning and Customized Drift Detector",
      venue: "SMOPS 2023",
    },
    {
      year: "2022",
      title: "An Optimized Hybrid Solution for IoT Based Lifestyle Disease Classification Using Stress Data",
      venue: "ICONIP 2022",
    },
    {
      year: "2022",
      title: "Natural Language Processing and Ontology Based Decision Support System for Diabetic Patients",
      venue: "EECSI 2022",
    },
    {
      year: "2019",
      title: "Classification of Physiological Signals for Emotion Recognition Using IoT",
      venue: "EECSI 2019",
    },
  ];
  const patents = [
    {
      year: "2026",
      title:
        "A Wearable Assistive System with Integrated Real-Time Health and Emotion Monitoring of Lower-Limb Disabled Persons",
      type: "Patent Application",
    },
    {
      year: "2026",
      title:
        "Ontology-Driven Knowledge Modeling for IoT-Based Health Monitoring of Wheelchair Users",
      type: "Copyright Application",
    },
  ];
    return (
      <div className="publications-page">
        <section className="publications-header">
          <h1>Publications</h1>
          <p>
            Research contributions in Data Mining, Machine Learning,
            Healthcare Analytics, Data Stream Processing, and Artificial
            Intelligence.
          </p>
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <h2>18+</h2>
            <p>Total Publications</p>
          </div>

          <div className="stat-card">
            <h2>9</h2>
            <p>Journal Papers</p>
          </div>

          <div className="stat-card">
            <h2>9</h2>
            <p>Conference Papers</p>
          </div>

          <div className="stat-card">
            <h2>2</h2>
            <p>Patent & Copyright</p>
          </div>
        </section>

        {/* Journal Publications */}

        <section className="publication-section">
          <h2>Journal Publications (9)</h2>

          <div className="publication-grid">
            {journalPapers.map((paper, index) => (
              <div key={index} className="publication-card">
                <span>{paper.year}</span>

                <h3>{paper.title}</h3>

                <p>{paper.venue}</p>

                <p className="publication-meta">
                  {paper.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conference Publications */}

        <section className="publication-section">
          <h2>Conference Publications (9)</h2>

          <div className="publication-grid">
            {conferencePapers.map((paper, index) => (
              <div key={index} className="publication-card">
                <span>{paper.year}</span>

                <h3>{paper.title}</h3>

                <p>{paper.venue}</p>

                {paper.details && (
                  <p className="publication-meta">
                    {paper.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Patent & Copyright */}

        <section className="publication-section">
          <h2>Patent & Copyright Applications</h2>

          <div className="patent-card">
            <span>2026</span>

            <h3>
              A Wearable Assistive System with Integrated Real-Time Health
              and Emotion Monitoring of Lower-Limb Disabled Persons
            </h3>

            <p>
              Patent Application No. 202611052999
            </p>

            <p className="publication-meta">
              Filed under DIVYASAMPARK IHUB ROORKEE FOR DEVICES MATERIALS
              AND TECHNOLOGY FOUNDATION
            </p>
          </div>

          <div className="patent-card">
            <span>2026</span>

            <h3>
              Ontology-Driven Knowledge Modeling for IoT-Based Health
              Monitoring of Wheelchair Users
            </h3>

            <p>
              Copyright Application
            </p>

            <p className="publication-meta">
              Diary No. LD-12519/2026-CO
            </p>
          </div>
        </section>
      </div>
    );
}

export default Publications;