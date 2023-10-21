import express from 'express';
import { Routes } from '../modules/collection/route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: Routes,
  },
];

moduleRoutes?.forEach(route => router.use(route?.path, route?.route));

export default router;
