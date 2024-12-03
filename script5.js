// FIND INDEX OF TWO NUMBERS WHICH SUM ARE EQUAL TO THE TARGET

function findTwoSum(nums , target){
    for(let i=0; i<nums.length; i++){
        for(j=i + 1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};

let nums = [2,7,11,15] 
let target =9;

console.log(findTwoSum(nums , 9));