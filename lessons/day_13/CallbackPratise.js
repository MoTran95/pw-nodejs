const users = [
    {
        id: 1,
        name: 'Sunny',
    },
    {
        id: 2,
        name: 'Liza'
    }
];

function findByUserId(users, userId) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].id === userId) {
            return users[index];
        }
    }
}

function findByName(users, userName) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].name === userName) {
            return users[index];
        }
    }
}

function findUser(users, callback) {
    for (let index = 0; index < users.length; index++) {
        if (callback(users[index])) {
            return users[index];
        }
    }
}

function main() {
    const userWithId = findUser(users, function(user) {
        return user.id === 1;
    });

    const userWithName = findUser(users, function(user) {
        return user.name === 'Liza';
    });

    console.log("User", userWithId, userWithName);
}

// main();

function login(cb) {
    // call login api;
    setTimeout(() => {
        cb(true);
    }, 1000);
}

function loginUser() {};

function loginBusiness() {};

function getUserAPI(cb) {
    setTimeout(() => {
        cb({
            id: 3,
            name: 'Roze'
        });
    }, 2000);
}

function getUserInformation() {
   

    const response = login( function(result) {
        console.log('LOGIN INSIDE CALLBACK', result);
        if (result) {
            const user = getUserAPI(function() {
                if (user) {
                    return user;
                }
            });
        }
    });
    console.log('LOGIN OUTSIDE', response);
}

getUserInformation();