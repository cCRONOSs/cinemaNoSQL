import express from 'express';
import { createTicket } from '../controllers/ticketController.js';

const ticketRoutes = express.Router();

ticketRoutes.post('/registerTicket', createTicket);

export { ticketRoutes };