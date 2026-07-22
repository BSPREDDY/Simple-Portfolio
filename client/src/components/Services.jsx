import React from 'react';
import { Layout, Code2, FileSpreadsheet, Check } from 'lucide-react';

const Services = ({ data }) => {
  const services = data || [
    {
      title: 'Front-End Development',
      description:
        'Creating responsive, pixel-perfect, and interactive user interfaces using modern web technologies like React, Tailwind, and CSS modules.',
      icon: 'layout',
      color: '#1e90ff',
    },
    {
      title: 'Full-Stack Projects',
      description:
        'Developing end-to-end web applications with robust Node.js/Express REST APIs and MongoDB databases.',
      icon: 'code',
      color: '#32a852',
    },
    {
      title: 'MS Office & Data Services',
      description:
        'Expertise in MS Word, Excel, PowerPoint, and Power BI for business productivity and data analytics solutions.',
      icon: 'file-text',
      color: '#8a2be2',
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'layout':
        return <Layout size={36} />;
      case 'code':
        return <Code2 size={36} />;
      default:
        return <FileSpreadsheet size={36} />;
    }
  };

  const getIconBg = (color) => {
    if (color === '#1e90ff') return 'rgba(30, 144, 255, 0.15)';
    if (color === '#32a852') return 'rgba(50, 168, 82, 0.15)';
    if (color === '#8a2be2') return 'rgba(138, 43, 226, 0.15)';
    return 'rgba(255, 255, 255, 0.1)';
  };

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service._id || index}
              className="glass-card services-card"
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: getIconBg(service.color),
                  color: service.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  flexShrink: 0,
                }}
              >
                {getIcon(service.icon)}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {service.title}
              </h3>

              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', flexGrow: 1 }}>
                {service.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <Check size={16} color={service.color} /> Clean & Maintainable Code
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <Check size={16} color={service.color} /> Responsive Layouts
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }
        .services-card {
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .services-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
