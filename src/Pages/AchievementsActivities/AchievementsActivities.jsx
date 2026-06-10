import "./AchievementsActivities.css";
function AchievementsAndActivities() {
  const awards = [
    {
      title: "IEEE VIS Inclusivity & Diversity Scholarship",
      year: "2023",
      description:
        "Recipient of IEEE VIS Scholarship worth $1000 for attending IEEE VIS 2023.",
    },
    {
      title: "Best Research Presentation Award",
      year: "2024",
      description:
        "Awarded for presenting Ph.D. thesis work at ASCIS 2024, Marwadi University, Gujarat.",
    },
  ];

  const activities = [
    {
      year: "2024",
      title: "Hands-on Training at IIT Roorkee",
      description:
        "Conducted training on Big Data Analytics for ITS Officers.",
    },
    {
      year: "2024",
      title: "Training at ISRO ISTRAC",
      description:
        "Provided hands-on training on Data Engineering Tools and Techniques.",
    },
    {
      year: "2023",
      title: "IEEE VIS Tutorial",
      description:
        "Delivered tutorial on Mining Useful Information via Complex Network Visualization.",
    },
    {
      year: "2023",
      title: "Conference Chair",
      description:
        "Served as Conference Chair at the International Joint Conference on Neural Networks (IJCNN).",
    },
    {
      year: "2023",
      title: "Session Chair",
      description:
        "Chaired a session at UTCA 2023 Conference.",
    },
    {
      year: "2020",
      title: "ONGC Sponsored Training Program",
      description:
        "Organized a 5-day training program on AI, Blockchain, IoT and Big Data Analytics.",
    },
    {
      year: "2019",
      title: "IEEE CIS Summer School",
      description:
        "Member of the organizing committee.",
    },
  ];

 return (
  <div className="achievements-page">
    <section className="achievements-header">
      <h1>Achievements & Activities</h1>
      <p>
        Academic achievements, professional activities, workshops,
        training programs, and leadership contributions.
      </p>
    </section>

    <section className="achievements-section">
      <h2>Awards & Recognition</h2>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <span>{award.year}</span>
            <h3>{award.title}</h3>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="achievements-section">
      <h2>Professional Activities</h2>

      <div className="timeline">
        {activities.map((activity, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">
              {activity.year}
            </div>

            <div className="timeline-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
}

export default AchievementsAndActivities;