const arr=[1,1,2,3,3,4,5,5,6,6,7];            //remove duplication without filter
const result=[];
for(i=0; i<arr.length; i++){
    if(result.indexOf(arr[i])== -1){
        result.push(arr[i]);
    }
}
console.log(result);


const arr1=[5,5,6,5,4,5,5,5,5,7,5,4];               //remove duplication by filter
const result1= arr1.filter((result1,i,arr1)=>{
    return arr1.indexOf(result1)==i;
})
console.log(result1);

