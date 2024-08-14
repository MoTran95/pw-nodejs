// Post.js
class Post {
    constructor(user, id, title, body) {
        this._user = user;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    set user(user) {
        this._user = user;
    }
    set id(id) {
        this._id = id;
    }
    set title(title) {
        this._title = title;
    }
    set body(body) {
        this._body = body;
    }
    get user() {
        return this._user;
    }
    get id() {
        return this._id;
    }
    get body() {
        return this._body;
    }
    get title() {
        return this.title;
    }

}
module.exports = Post;