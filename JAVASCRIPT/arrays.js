// 1. Creating arrays
let arr = [];
//let arr2 = new Array();
//console.log(arr);
let topThreeEver = ['Messi', 'Ronaldinho', 'Pele'];
console.log(topThreeEver) ;

// 2. Accessing javascript array elements
console.log (topThreeEver[0]);

// 3. Modifying arrays
topThreeEver[2] = 'Maradona';
console.log(topThreeEver);

// 4. Nested arrays
let nestedArr = [
[1, 2, 3, 4],
[1, 2, 4]
];
console.log(nestedArr[0][3]);

// 5. Arrays and objects
let users = [
{name: 'ken', id: '1'},
{name: 'Ben', id: '2'},
];
console.log(users);
console.log(users[0]);

// 5. Arrays properties and methods
console.log(topThreeEver.length);

// 5A. PUSH-ADDS AN ELEMENT TO THE END
topThreeEver.push('Uba');
console.log(topThreeEver);

// 5B. POP-REMOVES AN ELEMENT FROM THE END
topThreeEver.pop();
console.log(topThreeEver);
// 5C. SHIFT-REMOVES ELEMENT FROM THE BEGINNING
topThreeEver.shift();
console.log(topThreeEver);

// 5D. UNSHIFT-ADDS AN ELEMENT TO THE BEGINNING
topThreeEver.unshift('Messi');
console.log(topThreeEver);

// 5E. FIND 
//nameArr.find(fn)
let topThreeEver = ['Messi', 'Ronaldinho', 'Pele' ];
let isExist = topThreeEver.find
(function (elem){
    return elem === 'Messi';
});
console.log(isExist);

// 5F. FILTER
const ages = [40, 50, 60, 30, 20];
let agesArr = ages.filter(function(age){
    return age >= 18;
});
console.log(agesArr);
console.log(ages);

// 5G.INCLUDES
console.log(ages.includes(18));

// 5H. MAP
let newMap = ages.map(function(age){
    return age * 2;
});

console.log(newMap);
