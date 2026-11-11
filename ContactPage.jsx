import ContactForm from './ContactForm'

export default function ContactPage() {
  return <main className="page container contact-page">
    <p className="eyebrow">LET'S CONNECT / 04</p><h1>Get in <span className="gradient">touch.</span></h1>
    <p className="page-intro">Have a junior role, internship, collaboration or project opportunity? Send me a message.</p>
    <div className="contact-layout"><div className="contact-details"><h2>Start a conversation.</h2><p>I welcome opportunities to learn, contribute and grow through practical work.</p><a href="mailto:davchristian293@gmail.com">davchristian293@gmail.com ↗</a><a href="https://www.linkedin.com/in/christian-david-479650311" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/DCE-code" target="_blank" rel="noreferrer">GitHub ↗</a></div><ContactForm /></div>
  </main>
}
