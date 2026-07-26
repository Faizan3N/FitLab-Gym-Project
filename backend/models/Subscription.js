const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  memberId: String,
  plan: String,
  duration: String,
  paymentMethod: String,
  autoRenew: Boolean,
  startDate: {
    type: Date,
    default: Date.now
  }
});

const Subscription = mongoose.model('subscriptions', subscriptionSchema);
module.exports = Subscription; 