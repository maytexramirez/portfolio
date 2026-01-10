import React, { useMemo } from "react";

export default function CaseStudyCard({ study, isOpen, onToggle }) {
  const contentId = useMemo(() => `case-study-${study.id}`, [study.id]);

  return (
    <div className="soft-card p-5 mb-4">
      <button
        type="button"
        className="case-toggle"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div>
          <p className="title is-5 section-title mb-1">{study.title}</p>
          <p className="muted mb-2">{study.subtitle}</p>
          <div className="tags">
            {study.tags.map((t) => (
              <span className="tag is-accent" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <span className="case-chevron" aria-hidden="true">
          {isOpen ? "▾" : "▸"}
        </span>
      </button>

      <div
        id={contentId}
        className={`case-body ${isOpen ? "is-open" : ""}`}
      >
        <div className="case-grid mt-4">
          <div>
            <p className="section-title mb-2">Problem</p>
            <p className="muted">{study.problem}</p>
          </div>

          <div>
            <p className="section-title mb-2">What I did</p>
            <ul className="muted">
              {study.whatIDid.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-title mb-2">Outcome</p>
            <ul className="muted">
              {study.outcome.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
