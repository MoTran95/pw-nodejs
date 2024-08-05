const readline = require('readline-sync');
let userId = readline.question("Please input user id: ");
let postId = readline.question("Please input post id: ");

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(json => {
        if (json.userId == userId) {
            return console.log(json);
        }
        console.log("The entered postID is incorrect");
    })
    .then(function () {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    })
    .then(response => response.json())
    .then(json =>{
        if (json.length > 0) {
            return console.log(json);
        }
        console.log("The entered userID is incorrect");
    })