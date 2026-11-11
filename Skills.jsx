const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Python', 'Git & GitHub']

export default function Skills() {
  return <div className="skills-grid">{skills.map((skill, index) => <div className="skill" key={skill}><span>0{index + 1}</span><strong>{skill}</strong></div>)}</div>
}
