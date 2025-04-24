module.exports = {
  accessTokenExp: process.env.JWT_ACCESS_EXPIRES_IN || "20s",
  refreshTokenExp: process.env.JWT_REFRESH_EXPIRES_IN || "1y",
};
