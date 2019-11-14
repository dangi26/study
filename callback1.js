console.log('hii');
function abc(callback){
    setTimeout(()=>{
        callback(console.log('hello'))
    },2000)
}
abc(()=>{
    console.log('how');
    
})
