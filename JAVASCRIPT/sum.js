//Using any of the array functions map and reduce, programmatically obtain the sum of all scores.

let scores = {
    first: 400,
    second: 350,
    third: 250,
    fourth: 240,
    fifth: 230
  };
  // Coverting the object values to an array
  
  let scoresArr = Object.values(scores);
  // Calculating the sum using reduce
 
  let totalSum = scoresArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  
  console.log(totalSum);
  