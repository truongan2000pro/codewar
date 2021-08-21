function pigIt(str){
  let strArr = str.split(" ");
  let punctuations = [".", ",", ":", "!", "?"];
  let outputStr=""
  console.log(strArr)
  for (let i =0 ; i < strArr.length; i++){
    // let char = strArr[i]
      let charArr = strArr[i].split("")
      let temp = charArr[0]
      if(charArr.length>=1 && punctuations.indexOf(charArr[0]) < 0)
      {
        if(charArr.length==1){
          outputStr += charArr.join("")+"ay"+ " "
        }
        else{
          charArr.shift()
          charArr[charArr.length-1] += temp + "ay"
          i<strArr.length-1? outputStr += charArr.join("")+" " : outputStr += charArr.join("")
        }
        }
      else if(charArr.length==1 && punctuations.indexOf(charArr[0]) != -1)
      {
        outputStr += charArr[0]
      }
}   
  return(outputStr)
}
console.log(pigIt("Pig o O latin is cool !"))
