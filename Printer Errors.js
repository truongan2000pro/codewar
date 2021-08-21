function printerError(s) {
let length = s.length 
let errCount = 0
let goodLetters='abcdefghijklm'
  for(let letter of s){
    if(goodLetters.indexOf(letter)==-1){
      errCount+=1
    }
    
  }
  return errCount + "/" + length;
}
