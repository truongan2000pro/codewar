var isSquare = function(n){
  let rootNum = Math.sqrt(n);
  if(n==0){
    return true;
  }
  else if(n <0){
    return false
  }
  if (Number.isInteger(rootNum)){
    return true;
    
  }
  else{
    return false
  }
}
