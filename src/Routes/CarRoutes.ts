import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

const controller = new CarController();

router.post('/cars', controller.create);

export default router;