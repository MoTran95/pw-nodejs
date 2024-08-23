const { expect, assert } = require('chai')

const isResStatusValid = ({status}, expectedStatus) => {
    expect(status).equals(expectedStatus)
}

const isUserValid = ({ userId }, expectedId) => {
    assert(userId === expectedId, `[ERR] user id is not ${expectedId}`)
}

const isPostValid = (post,postId) => {
    assert(post, "Post is not valid");
    assert(post.id == postId, "PostId is not valid");
};

const isHavingPosts = (posts) => {
    assert(posts.length > 0, "Posts are not valid");
};

const isEmptyPosts = (posts) => {
    assert(posts.length === 0, "Posts are empty");
};

const isPostUndefined = (post) => {
    assert(post == undefined, "Post is not undefined");
}

module.exports = {isResStatusValid,isUserValid, isPostValid, isPostUndefined, isHavingPosts,isEmptyPosts }