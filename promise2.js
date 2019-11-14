const npro=(x)=>{                               //nested promise
    return new Promise((resolve,reject)=>{
        if(x!=0){
            resolve(x);
        }
        else{
            reject('zero');
        }
    })
}
npro(6).then((result)=>{
    return new Promise((res,rej)=>{
        if(result%2==0){
            res('even');
        }
        else{
            rej('odd');
        }
    }).then((result2)=>{
        console.log(result2);        
    })
})
.catch((e)=>{
    console.log(e);
    
})