import Motorcycle from '../Domains/Motorcycles';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private createMotorcycle(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const newMotorcycle = await motorcycleModel.create(motorcycle);
    return this.createMotorcycle(newMotorcycle);
  }
  public async getAllMotorcycles() {
    const motorcycleModel = new MotorcycleModel();
    const motorcycles = await motorcycleModel.findAll();
    return motorcycles.map((motorcycle) => this.createMotorcycle(motorcycle));
  }

  public async getMotorcycleById(id: string) {
    const motorcycleModel = new MotorcycleModel();
    const motorcycle = await motorcycleModel.findById(id);
    return this.createMotorcycle(motorcycle);
  }
  public async updateMotorcycleById(id: string, motorcycle: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const updatedMotorcycle = await motorcycleModel.update(id, motorcycle);
    return this.createMotorcycle(updatedMotorcycle);
  }
}

export default MotorcycleService;