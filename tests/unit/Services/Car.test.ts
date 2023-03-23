import { expect } from 'chai';
import { Model } from 'mongoose';
import { SinonSandbox } from 'sinon';
import sinon = require('sinon');
import CarService from '../../../src/Services/CarService';
import { validCar, validAll } from '../mocks/Car.mock';

describe('Testa rota /cars', function () {
  let sandbox: SinonSandbox;
  let carService: CarService;

  beforeEach(function () {
    sandbox = sinon.createSandbox();
    carService = new CarService();
  });

  afterEach(function () {
    sandbox.restore();
  });

  const resolves = <T>(info: T) => ({ type: null, message: info });

  describe('Testa roda de /:id', function () {
    it('Retorna um erro', async function () {
      sandbox.stub(Model, 'findById').resolves(validCar);

      const result = await carService.findOne('61676afabf6e194f5187f385');
      expect(resolves(result).type).to.be.equal(null);
    });

    it('Retorna um erro ao passar string invalida', async function () {
      try {
        await carService.findOne('id invalido');
      } catch (error) {
        expect((error as Error)).to.be.equal(error);
      }
    });

    describe('Testa rota /get', function () {
      it('Deve retornar um type tipo nulo', async function () {
        sandbox.stub(Model, 'find').resolves(validAll);

        const result = await carService.findAll();
        expect(resolves(result).type).to.be.equal(null);
      });
    });

    it('Se passado id invalido da erro', async function () {
      try {
        sandbox.stub(Model, 'findById').resolves();
        await carService.findOne('52676awrbf5e194f1187g85');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });
});