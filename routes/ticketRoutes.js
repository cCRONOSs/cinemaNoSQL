import express from 'express';
import { createTicket, getAllTickets } from '../controllers/ticketController.js';

const ticketRoutes = express.Router();

ticketRoutes.post('/registerTicket', createTicket);
ticketRoutes.get('/registerTicket', getAllTickets);
export { ticketRoutes };