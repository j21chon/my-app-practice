// 일반적인 방법은 const express = require('express') 이런 식(CommonJS)방식으로 하는 것이지만
// node.js 13.2 버전부터 ES 모듈 시스템 문법인 아래 방법을 사용할 수 있다
// 아래 방법을 사용하기 위해서는 package.json에 "type": "module" 을 추가하여 설정을 해줘야 함
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';



const app = express();
app.use(cors)



app.use(express.json()) // body-parser 대신 express 내장 사용하면 됨