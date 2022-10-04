const { authService } = require("../services");

module.exports = {
  async login(req, res, next) {
    const msg = await authService.loginWithJWT();
    res.send(msg);
  },

  async logout(req, res, next) {
    const msg = await authService.logout();
    res.send(msg);
  },
};
