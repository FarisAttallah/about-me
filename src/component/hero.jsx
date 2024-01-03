import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/devicon.jpg' className="profile-img" width={300} height={300} alt="Faris's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Faris Attallah 👋</h1>
        <p>
        Enthusiastic and skilled full-stack developer with hands-on experience in building robust backend infrastructure and user-friendly interfaces, complemented by effective communication and collaboration within cross-functional teams.
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/faris-attallah-618075244/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;