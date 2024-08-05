const readline = require('readline-sync');
let postId = readline.question("Please input post id: ");
let userId = readline.question("Please input user id: ");

run();

async function getPost() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    if (post.id &&post.userId == userId){
        return console.log(post);
    }
    console.log("The entered postID is incorrect");
}
async function getUserPost() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    if (posts.length > 0){
        return console.log(posts);
    }
    console.log("The entered userID is incorrect");
}

async function run() {
    await getPost();
    await getUserPost();
}