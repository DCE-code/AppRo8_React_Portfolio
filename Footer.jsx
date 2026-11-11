import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Link to="/" className="logo"><span className="logo-mark">D</span>DCE<span className="logo-dot">.</span></Link><span>Designed and built by David Christian Ekene</span><span>© {new Date().getFullYear()} DCE Studio</span></div></footer>
}
