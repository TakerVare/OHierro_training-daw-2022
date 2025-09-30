function evenNumbers() {
    let result = "2";
    for(let i=4; i<100; i++){
        if(i%2===0){
            result = result+', '+i
        }
        
    }
    
    console.log(result)
}

evenNumbers();
// expected output 2,4,6,8,10......98