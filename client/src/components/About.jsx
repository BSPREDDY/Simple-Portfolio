import React from 'react';
import { Server, Layout, Database, Terminal } from 'lucide-react';

const About = ({ data }) => {
  const aboutData = data || {
    title: "I'm a Web Developer with hands-on experience in building websites and web applications.",
    description:
      'I focus on creating simple, user-friendly, and efficient web solutions that meet user needs. I enjoy learning new technologies and improving my skills to stay updated in the tech field. I like solving problems, taking on new challenges, and working with teams to build better digital products.',
    skills: {
      frontend: ['React.js', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js'],
      databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Drizzle ORM'],
      tools: ['Docker', 'Terraform', 'Git & GitHub'],
    },
  };

  const skillCategories = [
    {
      label: 'Frontend',
      icon: <Layout size={20} />,
      items: aboutData.skills.frontend,
      bg: 'rgba(30, 144, 255, 0.15)',
      color: '#1e90ff',
      chipBg: 'rgba(255, 255, 255, 0.05)',
      chipBorder: 'rgba(255, 255, 255, 0.08)',
      chipColor: '#f0f4f8',
    },
    {
      label: 'Backend',
      icon: <Server size={20} />,
      items: aboutData.skills.backend,
      bg: 'rgba(50, 168, 82, 0.15)',
      color: '#32a852',
      chipBg: 'rgba(50, 168, 82, 0.08)',
      chipBorder: 'rgba(50, 168, 82, 0.2)',
      chipColor: '#32a852',
    },
    {
      label: 'Databases & ORM',
      icon: <Database size={20} />,
      items: aboutData.skills.databases,
      bg: 'rgba(138, 43, 226, 0.15)',
      color: '#8a2be2',
      chipBg: 'rgba(138, 43, 226, 0.08)',
      chipBorder: 'rgba(138, 43, 226, 0.2)',
      chipColor: '#b57bee',
    },
    {
      label: 'Tools & DevOps',
      icon: <Terminal size={20} />,
      items: aboutData.skills.tools,
      bg: 'rgba(255, 165, 0, 0.15)',
      color: '#ffa500',
      chipBg: 'rgba(255, 165, 0, 0.08)',
      chipBorder: 'rgba(255, 165, 0, 0.2)',
      chipColor: '#ffa500',
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Who am I</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Bio text */}
          <div className="glass-card about-bio-card">
            <h3 className="about-bio-title">{aboutData.title}</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1rem', marginBottom: '28px' }}>
              {aboutData.description}
            </p>
            <a href="#projects" className="btn btn-primary" style={{ padding: '12px 24px' }}>
              Know More About My Work
            </a>
          </div>

          {/* Skills Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {skillCategories.map((cat) => (
              <div key={cat.label} className="glass-card" style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '10px',
                      backgroundColor: cat.bg,
                      color: cat.color,
                      flexShrink: 0,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    {cat.label}
                  </h4>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.items.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        padding: '5px 11px',
                        borderRadius: '8px',
                        backgroundColor: cat.chipBg,
                        border: `1px solid ${cat.chipBorder}`,
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        color: cat.chipColor,
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .about-bio-card {
          padding: 36px;
        }
        .about-bio-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        @media (max-width: 480px) {
          .about-bio-card {
            padding: 24px 20px;
          }
          .about-bio-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
