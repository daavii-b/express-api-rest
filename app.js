import dotenv from 'dotenv';

import './src/database';

import express from 'express';

import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import studentRoutes from './src/routes/studentRoutes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/students', studentRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
  }
}

export default new App().app;
