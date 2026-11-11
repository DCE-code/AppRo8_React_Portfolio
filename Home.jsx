import { Link } from 'react-router-dom'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

export default function Home({ projects }) {
  return <main>
    <div className="container"><Hero /></div>
    <section className="section container"><div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>Building with curiosity<span className="gradient">.</span></h2></div><p className="section-copy">I'm a junior frontend developer based in Nigeria. I enjoy turning ideas into practical digital experiences and improving my skills through hands-on projects. I'm looking for opportunities to contribute, learn and grow with a development team.</p></section>
    <section className="section tinted"><div className="container"><div className="section-heading"><p className="eyebrow">02 / SKILLS</p><h2>My toolkit<span className="gradient">.</span></h2></div><Skills /></div></section>
    <section className="section container"><div className="section-heading heading-row"><div><p className="eyebrow">03 / WORK</p><h2>Featured projects<span className="gradient">.</span></h2></div><Link to="/projects" className="project-link">All projects ↗</Link></div><Projects projects={projects} limit={3} /></section>
    <section className="cta-band"><div className="container cta-content"><div><p className="eyebrow">HAVE AN OPPORTUNITY?</p><h2>Let's build something useful.</h2></div><Link className="button primary" to="/contact">Contact me ↗</Link></div></section>
  </main>
}
