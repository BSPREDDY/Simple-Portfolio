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

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">Services</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={service._id || index}
              className="glass-card"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: `rgba(${
                    service.color === '#1e90ff' ? '30, 144, 255' : service.color === '#32a852' ? '50, 168, 82' : '138, 43, 226'
                  }, 0.15)`,
                  color: service.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                }}
              >
                {getIcon(service.icon)}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {service.title}
              </h3>

              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {service.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto', paddingTop: '16px' }}>
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
    </section>
  );
};

export default Services;
