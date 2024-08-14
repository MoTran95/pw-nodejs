const readline = require('readline-sync');
let userId = readline.question("Please input user id: ");
let postId = readline.question("Please input post id: ");

function logPosts(posts) {
    // console.log("POSTS", posts);
    return posts;
}

function getAllPosts() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(logPosts)
}

function filterUserPost(posts, userId){
    const temp = [];
    for (const post of posts) {
        if (post.userId == userId) {
            temp.push(post);
        }
    }
    
    return temp;
}

function findPostWithId(posts, postId) {
    for (const post of posts) {
        if (post.id == postId) {
            return post;
        }
    }
}

function checkUserPostWithId(userId, postId) {
    return getAllPosts()
        .then(function(posts) {
             return filterUserPost(posts, userId);
           // return posts.filter(post => post.userId == userId);
        })
        .then(function(userPosts) {
            // console.log("USER POSTS", userId, userPosts);
            return findPostWithId(userPosts, postId);
          //  return userPosts.find(post => post.id == postId);
        })
        .then(function(post) {
            if (post) {
                return console.log('Post existed with content', post);
            }

            console.log('PostId is not found');
        });
}

function printAllUserPosts(userId) {
    return getAllPosts()
    .then(function(posts) {
         return filterUserPost(posts, userId);
        //return posts.filter(post => post.userId == userId);
    }).then(function(posts) {
        if (posts.length > 0) {
            return console.log('User Posts: ', posts);
        }

        console.log('UserId is not found');
    });
}

function main() {
    Promise.all([
        checkUserPostWithId(userId, postId),
        printAllUserPosts(userId)
    ]).then(() => console.log('DONE'));
}
main();