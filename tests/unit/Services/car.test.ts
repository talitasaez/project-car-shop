import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testando métodos relacionados a Car', function () {
  const inputCar: ICar = {
    model: 'Voyage',
    year: 2015,
    color: 'Preto',
    status: true,
    buyValue: 30.000,
    doorsQty: 4,
    seatsQty: 5,
  };
  it('Cadastrando um carro com sucesso', async function () {
    const outputCar: ICar = {
      id: '634852326b35b59438fbea2f',
      ...inputCar,
    };

    sinon.stub(Model, 'create').resolves(outputCar);

    const service = new CarService();
    const createCar = await service.create(inputCar);
    expect(createCar).to.be.deep.equal(outputCar);
  });

  it('Retornando null caso o id seja inexistente', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new CarService();
      await service.findOne('999gggsss');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
 
  describe('Test car service', function () {
    it('Test if list all car', async function () {
      const carOutput: ICar[] = [
        {
          id: '641bb321c3d1060651e4a040',
          model: 'Marea',
          year: 2002,
          color: 'Black',
          status: true,
          buyValue: 15.99,
          doorsQty: 4,
          seatsQty: 5,
        },
      ];
      sinon.stub(Model, 'find').resolves(carOutput);

      const carService = new CarService();
      const result = await carService.findAll();

      expect(result).to.be.deep.equal(carOutput);
    });

    it('Test if list one car by id', async function () {
      const carOutput: ICar = {
        id: '641bb321c3d1060651e4a040',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      };
      sinon.stub(Model, 'findOne').resolves(carOutput);

      const carService = new CarService();
      const result = await carService.findOne('641bb321c3d1060651e4a040');

      expect(result).to.be.deep.equal(carOutput);
    });

    it('Test if list one car with id invalid', async function () {
      sinon.stub(Model, 'findOne').resolves();

      try {
        const carService = new CarService();
        await carService.findOne('cccccccccccxxxxxxxxxxxx0');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Test if list one car if the id not found', async function () {
      sinon.stub(Model, 'findOne').resolves();

      try {
        const carService = new CarService();
        await carService.findOne('641bb321c3d1060651e4b050');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });

    it('Test if create a new car', async function () {
      const carInput: ICar = {
        model: 'Gol',
        year: 2000,
        color: 'Black',
        buyValue: 40,
        doorsQty: 4,
        seatsQty: 5,
      };
      const carOutput: ICar = {
        id: '641bb321c3d1060651e4b050',
        model: 'Gol',
        year: 2000,
        color: 'Black',
        status: false,
        buyValue: 40,
        doorsQty: 4,
        seatsQty: 5,
      };
      sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarService();
      const result = await service.create(carInput);

      expect(result).to.be.deep.equal(carOutput);
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});