export default function HeroSection() {
    return (
        <section id ="heroSection" className = "hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Jonathan</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack

                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">AAAAAAAA
                    <br /> BBBBBBBB
                    </p>
                </div>
                <button className="btn btn--primary">Get in Touch</button>
            </div>
            <div className="hero--section--image">
            <img src="./img/me2.jpg" alt="HeroSection" width="200" height="auto"/>
            </div>
        </section>
    ) ;
}