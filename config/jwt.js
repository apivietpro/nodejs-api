module.exports = {
  accessTokenExp: process.env.JWT_ACCESS_EXPIRES_IN || "1d",
  refreshTokenExp: process.env.JWT_REFRESH_EXPIRES_IN || "1y",
};
