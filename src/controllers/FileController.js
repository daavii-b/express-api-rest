class FileController {
  async store(req, res) {
    const { originalname, mimetype, size } = req.file;

    return res.json({ originalname, mimetype, size });
  }
}

export default new FileController();
