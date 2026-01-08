import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}, [theme]);

  return (
    <div id="top" className="container is-max-desktop py-5">
      <NavBar
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      {/* HERO */}
      <section className="app-hero py-6">
        <div className="columns is-vcentered">
          <div className="column is-8">
            <p className="tag is-accent mb-3">Full Stack Software Engineer</p>

            <h1 className="title is-2 section-title">
              Building scalable, user-first software
              <span style={{ color: "var(--accent)" }}> with real impact.</span>
            </h1>

            <p className="subtitle is-5 muted">
              Mid-level full-stack engineer (3+ years) working across backend services,
              APIs, and user-facing applications — focused on performance, reliability,
              and shipping outcomes.
            </p>

            <div className="buttons mt-4">
              <a className="button is-accent" href="#projects">
                View Projects
              </a>
              <a
                className="button is-accent-outline"
                href="https://linkedin.com/in/mayte-ramirez-calderon"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="button is-light" href="mailto:ramirezcmayte@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-6">
        <h2 className="title is-3 section-title">About</h2>
        <div className="soft-card p-5">
          <p className="muted">
            I’m a full-stack engineer currently working at Red Ventures, where I build
            and scale production systems used across multiple business units and
            high-traffic applications. I care deeply about product impact, clean
            architecture, and collaborating closely with product and stakeholders to
            ship meaningful features.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="py-6">
        <h2 className="title is-3 section-title">Work Highlights</h2>
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="soft-card p-5">
              <p className="section-title">Performance & Scale</p>
              <p className="muted">
                Led a DynamoDB schema migration for 100+ entities, eliminating full table
                scans and improving page load times by 130×.
              </p>
            </div>
          </div>

          <div className="column is-6">
            <div className="soft-card p-5">
              <p className="section-title">End-to-End Ownership</p>
              <p className="muted">
                Built full-stack features across backend services, APIs, and UI —
                partnering with product from discovery through launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (placeholder for now) */}
      <section id="projects" className="py-6">
        <h2 className="title is-3 section-title">Projects</h2>
        <div className="soft-card p-5">
          <p className="muted">
            Personal projects coming soon — this section will highlight user-focused
            applications, dashboards, and automation tools.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-6">
        <h2 className="title is-3 section-title">Skills</h2>
        <div className="soft-card p-5">
          <div className="columns is-multiline">
            <div className="column is-6">
              <p className="section-title">Languages</p>
              <p className="muted">TypeScript, JavaScript, Go, Python, SQL</p>
            </div>
            <div className="column is-6">
              <p className="section-title">Frameworks</p>
              <p className="muted">Node.js, Express, Vue.js, React</p>
            </div>
            <div className="column is-6">
              <p className="section-title">Cloud & Data</p>
              <p className="muted">AWS, DynamoDB, data modeling</p>
            </div>
            <div className="column is-6">
              <p className="section-title">Dev Experience</p>
              <p className="muted">CI/CD, RFCs, code reviews, AI-assisted workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-6 mb-6">
        <h2 className="title is-3 section-title">Contact</h2>
        <div className="soft-card p-5">
          <p className="muted">
            I’m always open to roles where I can own meaningful work and build products
            that genuinely help users.
          </p>

          <div className="buttons mt-4">
            <a className="button is-accent" href="mailto:ramirezcmayte@gmail.com">
              Email
            </a>
            <a
              className="button is-accent-outline"
              href="https://linkedin.com/in/mayte-ramirez-calderon"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button is-light"
              href="https://github.com/maytexramirez"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="has-text-centered muted pb-6">
        <small>© {new Date().getFullYear()} Mayte Ramirez-Calderon</small>
      </footer>
    </div>
  );
}
