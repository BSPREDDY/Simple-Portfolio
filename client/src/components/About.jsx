import React from 'react';
import { Server, Layout, Database, Terminal, Code, Cpu } from 'lucide-react';

const About = ({ data }) => {
  const aboutData = data || {
    title: 'I’m a Web Developer with hands-on experience in building websites and web applications.',
    description:
      'I focus on creating simple, user-friendly, and efficient web solutions that meet user needs. I enjoy learning new technologies and improving my skills to stay updated in the tech field. I like solving problems, taking on new challenges, and working with teams to build better digital products.',
    skills: {
      frontend: ['React.js', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js'],
      databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Drizzle ORM'],
      tools: ['Docker', 'Terraform', 'Git & GitHub'],
    },
  };

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Who am I</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Bio text */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: 1.4,
              }}
            >
              {aboutData.title}
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1rem', marginBottom: '28px' }}>
              {aboutData.description}
            </p>

            <a href="#projects" className="btn btn-primary" style={{ padding: '12px 24px' }}>
              Know More About My Work
            </a>
          </div>

          {/* Skills Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Frontend Skills Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    padding: '8px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(30, 144, 255, 0.15)',
                    color: '#1e90ff',
                  }}
                >
                  <Layout size={20} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Frontend
                </h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {aboutData.skills.frontend.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#f0f4f8',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    padding: '8px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(50, 168, 82, 0.15)',
                    color: '#32a852',
                  }}
                >
                  <Server size={20} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Backend
                </h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {aboutData.skills.backend.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(50, 168, 82, 0.08)',
                      border: '1px solid rgba(50, 168, 82, 0.2)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#32a852',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Databases Skills Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    padding: '8px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(138, 43, 226, 0.15)',
                    color: '#8a2be2',
                  }}
                >
                  <Database size={20} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Databases & ORM
                </h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {aboutData.skills.databases.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(138, 43, 226, 0.08)',
                      border: '1px solid rgba(138, 43, 226, 0.2)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#b57bee',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & DevOps Skills Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    padding: '8px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 165, 0, 0.15)',
                    color: '#ffa500',
                  }}
                >
                  <Terminal size={20} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Tools & DevOps
                </h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {aboutData.skills.tools.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 165, 0, 0.08)',
                      border: '1px solid rgba(255, 165, 0, 0.2)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#ffa500',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
