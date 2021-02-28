
const arr = ['A', 'B', 'C'];
arr.forEach(e => console.log(e));

console.log("---");

const nums = [1,2,3];
nums.forEach(e => console.log(e));

console.log("---");
arr.forEach (function(ch) {
    console.log(ch);
});

// error
// for (const ch : arr) {
//     console.log(ch);
// }


// error
// for (const num : nums) {
//     console.log(num);
// }