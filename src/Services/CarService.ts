import Car from '../Domains/Car';
import ICar from '../Interfaces/Icar';
import CarModel from '../Models/CarModel';

export default class CarService {
  async create(carDto: ICar) {
    const car = new Car(carDto);
    const newCar = await CarModel.create(car);
    return newCar;
  }
}