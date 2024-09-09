const Request = require("./Request");

// child class / sub class / derived class
class GetRequest extends Request {
    setMethod(){
        super.setMethod('GET');
    }
}
let request = new GetRequest("https://sth.com/posts");
request.setMethod();
request.send();
request.VerifyResponse();