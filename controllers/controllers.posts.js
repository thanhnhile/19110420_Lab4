const model = require('../models/models.posts');
const getAll = (req, res) => {
    res.render('index', {
        title: 'View posts',
        posts: model.posts
    });
};
const addPost = (req, res) => {
    if (req.method === 'GET') {
        res.render('addPost', {
            title: 'Add post'
        });
    }
    else if (req.method === 'POST') {
        if (req.body) {
            const { title, content } = req.body;
            model.addPost(title, content);
            res.redirect('/');
        }
    }
}
const getPostById = (req, res) => {
    const { id } = req.params;
    const result = model.getPostById(id);
    if (result) {
        res.render('postDetail', {
            title: 'View post',
            post: result
        });
    }
}
const deletePost = (req, res) => {
    const { id } = req.params;
    const result = model.deletePost(id);
    if (result) {
        res.redirect('/');
    }
    else {
        res.render('error', {
            title: "Error",
            message: "Cannot delete this post"
        });
    }
}
const editPost = (req, res) => {
    const { id } = req.params;
    if (req.method === 'GET') {
        const result = model.getPostById(id);
        res.render('editPost', {
            title: 'Edit post',
            post:result
        });
    }
    else if (req.method === 'POST') {
        if (req.body) {
            const { title, content } = req.body;
            const result = model.editPost(id,title,content);
            if(result){
                res.redirect('http://localhost:5000/' + id);
            }
            else {
                res.render('error', {
                    title: "Error",
                    message: "Cannot edit this post"
                });
            }
            
        }
    }
}
const addCommentToPost = (req, res) => {
    const id = req.params.id;
    const comment = req.body.comment;
    if (comment && model.addCommentToPost(id, comment)) {
        res.redirect('http://localhost:5000/' + id);
    }
    else res.status(400).render('error', {
        title: "Error",
        message: "Cannot add comment to this post"
    })


}
module.exports = {
    getAll,
    addPost,
    getPostById,
    deletePost,
    editPost,
    getPostById,
    addCommentToPost
}