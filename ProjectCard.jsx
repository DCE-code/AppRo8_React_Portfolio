export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-visual"><span>{String(project.id).padStart(2, '0')}</span><b>{project.title}</b><small>{project.type}</small></div>
      <div className="project-content">
        <h3>{project.title}</h3><p>{project.description}</p>
        <div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project ↗</a>
      </div>
    </article>
  )
}
