var findDisappearedNumbers = function(nums) {
    let set = new Set(nums) // store all number in set
    const result = [] // store result
    for(let i = 1; i<=nums.length; i ++){
        if(!set.has(i)) result.push(i)
    }
    return result;
};