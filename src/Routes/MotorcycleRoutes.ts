import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import MotorcycleMiddlewares from '../Middlewares/MotorcycleMiddlewares';

const MotorcyclesRoute = Router();
MotorcyclesRoute.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);

MotorcyclesRoute.get(
  '/:id',
  (req, res, next) => new MotorcycleMiddlewares().checkMotorcycleExists(req, res, next),
  (req, res, next) => new MotorcycleController(req, res, next).getMotorcycleById(),
);

MotorcyclesRoute.put(
  '/:id',
  (req, res, next) => new MotorcycleMiddlewares().checkMotorcycleExists(req, res, next),
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycleById(),
);

export default MotorcyclesRoute;