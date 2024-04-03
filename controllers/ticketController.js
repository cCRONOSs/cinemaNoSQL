import Ticket from  '../models/registerTicket.js';
//CREATE
    const createTicket = async (req, res) => {
        try{
            const newTicket = await Ticket.create(req.body);
            res.json(newTicket);
        }
        catch(error){
            res.status(500).json({
                msg: 'Error al registrar boletos',
                error,
            });
        }
};
//READ
   const getAllTickets = async (req, res) =>{
            const tickets = await Ticket.find();
            res.json(tickets);
    }
export { createTicket, getAllTickets }