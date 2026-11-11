import ProjectCard from './ProjectCard'

export default function Projects({ projects, limit }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects
  return <div className="projects-grid">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
}
