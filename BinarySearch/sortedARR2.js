/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while ( left <= right){
        const mid = Math.floor((left+right)/2)
        if ( nums[mid] == target){
            return true
        }
        if( nums[left] == nums[mid] && left != mid ){
            left++
            continue
        } // this was the conditiobn where the duplicates have been handled
        if( nums[left] <= nums[mid]){
            if( target <= nums[mid] && target >= nums[left]){
                right = mid
            }else{
                left = mid+1
            }
        }else{
            if( target >= nums[mid+1] && target <= nums[right]){
                left = mid + 1
            }else{
                right = mid
            }
        }

    }
    return false
};
//  the issue was caused due to the duplicates causing ambiguity in finding the sorted half. 
