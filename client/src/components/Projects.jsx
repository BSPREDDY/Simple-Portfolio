import React from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';

const Projects = ({ data }) => {
  const projects = data || [
    {
      title: 'BGMI Rooms Management',
      subtitle: 'Tournament Management Web Platform',
      description:
        'This application is a tournament management web platform designed to organize and manage online gaming tournaments (such as BGMI). It allows users to register teams, view schedules, check rules, and track participation. Built with a modern full-stack using Next.js and TypeScript on the frontend, PostgreSQL with Drizzle ORM for type-safe database management, and Tailwind CSS for a sleek, responsive UI.',
      img: '/public/image.png',
      liveUrl: 'https://bgmirooms.vercel.app/',
      githubUrl: 'https://github.com/BSPREDDY/Tournament',
      tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'TypeScript'],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Recent Work</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
          }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <div
              key={project._id || index}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  backgroundColor: '#0a0c10',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '8px',
                  }}
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(10, 12, 16, 0.85)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'background-color 0.2s ease',
                      }}
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(10, 12, 16, 0.85)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textDecoration: 'none',
                      }}
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Details Content */}
              <div
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '16px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '4px',
                    }}
                  >
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <div style={{ fontSize: '0.85rem', color: '#1e90ff', fontWeight: 600 }}>
                      {project.subtitle}
                    </div>
                  )}
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                {project.tags && project.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '8px' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          color: '#cbd5e1',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#1e90ff',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                      }}
                    >
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#94a3b8',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                      }}
                    >
                      View Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
