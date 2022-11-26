/* eslint-disable class-methods-use-this */
class HomeController {
  index(req, res) {
    res.json({
      requesAccepted: true,
    });
  }
}

export default new HomeController();
