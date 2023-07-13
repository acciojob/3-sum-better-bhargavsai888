function threeSum(arr, target) {
// write your code here
	let arr=[-1,2,1,-4];
let l=arr.length;
let closest_sum=arr[1]+arr[2]+arr[0];
let target=1;
let sm_difference=Math.abs(target-closest_sum);
for(let i=0; i<l-2;i++){
    for (let j=i+1; j<l-1; j++){
        for (let k=j+1; k<l; k++){
            let sum=arr[i]+arr[j]+arr[k];
            let difference=Math.abs(target-sum);
            if (difference<sm_difference){
                closest_sum=sum;
            }
        }
    }
}

return closest_sum;
  
}

module.exports = threeSum;
