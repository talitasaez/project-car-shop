import express from 'express';
import ErrorHandler from './Errors/ErrorHandle';
import carRouter from './Routes/CarRoutes';

const app = express();
app.use(express.json());
app.use(carRouter);

app.use(ErrorHandler);

export default app;
