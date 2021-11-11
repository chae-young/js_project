const testPr = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve(1)
    },1000)
})
testPr.then((res)=>{
    console.log(res)
})

async function test(){
    try{
        const a = await testPr
        console.log(a)
    }catch(error){
        console.log(error)
    }
}
test()
