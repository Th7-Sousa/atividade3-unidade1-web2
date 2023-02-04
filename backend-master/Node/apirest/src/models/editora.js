import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
  {
    id: { type: String },
    nomeFantasia: { type: String, required: true },
    razaoSocial: { type: String },
    endereco: { type: String, required: true },
    telefone: { type: Number },
  },
  {
    versionKey: false,
  }
);

const publishers = mongoose.model("publishers", publisherSchema);

export default publishers;
