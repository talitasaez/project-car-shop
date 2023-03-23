import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

const controller = new CarController();

router.post('/cars', controller.create);
router.get('/cars', controller.findAll);
router.get('/cars/:id', controller.findOne);
router.put('/cars/:id', controller.updateOne);

export default router;