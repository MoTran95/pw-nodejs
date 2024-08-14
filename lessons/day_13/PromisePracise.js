// main();

function login(cb) {
    // call login api;
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}

function loginUser() { };

function loginBusiness() { };

function getUserAPI(cb, time) {
    setTimeout(() => {
        cb({
            id: 3,
            name: 'Roze'
        });
    }, 2000);
}

function getUserInformation() {
    login()
        .then(function (result) {
            console.log('LOGIN INSIDE CALLBACK', result);
            if (result) {
                return getUserAPI();
            }
        })
        .then(function (user) {
            if (user) {
                return user;
            }
        })
        .then()
}

getUserInformation();
///
function getPost(postId){
    var a = 1;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(function (response) {
            console.log(response)
        });
}
