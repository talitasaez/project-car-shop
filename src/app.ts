import express from 'express';
import ErrorHandler from './Errors/ErrorHandle';
import carRouter from './Routes/CarRoutes';
import MotorcyclesRouter from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(MotorcyclesRouter);

app.use(ErrorHandler);

export default app;
