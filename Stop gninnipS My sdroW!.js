function spinWords(string){
  let arrString = string.split(" ")
  console.log(arrString)
  for(let i=0;i<arrString.length;i++){
      if(arrString[i].length>=5){
        let letter = arrString[i].split("")
      for(let j =0;j<((letter.length)/2);j++){
        let temp = letter[j]
        letter[j] = letter[letter.length-1-j]
        letter[letter.length-1-j] = temp

      }
      arrString[i] = letter.join("")
      }
  }
  return arrString.join(" ")
  }
console.log(spinWords("Just kidding there is still one more"))

//Clerver way
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }
