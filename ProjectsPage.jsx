import { useState } from 'react'
import Projects from './Projects'

export default function ProjectsPage({ projects, onAddProject }) {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [notice, setNotice] = useState('')

  function handleAdd(event) {
    event.preventDefault()
    if (!title.trim() || !description.trim() || !/^https?:\/\//.test(link)) {
      setNotice('Complete all fields and enter a valid URL starting with http:// or https://.')
      return
    }
    onAddProject({ title: title.trim(), type: 'Added project', description: description.trim(), stack: ['Personal project'], link })
    setTitle(''); setLink(''); setDescription(''); setNotice('Project added to this page for the current session.')
    setShowForm(false)
  }

  return <main className="page container">
    <p className="eyebrow">MY WORK / 03</p><h1>Projects<span className="gradient">.</span></h1>
    <p className="page-intro">A selection of personal, practice and concept projects. The project list is managed with React state.</p>
    <div className="add-row"><button className="button secondary" onClick={() => setShowForm(!showForm)}>{showForm ? 'Close form' : '+ Add a project'}</button></div>
    {showForm && <form className="add-project-form" onSubmit={handleAdd}><h2>Add project</h2><input value={title} onChange={e => setTitle(e.target.value)} placeholder="Project title" /><input value={link} onChange={e => setLink(e.target.value)} placeholder="https://project-url.com" /><textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Short project description" rows="3" /><button className="button primary">Add to project list</button></form>}
    {notice && <p className="form-notice" role="status">{notice}</p>}
    <Projects projects={projects} />
  </main>
}
