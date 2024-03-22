import Ticket from  '../models/registerTicket.js';
//CREATE
    const createTicket = async (req, res) => {
        try{
            const newTicket = await ticket.create(req.body);
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

export { createTicket }