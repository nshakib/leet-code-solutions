var smallerNumbersThanCurrent = function(nums) {

    let smaller = []
    
    for(let i = 0; i<nums.length; i++){
        let count = 0;
        for(let j = 0; j<nums.length; j++){
            
            if(nums[j]<nums[i]){
                count ++
            }
        }
        smaller.push(count)
    }
    return smaller;
};

// More Optimize splution
var smallerNumbersThanCurrent = function(nums) {
    let sorted = [...nums].sort((a,b) => a-b);

    const map = new Map();
    for(let i= 0; i<sorted.length; i++){
        if(!map.has(sorted[i])){
            map.set(sorted[i], i)
        }
    }
    return nums.map(num => map.get(num));
};