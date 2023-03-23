import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycles';

export default class MotorcycleServices {
  async create(motor: IMotorcycle): Promise<Motorcycle | null> {
    const motorOdm = new MotorcyclesODM();
    const newMotor = await motorOdm.create(motor);
    return new Motorcycle(newMotor);
  }
}