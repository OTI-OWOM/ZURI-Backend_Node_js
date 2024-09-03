// 1. Declaring function
function sayHello(){
    console.log('hello world');
}
// 2. Calling function
sayHello();
function getName(name){
    
    console.log(name);
}
getName('Ubani');

/*// 3. The return statement
function getFullname(firstname, lastname){
let fullname;
fullname = firstname + ' ' + lastname;
return fullname;
}
let fullname = getFullname('Ubani', 'EZE');
console.log(fullname);

// 4. Default values
function getFullname(firstname = 'hello', lastname = 'Somebody'){
    let fullname;
    fullname = firstname + ' ' + lastname;
    return fullname;
    
    }
    let fullname = getFullname();
    console.log(fullname);
    

// 5. Example: Write a function min(a,b) which returns the least of two
// numbers a and b

function min(a, b){

    if(a < b ){
        return a;
    }
    else{
        return b;
    }
}
console.log(min (9, 3));