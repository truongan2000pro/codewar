// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
function validParentheses(parens){
  let check =0
  if(parens.length%2!==0 && parens.length>0){
    return false
  }
  else{
    for(let i=0;i<parens.length;i++){
    if(parens.charAt(i)=="("){
       check++
    }
    else{
       check--;
    }
    if(check<0){
      return false
    }
  }
  }
  if(check==0){
    return true
  }
  else{
    return false
  }
}
console.log(validParentheses("(())"))
