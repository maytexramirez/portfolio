export const caseStudies = [
  {
    id: "flags",
    title: "Controlled releases with feature flags",
    subtitle: "Faster deployments + safer rollouts + product autonomy",
    tags: ["Feature flags", "Full stack", "CI/CD", "Product delivery"],
    problem:
      "Shipping changes directly to production increased release risk and often required engineering involvement for timing and rollout coordination.",
    whatIDid: [
      "Owned planning, scoping, implementation, end-to-end testing, and delivery for features across backend services, APIs, and UI.",
      "Implemented feature-flagged rollouts to decouple deployment from release, enabling iterative deployments while keeping features hidden until production-ready.",
      "Supported phased launches (limited user cohorts before full rollout) to validate behavior and reduce production risk.",
      "Enabled product managers to control release timing without requiring engineering involvement for every rollout."
    ],
    outcome: [
      "Faster deployment cycles with reduced release risk.",
      "More controlled launches through phased exposure and feedback.",
      "Improved cross-functional workflow by empowering PM-driven releases."
    ]
  },
  {
    id: "security",
    title: "Security remediation (Cycode dependency vulnerabilities)",
    subtitle: "Reduced risk by keeping dependencies secure and current",
    tags: ["Cycode", "Dependencies", "Security", "Jira", "CI/CD"],
    problem:
      "Automated compliance tooling regularly flagged dependency vulnerabilities that required timely remediation to reduce risk and maintain internal standards.",
    whatIDid: [
      "Reviewed Cycode alerts each sprint (Jira tickets automatically created) and prioritized high/critical vulnerabilities within the two-week sprint cycle.",
      "Upgraded vulnerable dependencies, validated changes through build/test pipelines, and deployed remediations."
    ],
    outcome: [
      "Reduced exposure to known vulnerabilities through consistent remediation.",
      "Maintained secure delivery practices without blocking feature development."
    ]
  },
  {
    id: "platform-support",
    title: "Internal platform ownership + support",
    subtitle: "Docs, enablement, and responsive user support at scale",
    tags: ["Internal tooling", "Docs", "Stakeholders", "Support", "Ownership"],
    problem:
      "As an internal product team serving multiple business units, teams relied on our tooling for day-to-day work and needed quick support and clear guidance.",
    whatIDid: [
      "Built and maintained internal tools used across Red Ventures businesses, partnering closely with product and stakeholders.",
      "Authored detailed documentation (including step-by-step guidance and visuals) to support adoption and reduce friction for users.",
      "Managed a support channel and responded promptly to user questions and bug reports (60+ support requests handled over tenure)."
    ],
    outcome: [
      "Improved adoption and self-serve enablement through clearer documentation.",
      "Faster issue resolution and stronger trust with internal users."
    ]
  }
];
