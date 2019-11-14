const pro=(x)=>{
    return new Promise((resolve, reject)=>{
        if(x!=0){
            resolve('success');
        }
        else{
            reject('fail');
        }
    })
}
pro(3).then((result)=>{
    console.log(result);    
})
.catch((e)=>{
    console.log(e);
    
})
