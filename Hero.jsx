import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="availability"><i /> Available for junior opportunities</span>
        <p className="eyebrow">HELLO, I'M</p>
        <h1>David Christian<br /><span className="gradient">Ekene.</span></h1>
        <h2>Junior Frontend Developer</h2>
        <p className="intro">I build responsive, accessible and user-friendly web experiences with HTML, CSS, JavaScript and React.</p>
        <div className="actions"><Link className="button primary" to="/projects">Explore projects ↗</Link><Link className="button secondary" to="/contact">Get in touch</Link></div>
        <div className="socials"><a href="https://github.com/DCE-code" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/christian-david-479650311" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div>
      <div className="hero-panel" aria-label="Developer code card">
        <div className="panel-top"><span>● ● ●</span><span>about-me.jsx</span></div>
        <pre><code><span className="purple">const</span> developer = {'{'}{ '\n' }  name: <span className="green">'David Christian'</span>,{ '\n' }  role: <span className="green">'Frontend Developer'</span>,{ '\n' }  skills: [<span className="green">'HTML'</span>, <span className="green">'CSS'</span>,{ '\n' }    <span className="green">'JavaScript'</span>, <span className="green">'React'</span>],{ '\n' }  mindset: <span className="green">'Always learning'</span>{ '\n' }{'}'}</code></pre>
        <div className="panel-bottom"><i /> Building and learning</div>
      </div>
    </section>
  )
}
