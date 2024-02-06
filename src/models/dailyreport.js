import mongoose from 'mongoose';

export const DailyReport = mongoose.model('DailyReport', {
  date: {
    type: String,
    unique: true,
  },
  sale: {
    type: Number,
    default: 0,
  },
  salesGoal: {
    type: Number,
    required: true,
  },
  transactions: {
    type: Number,
    default: 0,
  },
  transactionsGoal: {
    type: Number,
    required: true,
  },
  averageTicket: {
    type: Number,
    default: 0,
  },
  averageTicketGoal: {
    type: Number,
    required: true,
  },
  modifierPercentage: {
    type: Number,
    default: 0,
  },
  modifierPercentageGoal: {
    type: Number,
    required: true,
  },
  foodAttachPercentage: {
    type: Number,
    default: 0,
  },
  foodAttachPercentageGoal: {
    type: Number,
  },
  cashierShortage: {
    type: [
      {
        value: {
          type: Number,
          default: 0,
        },
        reason: {
          type: String,
          default: '',
        },
        cashierId: {
          type: String,
          required: true,
        },
        storeResponsibleId: {
          type: String,
          required: true,
        },
      },
    ],
    default: [],
  },
});
