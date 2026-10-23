import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const skills = [
  { title: 'Cloud', items: ['Google Cloud Platform', 'AWS', 'IAM & service accounts', 'Cloud Storage', 'Cloud SQL', 'BigQuery'] },
  { title: 'DevOps & Delivery', items: ['Docker', 'Kubernetes / GKE', 'Helm', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD'] },
  { title: 'Automation', items: ['Terraform', 'Ansible', 'Python', 'Bash / Shell', 'CI/CD pipelines', 'Scheduled tasks'] },
  { title: 'IT Infrastructure', items: ['Linux', 'Windows Server', 'TCP/IP', 'DNS / DHCP', 'VPN & firewalls', 'Troubleshooting'] },
  { title: 'Development & Data', items: ['React', 'Vite', 'JavaScript', 'SQL', 'Firebase', 'REST API integration'] },
  { title: 'Operations & Security', items: ['Monitoring & logging', 'Backups', 'Least-privilege IAM', 'Audit logs', 'Cost awareness', 'Documentation'] },
];

const projects = [
  { number: '01', title: 'Cloud Infrastructure with Terraform', category: 'CLOUD · INFRASTRUCTURE AS CODE', description: 'A sample project for defining cloud resources as code, separating environments, documenting variables, and planning changes before deployment.', stack: ['Terraform', 'GCP or AWS', 'IAM'], repo: 'https://github.com/sachin2727p' },
  { number: '02', title: 'CI/CD Pipeline', category: 'AUTOMATION · DELIVERY', description: 'A demonstration pipeline that validates code, runs tests, builds an artifact, and documents a controlled deployment process.', stack: ['GitHub Actions', 'CI/CD', 'Testing'], repo: 'https://github.com/sachin2727p' },
  { number: '03', title: 'Docker & Kubernetes Deployment', category: 'CONTAINERS · PLATFORM', description: 'Containerize a small application and deploy it using Kubernetes manifests, with health checks and a clear local setup guide.', stack: ['Docker', 'Kubernetes', 'YAML'], repo: 'https://github.com/sachin2727p' },
  { number: '04', title: 'Responsive Website', category: 'WEB · FRONTEND', description: 'A responsive React and Vite website with accessible navigation, clear service information, and deployment instructions.', stack: ['React', 'Vite', 'CSS'], repo: 'https://github.com/sachin2727p/sachin-devops-portfolio' },
  { number: '05', title: 'Linux Administration Toolkit', category: 'SYSTEMS · SCRIPTING', description: 'A collection of documented scripts for basic system information, disk usage checks, service status, and log review. Review scripts before running them.', stack: ['Linux', 'Bash', 'Documentation'], repo: 'https://github.com/sachin2727p' },
  { number: '06', title: 'Cloud Data & Reporting Demo', category: 'DATA · SQL', description: 'A small sample dataset and SQL queries that demonstrate data validation, aggregation, and readable reporting without exposing real customer data.', stack: ['SQL', 'BigQuery concepts', 'CSV'], repo: 'https://github.com/sachin2727p' },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Sachin home">S<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="https://github.com/sachin2727p" target="_blank" rel="noreferrer">GitHub ↗</a>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> CLOUD · DEVOPS · IT · WEB</p>
            <h1>Building reliable systems.<br /><span>Automating what matters.</span></h1>
            <p className="hero-lede">I'm Sachin — a technology professional focused on cloud infrastructure, DevOps, IT operations, and practical web development.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <span>↘</span></a>
              <a className="button button-ghost" href="https://github.com/sachin2727p" target="_blank" rel="noreferrer">View GitHub ↗</a>
            </div>
            <div className="hero-tags"><span>Cloud & DevOps</span><span>IT Infrastructure</span><span>Web Development</span></div>
          </div>
          <div className="hero-visual" aria-label="Cloud and automation illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="core"><span>⌘</span><strong>SHIP</strong><small>BUILD · AUTOMATE · IMPROVE</small></div>
            <div className="float-card card-cloud"><span className="mini-icon">☁</span><div><b>Cloud</b><small>GCP · AWS</small></div></div>
            <div className="float-card card-code"><span className="mini-icon">&lt;/&gt;</span><div><b>Automation</b><small>CI/CD · IaC</small></div></div>
            <div className="float-card card-kube"><span className="mini-icon">◈</span><div><b>Containers</b><small>Docker · K8s</small></div></div>
            <div className="visual-label">PRACTICAL ENGINEERING <span>✳</span></div>
          </div>
          <div className="hero-index"><span>PORTFOLIO / 2026</span><span>01 — 04</span></div>
        </section>
        <section className="intro section" id="about">
          <div className="section-kicker"><span>01</span> / ABOUT</div>
          <div className="intro-content">
            <h2>Technology should be <em>reliable, secure,</em> and easier to operate.</h2>
            <div className="intro-description">
              <p>I enjoy connecting infrastructure, automation, and user-focused software. My portfolio brings together cloud and DevOps practice, systems administration, scripting, and web projects.</p>
              <p>Each project should include a clear README, setup instructions, screenshots where useful, and lessons learned. The examples below are starter project ideas—replace them with your own completed work.</p>
            </div>
          </div>
        </section>
        <section className="section skills-section" id="skills">
          <div className="section-heading"><div><div className="section-kicker"><span>02</span> / TOOLKIT</div><h2>Skills & <em>capabilities</em></h2></div><p>A practical toolkit across infrastructure, delivery, and development.</p></div>
          <div className="skills-grid">
            {skills.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-number">0{i + 1}</span><span className="skill-mark">{['☁','⌁','⌘','▤','〈/〉','◉'][i]}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}
          </div>
        </section>
        <section className="section projects-section" id="projects">
          <div className="section-heading"><div><div className="section-kicker"><span>03</span> / SELECTED WORK</div><h2>Projects in <em>practice</em></h2></div><p>Starter examples to help organize your future projects. Update each card to point to a real repository.</p></div>
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-card-head"><span>{project.number}</span><span className="project-arrow">↗</span></div>
              <p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
              <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </article>)}
          </div>
          <p className="note"><strong>Note:</strong> Some project cards point to your GitHub profile until you create separate repositories. Only mark projects as completed after you have built and tested them.</p>
        </section>
        <section className="contact-section" id="contact">
          <div className="section-kicker"><span>04</span> / LET'S CONNECT</div>
          <div className="contact-content"><h2>Have a project<br />or role in mind<span>?</span></h2><p>I'm interested in opportunities across cloud, DevOps, IT infrastructure, and web development.</p><div className="contact-actions"><a className="button button-primary" href="https://github.com/sachin2727p">GitHub profile ↗</a><a className="button button-ghost" href="mailto:">Add email in source</a></div></div>
          <div className="contact-foot"><span>SACHIN · PORTFOLIO</span><span>BUILT WITH REACT + VITE</span><a href="#home">BACK TO TOP ↑</a></div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
