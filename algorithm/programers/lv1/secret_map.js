function solution(n, arr1, arr2) {
    const arr1Binary = [];
    const arr2Binary = [];
    let sumArr = [];

    arr1.forEach(element => {
        arr1Binary.push(parseInt(element.toString(2).padStart(5,0)))
    });
    arr2.forEach(element => {
        arr2Binary.push(parseInt(element.toString(2).padStart(5,0)))
    });   

    for(let i = 0; i<n; i++){
        let sumVal = String(arr1Binary[i] + arr2Binary[i]);
        if(sumVal.length < n) {
            sumVal = '0'.repeat(n-sumVal.length)+sumVal
        } 
        sumArr.push(sumVal);
    }

    const answer = sumArr.map((element)=>{
        let tag = '';
        for(let i = 0;i<element.length;i++){
            console.log(element)
            if(element[i]>0){
                tag = tag.concat('#')        
            }else if(element[i] == 0){
                tag = tag.concat(' ') 
            }
        }
        return tag
    })

    return answer

    //console.log(arr1Binary,arr2Binary,sumArr,answer)
}

//console.log( solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]) )
console.log( solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10]) )
console.log( solution(5,[0,0,0,0,0],[30,1,21,17,28]))   