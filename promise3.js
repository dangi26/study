const npro2=(arr)=>{
    return new Promise((resolve,reject)=>{
        if(arr.length !=0){
            resolve(arr);
        }
        else{
            reject('null')
        }
    })
}
npro2([2,5,6,4]).then((result)=>{
    return new Promise((res,rej)=>{
        if(result.length!=0){
            result.push(6);
            res(result);
        }
        else{
            rej('cant be added');
        }
    }).then((result2)=>{
        console.log(result2);
    })
}).catch((e)=>{
    console.log(e);    
})