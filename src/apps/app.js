const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const config = require("config");
const cors = require("cors");
const { connectionRedis } = require("../common/init.redis");
connectionRedis();
// const corsOptions = {
//   // origin: "*",
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// const allowedOrigins = [
//   // "http://localhost:3000",
//   // "https://your-frontend.vercel.app"
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionSuccessStatus: 200,
// };

app.use(
  cors({
    origin: true, // Tự động phản hồi đúng origin request đến
    credentials: true, // Cho phép gửi cookie, auth headers
  })
);

// app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(`${__dirname}/../public`));
app.set("views", `${__dirname}/../resources/views`);
app.set("view engine", "ejs");
app.use(
  config.get("app.prefixApiVersion"),
  require(`${__dirname}/../routers/web`)
);

module.exports = app;
