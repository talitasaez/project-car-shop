import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected year: number;
  protected model: string;
  protected color: string;
  protected buyValue: number;
  protected status?: boolean;

  constructor(vehicle: IVehicle) {
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.buyValue = vehicle.buyValue;
    this.color = vehicle.color;
    this.id = vehicle.id;
    this.status = vehicle.status || false;
  }
  public getId() {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(value: string) {
    this.model = value;
  }

  public getYear(): number {
    return this.year;
  }

  public setYear(value: number) {
    this.year = value;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(value: string) {
    this.color = value;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }

  public setBuyValue(value: number) {
    this.buyValue = value;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(value: boolean) {
    this.status = value;
  }
}

export default Vehicle;