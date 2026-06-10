import "./Education.css";

function Education() {
  return (
    <section className="education-page">
      <h1>Education</h1>

      <div className="education-timeline">

        <div className="education-card">
          <span>27-Jan-2025</span>
          <h3>Ph.D.</h3>
          <h4>Indian Institute of Information Technology Allahabad</h4>
          <p>
            Thesis Title: Data Stream Mining: Challenges and Techniques for
            handling Healthcare data
          </p>
        </div>

        <div className="education-card">
          <span>June 2010</span>
          <h3>M.Tech Thesis (Information Technology)</h3>
          <h4>Indian Institute of Information Technology Allahabad</h4>
          <p>
            Thesis Title: Classification of Data Sets Using Support Vector Machine
          </p>
          <p>Division: First (8.8 CGPA)</p>
        </div>

        <div className="education-card">
          <span>June 2008</span>
          <h3>B.Tech (Computer Science Engineering)</h3>
          <h4>
            Babu Banarasi Das National Institute of Technology and Management,
            Lucknow
          </h4>
          <p>Division: First (74.7%)</p>
        </div>

        <div className="education-card">
          <span>Certifications</span>
          <h3>Certifications</h3>
          <p>Details not specified in CV.</p>
        </div>

      </div>
    </section>
  );
}

export default Education;