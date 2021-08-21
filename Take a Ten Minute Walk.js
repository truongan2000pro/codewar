function isValidWalk(walk) {
  let v=0
  let h=0
  //insert brilliant code here
  for(let i=0;i<walk.length;i++){
    if( walk.length!==10 ){
//   console.log(true)
      return false;
    }
    else if(walk.length==10){
        if(walk[i]=="s" ){
      v+=1
    }
    else if(walk[i]=="n"){
      v-=1
    }
    else if(walk[i]=='w'){
      h+=1
    }
    else if(walk[i]=='e'){
      h-=1
    }
    }
    }
   if(v==0 && h==0){
     
  return true;
   }
}
