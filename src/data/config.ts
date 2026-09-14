const config = {
  title: "Piyush Funde | Full-Stack Developer",
  description: {
    long: "Software developer with hands-on experience building production REST APIs, data pipelines, and integrations using Java, Spring Boot, React, and MySQL. Built a full-stack CRM for a real client (Eva Groups), including Excel-based data ingestion, JWT auth, and WebSocket-based real-time sync.",
    short:
      "Full-Stack Developer specializing in Java, Spring Boot, React, AWS, and scalable web applications.",
  },
  keywords: [
    "Piyush Funde",
    "Piyush",
    "portfolio",
    "Full-Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "EVA CRM",
    "Visual Pipeline Engine",
    "Bedside Bot",
    "Nagpur",
    "India",
  ],
  author: "Piyush Funde",
  email: "fundepiyush18@gmail.com",
  site: "https://github.com/piyushFunde",

  // for github stars button
  githubUsername: "piyushFunde",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://github.com/piyushFunde",
    linkedin: "https://www.linkedin.com/in/piyushfunde/",
    instagram: "https://github.com/piyushFunde",
    facebook: "https://github.com/piyushFunde",
    github: "https://github.com/piyushFunde",
  },
};
export { config };
