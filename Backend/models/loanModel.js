const mongoose = require("mongoose");

const loanModel = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Women",
  },
  amount: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  repayment: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paidAmount: {
    type: Number,
    default: 0,
  },
  remainingAmount: {
    type: Number,
    default: 0,
  },
});
