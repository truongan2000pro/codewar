function formatDuration (seconds) {
  if(seconds == 0){
    return "now"
  }
  else if(seconds>0){
      let string =""
      let years = Math.floor(seconds / 31536000)>1? string+= Math.floor(seconds / 31536000) + " years, " :  string+= Math.floor(seconds / 31536000) + " year, " 
      let days = Math.floor((seconds % 31536000) / 86400)>1? string+= Math.floor((seconds % 31536000) / 86400)+" days, ":string+= Math.floor((seconds % 31536000) / 86400)+" day, "  
      let hours = Math.floor(((seconds % 31536000) % 86400) / 3600) > 1? string+=Math.floor(((seconds % 31536000) % 86400) / 3600)+" hours, ":string+=Math.floor(((seconds % 31536000) % 86400) / 3600)+" hour, "
      let minutes =  Math.floor(((seconds % 31536000) % 86400) / 60 % 60) > 1 ? string+=Math.floor(((seconds % 31536000) % 86400) / 60 % 60)+" minutes, ":string+=Math.floor(((seconds % 31536000) % 86400) / 60 % 60) +" minute, "   
      let secs =  ((seconds % 31536000) % 86400) % 60 > 1 ? string+=((seconds % 31536000) % 86400) % 60 +" seconds,":string+=((seconds % 31536000) % 86400) % 60 +" second,"
      let arrString = string.split(" ")
      for(let i=0;i<arrString.length;i++){
        if(arrString[i]=="0"){
          arrString[i]=null 
          arrString[i+1]=null
        }
      }
      let finalString= arrString.filter(function (v) { return v!=null });
      finalString[finalString.length-1] = finalString[finalString.length-1].slice(0,finalString[finalString.length-1].length-1)
      if(finalString.length>2){
        finalString[finalString.length-3] = finalString[finalString.length-3].slice(0,finalString[finalString.length-3].length-1) + " and"
      }
      return finalString.join(' ')
  }
}
console.log( formatDuration(36000000000002))
