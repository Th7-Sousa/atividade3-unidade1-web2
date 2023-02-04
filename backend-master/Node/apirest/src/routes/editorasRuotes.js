import express from "express";
import PublishersController from "../controllers/editoraController.js";

const router = express.Router();

router
  .get("/editoras", PublishersController.listarEditora)
  .get("/editoras/:id", PublishersController.listarEditoraPorId)
  .post("/editoras", PublishersController.cadastrarEditora)
  .put("/editoras/:id", PublishersController.atualizarEditora)
  .delete("/editoras/:id", PublishersController.excluirEditora);

export default router;
