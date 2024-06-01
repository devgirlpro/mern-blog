// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// const aboutmeSchema = new mongoose.Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
// const Aboutm = mongoose.model('aboutms', aboutmeSchema);
// module.exports = Aboutm;
