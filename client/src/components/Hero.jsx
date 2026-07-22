import React, { useState, useEffect } from 'react';
import { Mail, Download, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const Hero = ({ data }) => {
  const heroData = data || {
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
  };

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

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Content Left */}
          <div>
            <div
              className="badge"
              style={{ marginBottom: '20px', display: 'inline-flex', gap: '8px' }}
            >
              <Sparkles size={16} /> Welcome to my Portfolio
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3.2rem',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '16px',
                color: '#ffffff',
              }}
            >
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
            <div
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                height: '42px',
                color: '#1e90ff',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <span>{displayedText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '28px',
                  backgroundColor: '#1e90ff',
                  marginLeft: '4px',
                  animation: 'pulseGlow 1s infinite',
                }}
              />
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                marginBottom: '32px',
                maxWidth: '600px',
                lineHeight: 1.7,
              }}
            >
              {heroData.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <a href={`mailto:${heroData.email}`} className="btn btn-primary">
                <Mail size={18} /> Hire Me!
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="/assets/Surya_Resume.pdf"
                download
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(50, 168, 82, 0.4)', color: '#32a852' }}
              >
                <Download size={18} /> Resume
              </a>
            </div>

            {/* Stats Card */}
            <div
              style={{
                display: 'flex',
                gap: '32px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {heroData.projectsCompleted}+
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Projects Completed</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '32px' }}>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  2025
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>CS Graduate</div>
              </div>
            </div>
          </div>

          {/* Avatar Image Right */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '1/1',
                borderRadius: '30px',
                padding: '12px',
                background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.3), rgba(50, 168, 82, 0.3))',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src="/public/profile.jpg"
                alt={heroData.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '22px',
                  backgroundColor: '#12161f',
                }}
              />
              {/* Floating tech badge */}
              <div
                className="floating-anim glass-card"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '16px',
                }}
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
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
