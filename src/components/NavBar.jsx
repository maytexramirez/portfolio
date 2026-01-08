import React, { useState } from "react";

export default function NavBar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item is-brand" href="#top">
          Mayte Ramirez-Calderon<span style={{ color: "var(--accent)" }}>•</span>
        </a>

        <a
          role="button"
          className={`navbar-burger ${open ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${open ? "is-active" : ""}`}>
        <div className="navbar-end">
          <a className="navbar-item" href="#about">About</a>
          <a className="navbar-item" href="#highlights">Highlights</a>
          <a className="navbar-item" href="#projects">Projects</a>
          <a className="navbar-item" href="#skills">Skills</a>
          <a className="navbar-item" href="#contact">Contact</a>
          <div className="navbar-item">
          <div className="theme-switch">
            <span className="theme-switch-label">
              {theme === "dark" ? "Dark" : "Light"}
            </span>

            <button
              type="button"
              className={`theme-pill ${theme === "dark" ? "is-dark" : ""}`}
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
            >
              <span className="theme-knob" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}
