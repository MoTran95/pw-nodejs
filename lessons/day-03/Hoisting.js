console.log(myVariable);

// Hoisted
var myVariable = 1;

/*
var myVariable
log(myVariable);
myVariable = 1;
*/

import funcA from './funcA';
import funcB from './funcB'; // use funcA

mock(funcA, () => {
    // do something else;
});

/*


mock(funcA, () => {
    // do something else;
});

import funcA from './funcA';
import funcB from './funcB'; // use funcA
*/