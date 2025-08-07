import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  farm: {
    type: String,
    ref: 'Farm',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['vegetable', 'fruit', 'dairy', 'meat', 'poultry', 'grains', 'herbs', 'other'],
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    enum: ['kg', 'lb', 'piece', 'dozen', 'bunch', 'liter', 'gallon', 'box'],
    required: true
  },
  availableQuantity: {
    type: Number,
    required: true,
    min: 0
  },
  images: [String],
  organic: Boolean,
  harvestDate: Date,
  rating: {
    average: Number,
    count: Number
  },
  tags: [String],
  isSubscriptionAvailable: Boolean
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
