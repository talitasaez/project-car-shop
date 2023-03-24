import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleMiddlewares {
  public async checkMotorcycleExists(req: Request, res: Response, next: NextFunction) {
    const motorcycleId = req.params.id;
    if (!isValidObjectId(motorcycleId)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const motorcycleModel = new MotorcycleModel();
    const motorcycle = await motorcycleModel.findById(motorcycleId);
    if (!motorcycle) {
      return res.status(404).json({ message: 'Motorcycle not found' });
    }
    return next();
  }
}

export default MotorcycleMiddlewares;