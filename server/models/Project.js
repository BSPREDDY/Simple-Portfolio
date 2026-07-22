const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    img: { type: String, required: true },
    liveUrl: { type: String },
    githubUrl: { type: String },
    tags: [{ type: String }],
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
