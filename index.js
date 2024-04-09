import express from 'express';//express는 class에 가까움
import PostRouter from './router/user.js';
import mongoose from "mongoose";

const app=new express();

app.use(express.json());
app.use('/post',PostRouter);//응답받는 url을 고치고 싶으면 문자열 추가

mongoose.connect("mongodb+srv://tkrhk5720:1234@cluster0.igj3zvn.mongodb.net/Arom?retryWrites=true&w=majority&appName=Cluster0");

app.listen(8000,() =>{//이 메쏘드는 서버를 대기상태로 만듦 외부에서 들어오는 요청을 이 서버가 언제든지 처리 가능하도록 함
    console.log("서버 실행됨");
})