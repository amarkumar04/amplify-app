import React, { useState } from 'react';
import './App.css';

const NAV_ITEMS = ['Home', 'About', 'Services', 'Contact'];

function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⬡</span>
            <span className="logo-text">MyApp</span>
          </div>
          <nav className="nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                className={`nav-item ${activeNav === item ? 'active' : ''}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="main">
        <section className="hero">
          <div className="hero-badge">🚀 Deployed via AWS Amplify + CloudFront</div>
          <h1 className="hero-title">
            Build Fast.<br />
            <span className="gradient-text">Deploy Faster.</span>
          </h1>
          <p className="hero-subtitle">
            React app hosted on AWS Amplify, served globally via CloudFront CDN
            with automated cache invalidation on every deploy.
          </p>

          <div className="counter-card">
            <p className="counter-label">Interactive Counter</p>
            <div className="counter-display">{count}</div>
            <div className="counter-buttons">
              <button className="btn btn-secondary" onClick={() => setCount(c => c - 1)}>−</button>
              <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>+</button>
              <button className="btn btn-ghost" onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="features">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Deployed on <strong>AWS Amplify</strong> · CDN via <strong>CloudFront</strong> · IaC with <strong>Terraform</strong></p>
      </footer>
    </div>
  );
}

const FEATURES = [
  {
    icon: '⚡',
    title: 'AWS Amplify Hosting',
    desc: 'CI/CD pipeline with GitHub integration. Auto-build on every push to main branch.',
  },
  {
    icon: '🌐',
    title: 'CloudFront CDN',
    desc: 'Global edge distribution with custom cache policies and HTTPS enforcement.',
  },
  {
    icon: '🔄',
    title: 'Cache Invalidation',
    desc: 'Automatic CloudFront invalidation on every Amplify deployment via Lambda hook.',
  },
  {
    icon: '🏗️',
    title: 'Terraform IaC',
    desc: 'Fully modularized Terraform for Amplify and CloudFront. Reusable across envs.',
  },
];

export default App;
