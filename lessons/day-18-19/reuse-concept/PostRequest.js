const Request = require("./Request");

// child class / sub class / derived class
class GetRequest extends Request {
    // Overiding
    setMethod(){
        super.setMethod('POST');
    }
}
let request = new GetRequest("https://sth.com/posts");
request.setMethod();
request.send();
request.VerifyResponse();