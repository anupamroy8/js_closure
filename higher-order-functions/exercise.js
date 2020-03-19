// Challenge 1
function addTwo(num) {
    return num+2;
}
console.log(addTwo(3))
console.log(addTwo(10))

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return "S"+word;
}
console.log(addS('pizza'));
console.log(addS('bagel'));

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    result = [];
    for(let el of array) {
        result.push(callback(el))
    }
    return result;
}
console.log(map([1, 2, 3], addTwo))
//[3, 4, 5]

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for(let el of array){
    console.log(callback(el))
    }
}
console.log(map([1, 2, 3], addTwo))
//3
//4
//5

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    result = [];
    for(let el of array) {
        result.push(callback(el))
    }
    return result;
}

//Extension 2
function reduce(array, callback, initialValue) {
    for(let el of array) {
        initialValue = callback(initialValue, el)
    }
    return initialValue;
}

//Extension 3
function intersection(...arrays) {
    return arrays.reduce((acc, elArr) =>{
        acc.forEach((savedElem,ind) => {
            if(elArr.indexOf(savedElem) == -1){
            acc.splice(ind,1);
        }  
    });
    return acc;
    });
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    return arrays.reduce((acc, elArr) =>{
        elArr.forEach(elem =>{
          if(elArr.indexOf(elem) != -1 && acc.indexOf(elem) == -1){
            acc.push(elem);
          }
        });
        return acc;
    },[]);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    return array1.reduce((acc, elem, index) =>{
        if(array2[index] == callback(elem)){
          acc[elem] =array2[index];
        }
        return acc;
    },{});
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc, elem, index) =>{
        acc[elem] = arrCallbacks.map(func => {
          return func(elem);
        });
        return acc;
    },{});
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
