import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          As a developer, I bring a dynamic and adaptable skill set to the field.
          My experience as a technology intern at M&T Bank involved comprehensive full-stack development, 
          allowing me to hone my abilities across various aspects of the software development lifecycle. 
          My proficiency extends to web development, where I&apos;ve worked with technologies like JavaScript, Node.js, HTML, and CSS.
          Additionally, I have had plenty of backend experience in the past, using technologies like Java, Springboot and Kafka.
          </p>
          <p>As a teaching assistant at the University of Maryland, 
              I further developed my communication skills and demonstrated my ability to work seamlessly within cross-functional teams.
              I am passionate about leveraging technology to solve complex problems and contribute meaningfully to collaborative development environments.
              My commitment to continuous learning and staying abreast of industry trends reflects my dedication to remaining a
              versatile and effective developer.</p>
        </div>
        <div className="about-img">
          <Image src='/images/devicon.jpg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}
export default About;
