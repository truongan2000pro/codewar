// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3  because 3*9 = 27, 2*7 = 14, 1*4=4
//                         and 4 has only one digit
                 
//  persistence(999) === 4  because 9*9*9 = 729, 7*2*9 = 126,
//                          1*2*6 = 12, and finally 1*2 = 2
                  
//  persistence(4) === 0 because 4 is already a one-digit number

// persistence(25) === 2  because 2*5 = 10 and finally 1*0 = 1
                  

function persistence(num,count=0) {   
  let arrNum = Array.from(String(num), Number);
  if(num < 10){
    return count
  }
  let number= arrNum.reduce((acc,num) =>{
    acc*=num
    return acc
  },1) 
  // console.log(number)
  return persistence (number,count+=1)
}
console.log( persistence(25))
