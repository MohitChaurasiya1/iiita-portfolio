import "./Home.css";
import hero from "../../../public/hero.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Dr. Sadhana Tiwari</h1>

        <h3>Post-Doc, Indian Institute of Information Technology Allahabad</h3>

        <p>
          Research Interest: Big Data Analytics, Data Mining, Machine Learning,
          Deep Learning, Data Stream Processing and Complex Event Processing.
        </p>

        <p>
          Ph.D. Thesis: Data Stream Mining: Challenges and Techniques for handling
          Healthcare data.
        </p>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Dr. Sadhana Tiwari" />
      </div>
    </section>
  );
}

export default Home;