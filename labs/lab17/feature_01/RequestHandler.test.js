const sender = require('axios');
const { COMMON_HEADER } = require('../headers/Headers')
const { isHavingPosts,isEmptyPosts, isPostValid, isPostUndefined } = require('../Utils/CommandVerification');
const RequestHandler = require('../../lab16/RequestHandler');

describe('RequestHandler', function () {
    const requestHandler = new RequestHandler('https://jsonplaceholder.typicode.com', '/posts');
    describe('printTargetPost', function () {
        it('should return correct post', async () => {
            const post = await requestHandler.printTargetPost(1, 1);
            isPostValid(post, 1);
        });

        it('should return undefined', async () => {
            const post = await requestHandler.printTargetPost(2, 1);
            isPostUndefined(post);
        });
    });

    describe('printAllPosts', function () {
        it('should return correct post', async () => {
            const posts = await requestHandler.printAllPosts(1);
            isHavingPosts(posts);
        });

        it('should return undefined', async () => {
            const posts = await requestHandler.printAllPosts(-1);
            isEmptyPosts(posts);
        });
    });
});
