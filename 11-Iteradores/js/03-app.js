//Ejercicio Fizz Buzz - 100 numeros

// 3 6 9 12 Fizz
// 5 10 15 20 25 Buzz
//15 30 45 FIZZ BUZZ

for (let i = 1; i < 100; i++) {
    
    if(i%5 === 0 && i%3 === 0){
        console.log(`${i} FIZZ BUZZ`);
    }else if(i%3 === 0){ 
        console.log(`${i}fizz`);
    }else if(i%5 === 0){

        console.log(`${i} buzz`);
    }
    
}