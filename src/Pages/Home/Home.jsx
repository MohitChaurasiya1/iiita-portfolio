import "./Home.css";
import hero from "../../../public/hero.jpg";

function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Dr. Sadhana Tiwari</h1>

                    <h3>
                        Post-Doc, Indian Institute of Information Technology Allahabad
                    </h3>

                    <p>
                        Research Interest: Big Data Analytics, Data Mining, Machine
                        Learning, Deep Learning, Data Stream Processing and Complex Event
                        Processing.
                    </p>

                    <p>
                        Ph.D. Thesis: Data Stream Mining: Challenges and Techniques for
                        handling Healthcare data.
                    </p>
                </div>

                <div className="hero-image">
                    <img src={hero} alt="Dr. Sadhana Tiwari" />
                </div>
            </section>

            {/* Featured Publications */}

                    <section className="publications">
                        <h2>Featured Publications</h2>

                        <div className="publication-container">

                            <div className="publication-card">
                                <h3>
                                    Deep Semantics for Structured Data:
                                    Hybrid LLM-Based Models for Temporal Forecasting
                                </h3>
                                <p>ICONIP 2025</p>
                            </div>

                            <div className="publication-card">
                                <h3>
                                    A diagnosis and treatment of liver diseases:
                                    integrating batch processing, rule-based event
                                    detection and explainable artificial intelligence
                                </h3>
                                <p>Evolving Systems, 2025</p>
                            </div>

                            <div className="publication-card">
                                <h3>
                                    Ontology-Based Forest Fire Management Using
                                    Complex Event Processing and Large Language Models
                                </h3>
                                <p>DEXA 2025</p>
                            </div>

                        </div>
                    </section>
                    {/* Recent Achievements */}

                    <section className="achievements">
                        <h2>Recent Achievements</h2>

                        <div className="achievement-container">

                            <div className="achievement-card">
                                <h3>IEEE VIS 2023 Inclusivity and Diversity Scholarship</h3>
                                <p>Scholarship Award</p>
                            </div>

                            <div className="achievement-card">
                                <h3>Best Research Presentation Award</h3>
                                <p>ASCIS 2024</p>
                            </div>

                        </div>
                    </section>
        </>
    );
}

export default Home;