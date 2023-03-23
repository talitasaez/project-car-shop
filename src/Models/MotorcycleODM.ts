import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractionODM';

export default class MotorcyclesODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, require: true },
      year: { type: Number, require: true },
      color: { type: String, require: true },
      status: { type: Boolean },
      buyValue: { type: Number, require: true },
      category: { type: String, require: true },
      engineCapacity: { type: Number, require: true },
    });
    super(schema, 'motorcycle');
  }
}