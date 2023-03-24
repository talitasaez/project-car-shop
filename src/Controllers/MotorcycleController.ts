import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMotorcycle() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      color: this.req.body.color,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAllMotorcycles() {
    try {
      const motorcycles = await this.service.getAllMotorcycles();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.getMotorcycleById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async updateMotorcycleById() {
    const { id } = this.req.params;
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      color: this.req.body.color,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const updatedMotorcycle = await this.service.updateMotorcycleById(id, motorcycle);
      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;