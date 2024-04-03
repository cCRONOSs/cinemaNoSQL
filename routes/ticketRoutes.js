import express from 'express';
import { createTicket, getAllTickets, getTicketByClient } from '../controllers/ticketController.js';

const ticketRoutes = express.Router();

ticketRoutes.post('/registerTicket', createTicket);
ticketRoutes.get('/registerTicket', getAllTickets);
ticketRoutes.get('/registerTicket/:nameClient', getTicketByClient)
export { ticketRoutes };