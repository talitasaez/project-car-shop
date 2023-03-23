import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private service;
  constructor() {
    this.service = new CarService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { model,
        year,
        color,
        status,
        buyValue,
        doorsQty,
        seatsQty } = req.body;

      const newCar = await this.service
        .create({ model, year, color, status, buyValue, doorsQty, seatsQty });
      return res.status(201).json(newCar);
      return res.status(201).json(newCar);
    } catch (err) {
      next(err);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this.service.findAll();

      return res.status(200).json(cars);
    } catch (err) {
      next(err);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const car = await this.service.findOne(id);

      return res.status(200).json(car);
    } catch (err) {
      next(err);
    }
  };
}
