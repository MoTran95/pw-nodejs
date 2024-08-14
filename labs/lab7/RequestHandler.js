const Post = require("./Post");

class RequestHandler {

    async printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        const userPosts = await this._getAllPosts(userId);
        const post = this.getPostId(userPosts, postId);
        if(post){
            return new Post(post.userId, post.id, post.title,post.body);
        }

    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const userPosts = await this._getAllPosts(userId);
        const temp = [];
        for (let index = 0; index < userPosts.length; index++) {
            const post = userPosts[index];
            const postModel = new Post(post.userId, post.id, post.title,post.body);
            temp.push(postModel);
        }
        return temp;
    }

    filterUserPost(posts, userId) {
        const temp = [];
        for (let index = 0; index < posts.length; index++) {
            const post = posts[index];
            if (post.userId == userId) {
                temp.push(post);
            }
        }
        return temp;
    }
    getPostId(posts, postId) {
        for (let index = 0; index < posts.length; index++) {
            const post = posts[index];
            if (post.id == postId) {
                return post;
            }
        }
    }

    async _getAllPosts(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const json = await response.json();
        return this.filterUserPost(json, userId);
    }
}
module.exports = RequestHandler;