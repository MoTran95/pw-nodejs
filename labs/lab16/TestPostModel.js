// TestPostModel.js
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");
const BASE_URL ='https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    const userId = 1;
    const postId = 1;

    // Create RequestHandler object
    const requestHandler = new RequestHandler(BASE_URL,SLUG);

    // const post = ...
    const post = await requestHandler.printTargetPost(userId,postId);
    console.log(`Post`, post);
    // const allPost = ...
    const allPost = await requestHandler.printAllPosts(userId);
    console.log(`all post`, allPost);
}