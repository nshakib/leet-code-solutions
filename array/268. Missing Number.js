var missingNumber = function(nums) {
    let xor = 0;
    let n = nums.length;

    for(let i =0; i<=n ; i++) xor ^= i;
    for(num of nums) xor ^= num;
    return xor;
};