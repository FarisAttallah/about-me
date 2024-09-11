const Skills = () => {
  // Array of skill objects containing the icon class and the skill name
  const skillList = [
    { iconClass: "fa-brands fa-java java-icon", name: "Java" },
    { iconClass: "fa-brands fa-angular angular-icon", name: "Angular" },
    { iconClass: "fa-solid fa-database", name: "SQL" },
    { iconClass: "fa fa-power-off", name: "Spring" },
    { iconClass: "fa-brands fa-html5 html-icon", name: "HTML" },
    { iconClass: "fa-brands fa-css3-alt css-icon", name: "CSS" },
    { iconClass: "fa-brands fa-js-square js-icon", name: "JavaScript" },
    { iconClass: "fa-brands fa-node-js node-icon", name: "Node" }
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-card html zoom-effect">
            <i className={skill.iconClass}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
