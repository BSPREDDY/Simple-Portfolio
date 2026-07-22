const mongoose = require('mongoose');

const QualificationSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['experience', 'education'], required: true },
    title: { type: String, required: true },
    institution: { type: String },
    description: { type: String },
    date: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Qualification', QualificationSchema);
