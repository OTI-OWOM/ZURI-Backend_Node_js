// 1.   creating Objects
//let emptyObj = {};
//console.log(emptyObj);

let person = {
firstname: 'Ben',
};

console.log(person);

const user = {
    firstname: 'Uba',
    lastname: 'Eze',
    age: 20,
    getFullname: function () {
        return this.firstname + ' ' +
        this.lastname;
    },
}
// 2. Accessing properties
// Using Dot notation
console.log(user.firstname);
console.log(user.lastname);
console.log(user.age);
let fname = user.getFullname();
console.log(fname);
//Using Bracket notation
// or console.log(user['firstname']);

// 3. Modify the value of a property
//Property
user.firstname = 'Ken';
console.log(user);

// 4. Adding a new property to an object
user.isMarried = true;
console.log(user);

// 5. Deleting a property
delete user.age;
console.log(user);

// 6. Checking if a property exists
console.log('firstname' in user)
console.log('address' in user);

// 7. The "for .. in" loop
for(let key in user) {
    console.log(key);
    console.log(user[key]);
}

// 8. Example write code to sum all salaries and store in the variable sum
let salaries = {
    ken: 400,
    Jean: 300,
    Adams: 300,
};

let sum = 0;
for (let sal in salaries){
    sum += salaries[sal];
    console.log(sum);
}



