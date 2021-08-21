function solution(str){
  if(str.length%2==0){
     let arrStr = [...str]
     let returnStr=[]
      for(let i = 0 ; i< arrStr.length ; i+=2){
         returnStr.push(arrStr[i]+arrStr[i+1])
         
     }
     return returnStr
  
     
   }
   else{
    let arrStr = [...str]
     let returnStr=[]
      for(let i = 0 ; i< arrStr.length ; i+=2){
         if(i == arrStr.length-1){
         returnStr.push(arrStr[i]+'_')
         }
         else{
         returnStr.push(arrStr[i]+arrStr[i+1])

         }
     }
     return returnStr

   }
}
