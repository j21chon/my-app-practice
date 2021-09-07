import mongoose from 'mongoose';

// models로 분기하여 db와 관련된 정보를 여기에 넣는다
// mongodb는 고정된 스키마가 없지만 대략의 기본이 되는 스키마를 mongoose.Schema를 통해 
// 지정할 수는 있음 => 이대로 안한다고 db 저장이 안된다거나 하지는 않음. 말 그대로 기본의 형식을 대충 설정

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;