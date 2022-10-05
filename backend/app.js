// 패키지 불러오기
const express = require("express");
const dotenv = require("dotenv");

// 커스텀 미들웨어 불러오기
const jwtVerification = require('./src/middlewares/jwtVerification');
const errorMiddleware = require('./src/middlewares/error');

// 몽고디비 커넥션 이벤트 불러오기
const dbConnect = require("./src/models");

// 라우터 불러오기
const { authRouter } = require("./src/routes");

const app = express();
const PORT = 3000 // 수정 예정
dotenv.config();

// DB 연결
dbConnect();

// 미들웨어 연결
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// app.get("/", jwtVerification, (req, res, next) => {
//   res.send(req.userId);
// });

// 라우터 연결
app.use("/api/auth", authRouter);


// 에러처리 미들웨어
app.use(errorMiddleware);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
