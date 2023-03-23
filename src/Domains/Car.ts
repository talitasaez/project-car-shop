import ICar from '../Interfaces/Icar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(
    {
      id,
      model,
      year,
      color,
      status = false,
      buyValue,
      doorsQty,
      seatsQty,
    }: ICar, 
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  getDoorsQty(): number {
    return this.doorsQty;
  }

  setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  getId(): string | undefined {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getSeatsQty(): number {
    return this.seatsQty;
  }

  setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  getModel(): string {
    return this.model;
  }
  setModel(value: string) {
    this.model = value;
  }

  getColor(): string {
    return this.color;
  }
  setColor(value: string) {
    this.color = value;
  }

  getStatus(): boolean | undefined {
    return this.status;
  }

  setStatus(status: boolean) {
    this.status = status;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number) {
    this.year = year;
  }

  getBuyValue(): number {
    return this.buyValue;
  }

  setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
}
  
export default Car;