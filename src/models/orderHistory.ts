import mongoose from 'mongoose';

const orderHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: String, required: true },  // Referencia a la orden en MySQL
  statusHistory: [{ status: String, timestamp: Date }],
});

export const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);
