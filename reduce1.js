const arr=[2,5,6,8,4,6];
let sum=0;
for(i=0; i<arr.length; i++){
    sum=sum+arr[i];
}
console.log(sum);


const arr1=[5,4,9,7,8,6,4,5,8];
let sum1=0;
const result1=arr1.reduce((sum1,result1)=>{
    return sum+result1;
})
console.log(result1);
