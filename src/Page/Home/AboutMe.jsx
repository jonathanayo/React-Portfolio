export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/aboutme.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            I am Jonathan Ayotte, a Junior Software Engineer with a recent B.Sc. in Computer Science from the University of Victoria. 
            Throughout my academic and professional journey, I have accumulated substantial experience in full-stack development, 
            especially during my time at CGI. There, I played a key role in designing and developing client-centric applications. 
            My technical skills cover a broad range of programming languages including Java, JavaScript, Python, and Go, and I am 
            proficient in technologies such as Spring Boot, Vue.js, MongoDB, and Docker.
            </p>
            <p className="hero--section-description">
            In my role at CGI, I adopted agile methodologies, working collaboratively with my team to enhance application features 
            through robust testing and quality assurance practices. My contributions included implementing TestCafe scripts that significantly 
            reduced the bug rate, which demonstrates my meticulous attention to detail and commitment to quality.
            </p>
            <p className="hero--section-description">
            In addition to my technical experience, I also bring skills from outside the tech industry. 
            I previously worked as a painter, where I developed my project management skills and problem-solving capabilities, 
            ensuring high-quality deliverables and client satisfaction.
            </p>
          </div>
        </div>
      </section>
    );
  }