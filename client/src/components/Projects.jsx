import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = ({ data }) => {
  const projects = data || [
    {
      title: 'BGMI Rooms Management',
      subtitle: 'Tournament Management Web Platform',
      description:
        'This application is a tournament management web platform designed to organize and manage online gaming tournaments (such as BGMI). It allows users to register teams, view schedules, check rules, and track participation. Built with a modern full-stack using Next.js and TypeScript on the frontend, PostgreSQL with Drizzle ORM for type-safe database management, and Tailwind CSS for a sleek, responsive UI.',
      img: '/assets/img/bgmi.png',
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

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project._id || index}
              className="glass-card project-card"
            >
              {/* Image Preview Container */}
              <div className="project-img-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.background =
                      'linear-gradient(135deg, #12161f, #1e293b)';
                  }}
                />
                <div className="project-img-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-img-btn"
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
                      className="project-img-btn"
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Details Content */}
              <div className="project-details">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <div style={{ fontSize: '0.85rem', color: '#1e90ff', fontWeight: 600, marginTop: '4px' }}>
                      {project.subtitle}
                    </div>
                  )}
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Tech tags */}
                {project.tags && project.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '8px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link project-action-primary"
                    >
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link project-action-secondary"
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
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
        .project-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .project-img-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          background-color: #0a0c10;
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .project-img-actions {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          gap: 8px;
        }
        .project-img-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(10, 12, 16, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .project-img-btn:hover {
          background-color: rgba(30, 144, 255, 0.8);
        }
        .project-details {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 14px;
        }
        .project-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }
        .project-desc {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.6;
          flex-grow: 1;
        }
        .project-tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          background-color: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .project-actions {
          display: flex;
          gap: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }
        .project-action-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .project-action-link:hover { opacity: 0.75; }
        .project-action-primary { color: #1e90ff; }
        .project-action-secondary { color: #94a3b8; }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-img-wrapper {
            height: 200px;
          }
          .project-details {
            padding: 20px 18px;
          }
        }
        @media (max-width: 400px) {
          .project-img-wrapper {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
