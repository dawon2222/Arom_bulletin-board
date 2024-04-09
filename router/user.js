import {Router} from 'express';
import { PostModel } from '../schema/user.js';

const PostRouter=Router();

PostRouter.post('/',async (req,res)=>{//req 클라이언트에서 전송하는 요청에 대한 정보, 응답에 대한 정보
    const data={
        Title:req.body.Title,
        Content:req.body.Content,
    }

    const result=await PostModel.create(data);//promise가 비동기 함수를 의미
    console.log(result.Content);
    console.log(result.Title);
    if(result){
        res.send({
            "message" : "게시글이 정상적으로 생성되었습니다.",
            "post_title":result.Title
        });
    }
    else{
        res.json({
            "message":"error"
        });
    }
});

PostRouter.get('/', async(req,res)=>{//요청에 대한 정보, 응답에 대한 정보
    const result=await PostModel.find();
    if(result){
        res.send({
            "message":"게시글 목록입니다.",
            "data":result
        });
    }
    else{
        res.json({
            "message":"게시글이 없습니다."
        })
    }
    
});

PostRouter.get('/:id', async(req,res)=>{//요청에 대한 정보, 응답에 대한 정보
    const result=await PostModel.findById(req.params.id);
    if(result){
        res.send({
            "message":req.params.id+" 게시글입니다.",
            "data":result
        });
    }
    else{
        res.json({
            "message":"그런 아이드의 게시글이 없습니다."
        })
    }    
});

PostRouter.patch('/:id',async(req,res)=>{//요청에 대한 정보, 응답에 대한 정보
    const result=await PostModel.findByIdAndUpdate(req.params.id,req.body);
    if(result){
        res.send({
            "message":"데이터 수정을 완료했습니다."
        });
    }
    else{
        res.json({
            "message":"그런 아이디를 가진 게시물이 없습니다."
        })
    }    
});

PostRouter.delete('/:id',async(req,res)=>{//요청에 대한 정보, 응답에 대한 정보
    const result=await PostModel.findByIdAndDelete(req.params.id);
    if(result){
        res.send({
            "message":"데이터 삭제를 완료했습니다."
        });
    }
    else{
        res.json({
            "message":"그런 아이디를 가진 게시물이 없습니다."
        })
    }
});

export default PostRouter;