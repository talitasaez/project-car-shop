import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(doors: IVehicle) {
    this.id = doors.id;
    this.model = doors.model;
    this.year = doors.year;
  }
}

export default Vehicle;