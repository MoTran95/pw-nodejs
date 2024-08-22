const { expect, assert } = require('chai')
const isResStatusValid = ({status}, expectedStatus) => {
    expect(status).equals(expectedStatus)
}

const isUserValid = ({ userId }, expectedId) => {
    assert(userId === expectedId, `[ERR] user id is not ${expectedId}`)
}

module.exports = {isResStatusValid,isUserValid}