const { authService, userService } = require("../services");

module.exports = {
  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await authService.checkUser(email, password);
      const token = await authService.generateAccessToken(user.userId);

      const userData = {
        token,
        ...user,
      };
      res.status(200).json({
        status: 200,
        message: "로그인 성공",
        data: userData,
      });
    } catch (err) {
      next(err);
    }
  },

  async register(req, res, next) {
    const { email, password, nickname } = req.body;
    try {
      const user = await authService.createUser(email, password, nickname);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
};
