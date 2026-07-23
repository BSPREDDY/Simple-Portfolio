const Project = require('../models/Project');
const Qualification = require('../models/Qualification');
const Service = require('../models/Service');
const Contact = require('../models/Contact');
const { getDBStatus } = require('../config/db');

const initialData = {
  hero: {
    name: 'Surya Prakash Reddy',
    typewriterRoles: [
      'Full Stack Developer',
      'React & Node.js Specialist',
      'Software Engineer',
      'Creative Problem Solver',
    ],
    description:
      '🌟 Passionate Web Developer and Computer Science graduate (2025) 🎓 with an interest in building simple, useful, and user-friendly websites and web applications 💻. Skilled in programming and developing responsive, attractive, and functional web solutions 🌐.',
    projectsCompleted: 2,
    email: 'suryaprakashbhavanam@gmail.com',
    resumeUrl: '/assets/Surya_Resume.pdf',
    socialLinks: {
      email: 'mailto:suryaprakashbhavanam@gmail.com',
      whatsapp:
        'https://api.whatsapp.com/send?phone=6302098876&app=facebook&entry_point=page_cta',
      instagram: 'https://www.instagram.com/_surya_prakash_reddy_28',
      linkedin: 'https://www.linkedin.com/in/surya-prakash-reddy-bhavanam-125317287/',
      github: 'https://github.com/BSPREDDY',
    },
  },
  about: {
    title: 'I’m a Web Developer with hands-on experience in building websites and web applications.',
    description:
      'I focus on creating simple, user-friendly, and efficient web solutions that meet user needs. I enjoy learning new technologies and improving my skills to stay updated in the tech field. I like solving problems, taking on new challenges, and working with teams to build better digital products.',
    skills: {
      frontend: ['React.js', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js'],
      databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Drizzle ORM'],
      cloud: ['Vercel', 'Netlify', 'Cloudflare', 'AWS'],
      aiTools: ['Claude', 'ChatGPT', 'v0.dev'],
      tools: ['Docker', 'Terraform', 'Git & GitHub'],
    },
  },
  projects: [
    {
      _id: 'proj1',
      title: 'BGMI Rooms Management',
      subtitle: 'Tournament Management Web Platform',
      description:
        'This application is a tournament management web platform designed to organize and manage online gaming tournaments (such as BGMI). It allows users to register teams, view schedules, check rules, and track participation. Built with a modern full-stack using Next.js and TypeScript on the frontend, PostgreSQL with Drizzle ORM for type-safe database management, and Tailwind CSS for a sleek, responsive UI.',
      img: '/assets/img/bgmi.png',
      liveUrl: 'https://bgmirooms.vercel.app/',
      githubUrl: 'https://github.com/BSPREDDY/Tournament',
      tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'TypeScript'],
    },
  ],
  services: [
    {
      _id: 'serv1',
      title: 'Front-End Development',
      description:
        'Creating responsive, pixel-perfect, and interactive user interfaces using modern web technologies like React.',
      icon: 'layout',
      color: '#1e90ff',
    },
    {
      _id: 'serv2',
      title: 'Full-Stack Projects',
      description:
        'Developing end-to-end web applications with robust Node.js/Express REST APIs and MongoDB databases.',
      icon: 'code',
      color: '#32a852',
    },
    {
      _id: 'serv3',
      title: 'MS Office & Business Productivity',
      description:
        'Expertise in MS Word, Excel, PowerPoint, and Power BI for data visualization and business solutions.',
      icon: 'file-text',
      color: '#8a2be2',
    },
  ],
  qualifications: {
    experience: [
      {
        _id: 'exp1',
        title: 'Freelance Web Developer',
        institution: 'Self-Employed',
        description:
          'Building custom websites and web applications for clients, focusing on responsive design, high performance, and user satisfaction.',
        date: 'Currently from 2025',
      },
    ],
    education: [
      {
        _id: 'edu1',
        title: "Bachelor's in Computer Science",
        institution: 'Vignan University',
        description: 'Focused on Data Structures, Web Technologies, Software Engineering, and Database Management Systems.',
        date: 'Completed in 2025',
      },
      {
        _id: 'edu2',
        title: 'Intermediate (MPC)',
        institution: 'NRI Junior College',
        description: 'Mathematics, Physics, and Chemistry curriculum.',
        date: 'Completed in 2021',
      },
      {
        _id: 'edu3',
        title: 'Secondary Schooling',
        institution: 'Gitams High School',
        description: 'Foundational education and STEM coursework.',
        date: 'Completed in 2019',
      },
    ],
  },
};

// GET /api/portfolio
const getPortfolioData = async (req, res) => {
  try {
    if (!getDBStatus()) {
      return res.json({ success: true, source: 'fallback', data: initialData });
    }

    const projects = await Project.find().sort({ order: 1 });
    const services = await Service.find().sort({ order: 1 });
    const qualifications = await Qualification.find().sort({ order: 1 });

    const experience = qualifications.filter((q) => q.type === 'experience');
    const education = qualifications.filter((q) => q.type === 'education');

    const responseData = {
      ...initialData,
      projects: projects.length ? projects : initialData.projects,
      services: services.length ? services : initialData.services,
      qualifications: {
        experience: experience.length ? experience : initialData.qualifications.experience,
        education: education.length ? education : initialData.qualifications.education,
      },
    };

    res.json({ success: true, source: 'mongodb', data: responseData });
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    res.json({ success: true, source: 'fallback', data: initialData });
  }
};

// POST /api/contact
const handleContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.',
      });
    }

    let savedContact = null;
    if (getDBStatus()) {
      savedContact = await Contact.create({
        name,
        email,
        subject: subject || 'Portfolio Contact Form Inquiry',
        message,
      });
    } else {
      console.log('Received Contact Form submission (DB offline fallback):', {
        name,
        email,
        subject,
        message,
        timestamp: new Date(),
      });
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.',
      data: savedContact || { name, email, subject, message },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact message. Please try again.',
    });
  }
};

module.exports = {
  getPortfolioData,
  handleContactForm,
  initialData,
};
