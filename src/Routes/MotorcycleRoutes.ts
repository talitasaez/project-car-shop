import { Router } from 'express';
import MotorcyclesControllers from '../Controllers/MotorcycleController';

const MotorcyclesRouter = Router();

MotorcyclesRouter
  .post('/motorcycles', (req, res, next) => new MotorcyclesControllers(req, res, next).create());

export default MotorcyclesRouter;