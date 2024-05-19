export default function HeroSection() {
    return (
        <section id ="heroSection" className = "hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title">Hello, I'm Jonathan</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                        Junior
                        <br />
                        Full Stack
                        <br />
                        Developer
                        </span>{" "}
                        
                    </h1>
                    <p className="hero--section--description">Bachelor's Degree in Computer Science
                    <br /> With a Specialization in Software-Systems
                    </p>
                </div>
                <a href="./img/Jonathan_Ayotte(.Resume.).pdf" download="Jonathan_Ayotte(.Resume.).pdf">
                    <button className="btn btn-primary">Download My Resume</button>
                </a>
                
            </div>
            <div className="hero--section--image">
            <img src="./img/meee.png" alt="Hero Section"/>
            </div>
        </section>
    ) ;
}