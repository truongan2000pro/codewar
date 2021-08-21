let string ="12"
function test(string,result){
	//  if(string.length==0){
	 	console.log(result)
	//  }
	 for ( let i = 0 ; i < string.length; ) { 
       let rest = string.substring ( 0 , i )+ string.substring ( i + 1 ) 
       console.log(i)
      //  console.log(result)
	     test(rest , result + string[ i ])
       i++
       console.log("pass",i)
      }
}
test(string,"")
