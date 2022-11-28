import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      first_name: 'Davi',
      last_name: 'Miller',
      email: 'britodavi456@gmail.com',
      age: 12,
    });
    res.json({
      newStudent,
    });
  }
}

export default new HomeController();
