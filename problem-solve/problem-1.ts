// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.



{
    // 

  function sumArray(numbers : number[]) : number {
    return numbers.reduce((acc, current) => (acc + current), 0);
}


console.log(sumArray([1, 15, 4,7,5]));




    // 
}