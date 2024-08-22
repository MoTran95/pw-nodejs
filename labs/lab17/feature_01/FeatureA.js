const sender = require('axios');
const { COMMON_HEADER } = require('../headers/Headers')
const { isResStatusValid, isUserValid } = require('../Utils/CommandVerification')
describe('GET | TODO', function () {
    it('should be able to get todo 01', async () => {
        const response = await sender({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/todos/1",
            headers: COMMON_HEADER
        })
        // verification
        isResStatusValid(response, 200)
        isUserValid(response.data, 1)
    });
});

