var twoSum = function(nums, target) {
    
    const map = new Map();

    for(let i =0; i< nums.length; i++){
        const need = target - nums[i] //x+y = target, y = target-x

        //Check if complement already exists
        if(map.has(need)){
            return [map.get(need),i]
        }
        map.set(nums[i],i)
    }

    return [];
    
};