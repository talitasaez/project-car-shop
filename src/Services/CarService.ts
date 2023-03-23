import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import CustomError from '../Errors/CustomError';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  async create(carDto: ICar) {
    const car = new Car(carDto);
    const newCar = await CarModel.create(car);
    return newCar;
  }
  async findAll() {
    const cars = await CarModel.find();
    return cars;
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) { throw CustomError(422, 'Invalid mongo id'); }
    const car = await CarModel.findOne({ _id: id });
    if (!car) { throw CustomError(404, 'Car not found'); }
    return car;
  }

  async updateOne(id: string, carDto: Partial<ICar>) {
    await this.findOne(id);

    await CarModel.updateOne({ id }, { ...carDto });
    const updatedCar = this.findOne(id);
    return updatedCar;
  }
}