

// const arr = ['A', 'B', 'C'];
// arr.forEach(e => console.log(e));

// console.log("---");
// const nums = [1,2,3];
// nums.forEach(e => console.log(e));

// console.log("---");
// arr.forEach (function(ch) {
//     console.log(ch);
// });

const nums = [1,2,3];

console.log("---");

function print (num) {
    console.log(num);
    //num = -num; // works
    return -num;
} 

nums.forEach(print);

console.log("---");
nums.forEach(e => console.log(e));

console.log("---");
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    nums[i] = -nums[i];
}

console.log("---");
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log("------");
for (let i = 0; i < nums.length; i++) {
    nums[i] = print(nums[i]);
}

console.log("---");
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}