import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from 'express';
import 'dotenv/config';
import 'http-errors';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// > Route
app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    status: 'Success',
    statusCode: 200,
    message: 'Welcome to Express API'
  });
});

// > Handle 404 Error
app.use((req: Request, res: Response, next: Function) => {
  return res.status(404).json({
    status: 'Failed',
    statusCode: 404,
    message: 'Route is not found!'
  });
});

app.listen(port, () => {
  console.info(`Express Run in Port ${port}`);
});