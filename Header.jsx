import { NavLink } from 'react-router-dom'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <nav className="nav container" aria-label="Main navigation">
        <NavLink to="/" className="logo"><span className="logo-mark">D</span>DCE<span className="logo-dot">.</span></NavLink>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? '☀ Light' : '☾ Dark'}</button>
        </div>
      </nav>
    </header>
  )
}
