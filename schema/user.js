import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({
    Title : {type:String,required:true,unique:false},//타입, 필수인지, 중복될 수 있는지
    Content:{type:String,required:true,unique:false}
});

const PostModel=mongoose.model("Post",PostSchema);

export {PostModel,PostSchema};