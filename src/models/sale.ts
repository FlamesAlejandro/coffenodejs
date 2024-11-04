import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  saleDate: { type: Date, default: Date.now },
  price: { type: Number, required: true }
});

export const Sale = mongoose.model('Sale', saleSchema);
