const mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const StudentSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },

    fullname: {
      type: String,
      required: [true, 'Must enter a full name'],
      minLength: [3, 'full name should be more than 3 characters'],
      maxLength: [60, 'Full name should be less than 60 characters'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, 'email must be unique'],
      required: 'email address is required',
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },

    password: {
      type: String,
      minLength: [6, 'Password must be more than 6 characters'],
      maxLength: [25, 'Password is too long'],
    },
  },
  { _id: false }
);
StudentSchema.plugin(AutoIncrement);
const StudentModel = mongoose.model('student', StudentSchema);

module.exports = StudentModel;
