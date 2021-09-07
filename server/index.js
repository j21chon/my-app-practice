// 일반적인 방법은 const express = require('express') 이런 식(CommonJS)방식으로 하는 것이지만
// node.js 13.2 버전부터 ES 모듈 시스템 문법인 아래 방법을 사용할 수 있다
// 아래 방법을 사용하기 위해서는 package.json에 "type": "module" 을 추가하여 설정을 해줘야 함
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js'

const app = express();

app.use(express.json({ limit: "30mb", extended: true })) // body-parser 대신 express 내장 사용하면 됨 / 사진을 보내는데 그 용량을 제한한 것
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
// app.use(
//     cors({
//         origin: ['http://localhost:3000'],
//         methods: ['GET, POST, OPTIONS, PUT, PATCH, DELETE'],
//         credentials: true
//     })
// )

app.use('/posts', postRoutes);

// mongoose를 통해 mongodb와 서버를 연결

const CONNECTION_URL = 'mongodb+srv://fallinM:fallinM123@sandbox.exnqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// mondgodb 아틀라스에서 db를 생성한 후 db 주소를 생성해야 함 (클러스터)
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);
