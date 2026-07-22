require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Qualification = require('./models/Qualification');
const Service = require('./models/Service');
const { initialData } = require('./controllers/portfolioController');

const seedDatabase = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/surya_portfolio';
    await mongoose.connect(connStr);
    console.log('Connected to MongoDB for database seeding...');

    await Project.deleteMany({});
    await Qualification.deleteMany({});
    await Service.deleteMany({});

    await Project.insertMany(
      initialData.projects.map((p, idx) => ({ ...p, order: idx + 1 }))
    );

    const qualificationsToInsert = [
      ...initialData.qualifications.experience.map((q, idx) => ({
        ...q,
        type: 'experience',
        order: idx + 1,
      })),
      ...initialData.qualifications.education.map((q, idx) => ({
        ...q,
        type: 'education',
        order: idx + 1,
      })),
    ];
    await Qualification.insertMany(qualificationsToInsert);

    await Service.insertMany(
      initialData.services.map((s, idx) => ({ ...s, order: idx + 1 }))
    );

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
