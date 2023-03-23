import { model, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

const CarSchema = new Schema<ICar>({
  model: { type: String },
  year: { type: Number },
  color: { type: String },
  status: { type: Boolean },
  buyValue: { type: Number },
  doorsQty: { type: Number },
  seatsQty: { type: Number },
  
}, {
  toJSON: {
    virtuals: true,
    versionKey: false,
  },
});
  
const CarModel = model<ICar>('Car', CarSchema);
  
export default CarModel;