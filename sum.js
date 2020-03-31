// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

process.argv.splice(0, 2);
let nums = process.argv;
console.log(nums);
let sum = 0;

// console.log(nums);

// loop through the array
for (let num of nums) {
  // console.log(num, nums);
  const numProper = Number(num);
  // check to see if its a legit number (NaN means no!)
  if (!isNaN(numProper)) {
    sum += numProper; // sum = sum + num
  }
}
// add each number into sum

console.log('Final Sum:', sum);