import publishers from "../models/editora.js";

class PublishersController {
  static listarEditora = (req, res) => {
    publishers.find((err, publishers) => {
      res.status(200).json(publishers);
    });
  };

  static listarEditoraPorId = (req, res) => {
    const id = req.params.id;
    publishers.findById(id, (err, publishers) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id da Editora não localizado` });
      } else {
        res.status(200).send(publishers);
      }
    });
  };
  static cadastrarEditora = (req, res) => {
    let editorA = new publishers(req.body);
    editorA.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar a Editora` });
      } else {
        res.status(201).send(editorA.toJSON());
      }
    });
  };

  static atualizarEditora = (req, res) => {
    const id = req.params.id;
    publishers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Editora atualizada com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirEditora = (req, res) => {
    const id = req.params.id;
    publishers.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Editora foi removida com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}
export default PublishersController;
