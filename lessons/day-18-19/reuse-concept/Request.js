class Request {
    constructor(url, headers = {}){
        this.url = url;
        this.headers = headers;
    }
    setMethod(method){
        this.headers = {...this.headers, method: method}
    }
     send (){
        console.log(`Sending request with headers: ${JSON.stringify(this.headers)}`);
     }
     VerifyResponse(){
        console.log(`Verifying the response..`);
     }
}
 let request = new Request("https://somthing.com/posts", {method: 'GET'});
 request.send();
 request.VerifyResponse();
 module.exports = Request;
