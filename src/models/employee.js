import mongoose from 'mongoose';

export const Employee = mongoose.model('Employee', {
  hireDate: {
    type: String,
    required: true,
  },
  resignDate: {
    type: String,
    default: '',
  },
  idDocument: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  credential: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  averageTicket: {
    type: [Number],
    default: [],
  },
  averageShortage: {
    type: [Number],
    default: [],
  },
});
