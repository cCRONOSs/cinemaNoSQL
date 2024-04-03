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
//GET all tickets
   const getAllTickets = async (req, res) =>{
            const tickets = await Ticket.find();
            res.json(tickets);
    }

//GET tickets by Client
const getTicketByClient = async (req, res) => {
    const ticket = await Ticket.find({ client : req.params.nameClient});
    res.json(ticket);
}

export { createTicket, getAllTickets, getTicketByClient }