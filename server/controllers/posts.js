import PostMessage from "../models/postMessage.js";

export const getPosts = (req, res) => {
    try {
        const postMessages = PostMessage.find();
    } catch( error ) {

    }
}

export const createPost = (req, res) => {
    req.send('Post Creation');
}