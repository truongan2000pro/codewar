let test = [1,2,2,3,3,4,5,6,7,6,5,4,1]

function removeDup(arr){
  let outputArray = []
  for(let i = 0 ; i < arr.length;i++ ){
    let isExist = false
    for(let j = 0 ; j<i;j++){
      if(arr[i] === arr[j]){
        isExist=true
        break;
      }
    }
  if(isExist == false){
    outputArray.push(arr[i])
  }
  }
  console.log(outputArray) ;
}
removeDup(test)
