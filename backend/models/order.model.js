import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({

  user: {
    type: String,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: String,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    priceAtPurchase: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  deliveryAddress: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  deliveryDate: Date,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  //paymentMethod: String,
  //isSubscriptionOrder: Boolean,
  // subscriptionBox: {
  //   type: String,
  //   ref: 'SubscriptionBox'
  // },
  farmer: {
    type: String,
    ref: 'User'
  }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);
