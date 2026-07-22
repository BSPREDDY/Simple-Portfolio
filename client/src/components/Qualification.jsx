import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Download } from 'lucide-react';

const Qualification = ({ data }) => {
  const [activeTab, setActiveTab] = useState('experience');

  const qualifications = data || {
    experience: [
      {
        title: 'Freelance Web Developer',
        institution: 'Self-Employed',
        description:
          'Building custom websites and web applications for clients, focusing on responsive design, high performance, and user satisfaction.',
        date: 'Currently from 2025',
      },
    ],
    education: [
      {
        title: "Bachelor's in Computer Science",
        institution: 'Vignan University',
        description: 'Graduated in 2025.',
        date: 'Completed in 2025',
      },
      {
        title: 'Intermediate (MPC)',
        institution: 'NRI Junior College',
        description: 'Mathematics, Physics, Chemistry.',
        date: 'Completed in 2021',
      },
      {
        title: 'Secondary Schooling',
        institution: 'Gitams High School',
        description: 'Foundational Studies.',
        date: 'Completed in 2019',
      },
    ],
  };

  const currentList = activeTab === 'experience' ? qualifications.experience : qualifications.education;

  return (
    <section id="qualification" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Experience & Education</span>
          <h2 className="section-title">Qualification</h2>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <button
            onClick={() => setActiveTab('experience')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: activeTab === 'experience' ? '#1e90ff' : 'var(--color-bg-card)',
              color: activeTab === 'experience' ? '#ffffff' : 'var(--color-text-muted)',
              boxShadow: activeTab === 'experience' ? '0 4px 15px rgba(30, 144, 255, 0.35)' : 'none',
            }}
          >
            <Briefcase size={18} /> Experience
          </button>

          <button
            onClick={() => setActiveTab('education')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: activeTab === 'education' ? '#1e90ff' : 'var(--color-bg-card)',
              color: activeTab === 'education' ? '#ffffff' : 'var(--color-text-muted)',
              boxShadow: activeTab === 'education' ? '0 4px 15px rgba(30, 144, 255, 0.35)' : 'none',
            }}
          >
            <GraduationCap size={18} /> Education
          </button>
        </div>

        {/* Timeline View */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {currentList.map((item, index) => (
              <div
                key={item._id || index}
                className="glass-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  position: 'relative',
                  borderLeft: '4px solid #1e90ff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      color: '#1e90ff',
                      fontWeight: 600,
                    }}
                  >
                    <Calendar size={14} /> {item.date}
                  </div>
                </div>

                {item.institution && (
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#32a852' }}>
                    {item.institution}
                  </div>
                )}

                {item.description && (
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '48px',
              padding: '24px',
              backgroundColor: 'var(--color-bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--color-border)',
            }}
          >
            <p style={{ color: '#94a3b8', marginBottom: '16px' }}>Want to review my complete qualifications & credentials?</p>
            <a href="/assets/Surya_Resume.pdf" download className="btn btn-primary">
              <Download size={18} /> Download Full Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
