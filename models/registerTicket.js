import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    //Campo -> tipo de dato
    client : String,
    totalTickets : Number,
    priceTicket : Number,
    totalPrice : Number,
    timeFunction : String,
    seats : String
});

export default mongoose.model('Ticket', ticketSchema)