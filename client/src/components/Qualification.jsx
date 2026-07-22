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
        <div className="qual-tabs">
          {[
            { id: 'experience', label: 'Experience', Icon: Briefcase },
            { id: 'education', label: 'Education', Icon: GraduationCap },
          ].map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`qual-tab-btn ${activeTab === id ? 'qual-tab-active' : ''}`}
            >
              <Icon size={18} /> {label}
            </button>
          ))}
        </div>

        {/* Timeline View */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {currentList.map((item, index) => (
              <div
                key={item._id || index}
                className="glass-card qual-item"
              >
                <div className="qual-item-header">
                  <h3 className="qual-item-title">{item.title}</h3>
                  <div className="qual-item-date">
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
            <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
              Want to review my complete qualifications & credentials?
            </p>
            <a href="/assets/Surya_Resume.pdf" download className="btn btn-primary">
              <Download size={18} /> Download Full Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .qual-tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .qual-tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: var(--color-bg-card);
          color: var(--color-text-muted);
          font-family: var(--font-primary);
        }
        .qual-tab-active {
          background-color: #1e90ff !important;
          color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(30, 144, 255, 0.35);
        }
        .qual-item {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-left: 4px solid #1e90ff;
        }
        .qual-item-header {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          align-items: flex-start;
        }
        .qual-item-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }
        .qual-item-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: #1e90ff;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .qual-tabs {
            gap: 10px;
          }
          .qual-tab-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          .qual-item {
            padding: 20px 16px;
          }
          .qual-item-title {
            font-size: 1.05rem;
          }
        }
        @media (max-width: 400px) {
          .qual-tab-btn {
            padding: 9px 16px;
            font-size: 0.85rem;
            gap: 7px;
          }
          .qual-item-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Qualification;
