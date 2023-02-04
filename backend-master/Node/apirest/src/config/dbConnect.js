import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://thiago:0000@serverwebii.q5doyzg.mongodb.net/Livraria"
);

let db = mongoose.connection;

export default db;
