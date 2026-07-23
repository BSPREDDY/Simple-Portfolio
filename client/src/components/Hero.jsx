import React, { useState, useEffect } from 'react';
import { Mail, Download, ArrowRight, Sparkles, CheckCircle2, Linkedin, Github } from 'lucide-react';

const Hero = ({ data }) => {
  const defaultSocialLinks = {
    linkedin: 'https://www.linkedin.com/in/surya-prakash-reddy-bhavanam-125317287/',
    github: 'https://github.com/BSPREDDY',
    email: 'mailto:suryaprakashbhavanam@gmail.com',
    whatsapp: 'https://api.whatsapp.com/send?phone=6302098876&app=facebook&entry_point=page_cta',
    instagram: 'https://www.instagram.com/_surya_prakash_reddy_28',
  };

  const heroData = {
    name: 'Surya Prakash Reddy',
    typewriterRoles: [
      'Full Stack MERN Developer',
      'React.js Specialist',
      'Node.js & Express Engineer',
      'Computer Science Graduate 🎓',
    ],
    description:
      'Passionate Web Developer and Computer Science graduate (2025) skilled in building modern, responsive full-stack web applications with React, Node.js, Express, and MongoDB.',
    projectsCompleted: 1,
    email: 'suryaprakashbhavanam@gmail.com',
    socialLinks: defaultSocialLinks,
    ...(data || {}),
  };

  const socialLinks = { ...defaultSocialLinks, ...(heroData.socialLinks || {}) };

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = heroData.typewriterRoles || ['Full Stack Developer'];
    const currentRole = roles[roleIndex % roles.length];
    let timer;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, heroData.typewriterRoles]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30, 144, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(50, 168, 82, 0.12) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid">
          {/* Content Left */}
          <div className="hero-content">
            <div
              className="badge"
              style={{ marginBottom: '20px', display: 'inline-flex', gap: '8px' }}
            >
              <Sparkles size={16} /> Welcome to my Portfolio
            </div>

            <h1 className="hero-title">
              Hi, I am <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {heroData.name}
              </span>
            </h1>

            {/* Typewriter text */}
            <div className="hero-typewriter">
              <span>{displayedText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '24px',
                  backgroundColor: '#1e90ff',
                  marginLeft: '4px',
                  animation: 'pulseGlow 1s infinite',
                  verticalAlign: 'middle',
                }}
              />
            </div>

            <p className="hero-description">{heroData.description}</p>

            <div className="hero-buttons">
              <a href={`mailto:${heroData.email}`} className="btn btn-primary">
                <Mail size={18} /> Hire Me!
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  borderColor: 'rgba(0, 119, 181, 0.5)',
                  color: '#0077b5',
                  backgroundColor: 'rgba(0, 119, 181, 0.1)',
                }}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects <ArrowRight size={18} />
              </a>
            </div>

            {/* Stats Card */}
            <div className="hero-stats">
              <div>
                <div className="hero-stat-number">{heroData.projectsCompleted}+</div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '32px' }}>
                <div className="hero-stat-number">2025</div>
                <div className="hero-stat-label">CS Graduate</div>
              </div>
            </div>
          </div>

          {/* Avatar Image Right */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-frame">
              <img
                src="/profile.jpg"
                alt={heroData.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '22px',
                  backgroundColor: '#12161f',
                  display: 'block',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.style.background =
                    'linear-gradient(135deg, rgba(30,144,255,0.3), rgba(50,168,82,0.3))';
                }}
              />
              {/* Floating tech badge */}
              <div
                className="floating-anim glass-card hero-floating-badge"
              >
                <CheckCircle2 size={24} color="#32a852" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Available for Work</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Full Stack & Frontend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 16px;
          color: #ffffff;
        }
        .hero-typewriter {
          font-size: 1.6rem;
          font-weight: 700;
          min-height: 42px;
          color: #1e90ff;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .hero-description {
          font-size: 1.05rem;
          color: #94a3b8;
          margin-bottom: 32px;
          max-width: 600px;
          line-height: 1.7;
        }
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-bottom: 40px;
        }
        .hero-stats {
          display: flex;
          gap: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
        }
        .hero-stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          font-family: var(--font-heading);
        }
        .hero-stat-label {
          font-size: 0.85rem;
          color: #64748b;
        }
        .hero-avatar-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero-avatar-frame {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 1/1;
          border-radius: 30px;
          padding: 12px;
          background: linear-gradient(135deg, rgba(30, 144, 255, 0.3), rgba(50, 168, 82, 0.3));
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }
        .hero-floating-badge {
          position: absolute;
          bottom: -20px;
          left: -20px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 16px;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-title {
            font-size: 2.6rem;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
          }
          .hero-avatar-wrapper {
            order: -1;
          }
          .hero-avatar-frame {
            max-width: 300px;
          }
          .hero-floating-badge {
            bottom: -16px;
            left: -10px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-typewriter {
            font-size: 1.25rem;
            min-height: 34px;
          }
          .hero-description {
            font-size: 0.95rem;
          }
          .hero-stat-number {
            font-size: 1.6rem;
          }
          .hero-avatar-frame {
            max-width: 260px;
          }
          .hero-floating-badge {
            padding: 8px 14px;
            gap: 8px;
          }
        }

        /* Extra small */
        @media (max-width: 400px) {
          .hero-title {
            font-size: 1.75rem;
          }
          .hero-typewriter {
            font-size: 1.1rem;
          }
          .hero-buttons {
            gap: 10px;
          }
          .hero-stats {
            gap: 20px;
          }
          .hero-stats > div:last-child {
            padding-left: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
