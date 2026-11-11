import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'

const initialProjects = [
  { id: 1, title: 'DCE Studio Portfolio', type: 'Personal website', description: 'A personal portfolio presenting my frontend work, skills and contact details.', stack: ['HTML', 'CSS', 'JavaScript'], link: 'https://dce-studio.vercel.app' },
  { id: 2, title: 'Squires Estates Concept', type: 'Website concept', description: 'A premium real-estate website concept with a responsive layout and refined visual direction.', stack: ['HTML', 'CSS', 'JavaScript'], link: 'https://squires-estates-concept.vercel.app' },
  { id: 3, title: 'MiniStore', type: 'Frontend practice', description: 'A small e-commerce interface built to practise React-based frontend development.', stack: ['React', 'Vite'], link: 'https://github.com/DCE-code' },
]

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('dce-theme') || 'dark')
  const [projects, setProjects] = useState(initialProjects)

  function toggleTheme() {
    setTheme(current => {
      const next = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem('dce-theme', next)
      return next
    })
  }

  function addProject(project) {
    setProjects(current => [...current, { ...project, id: Date.now() }])
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/projects" element={<ProjectsPage projects={projects} onAddProject={addProject} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<main className="page container"><p className="eyebrow">404 / NOT FOUND</p><h1>Page not found.</h1><a className="button primary" href="/">Return home</a></main>} />
      </Routes>
      <Footer />
    </div>
  )
}
