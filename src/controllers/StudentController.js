import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();

      return res.status(200).json(students);
    } catch (e) {
      return res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(404).json({
          errors: ['Student not found'],
        });
      }

      return res.status(200).json(student);
    } catch (e) {
      return res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.status(201).json(student);
    } catch (e) {
      return e.errors ? res.status(400).json({
        errors: e.errors.map((error) => error.message),
      }) : res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(404).json({
          errors: ['Student not found'],
        });
      }

      await student.update(req.body);

      return res.status(200).json(student);
    } catch (e) {
      return e.errors ? res.status(400).json({
        errors: e.errors.map((error) => error.message),
      }) : res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(404).json({
          errors: ['Student not found'],
        });
      }

      await student.destroy();

      return res.status(204).json();
    } catch (e) {
      return res.status(500).json({
        errors: ['Internal server error'],
      });
    }
  }
}

export default new StudentController();
