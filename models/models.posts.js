const { post } = require("../server");

const posts = [];
const Post = (title,content)=>{
    const id = Math.floor(Math.random() * 101);
    return {
        id,
        title,
        content,
        comments: []
    };

};
const getPostById = (postID)=>{
    const result = posts.find(post => post.id == postID);
    return result;
}
const addPost = (title,content)=>{
    let post = Post(title,content);
    posts.push(post);
};
const deletePost = (postID) => {
    const index = posts.findIndex(post => post.id == postID);
    if(index != -1){
        posts.splice(index,1);
        return true;
    }
    else return false;
};
const editPost = (postID, title,content) => {
    const post = getPostById(postID);
    if(post){
        post.title = title;
        post.content = content;
        return true;
    }
    else return false;
}
const addCommentToPost = (postID, comment) => {
    const result = posts.find(post => post.id == postID);
    if(result){
        result.comments.push(comment);
        return true;
    }
    else return false;
}
module.exports = {
    posts,
    addPost,
    deletePost,
    editPost,
    addCommentToPost,
    getPostById
}
function main (){
    addPost('HTML,CSS','Hoc vui gan chet alo alo');
    addPost('JS,CSS, TS','Hoc vui gan chet alo alo');
    console.log(posts);
}
main();