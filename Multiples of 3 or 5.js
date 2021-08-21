function solution(number){
  let sum =0
  if(number < 3){
    return 0
  }
  for(let i=3;i<number;i++){
    if(i%3==0){
      sum+=i
      console.log(i)
    }
    else if(i%5==0){
      sum+=i
      console.log(i)
    }
  }
//   console.log(sum)
  return sum;
}
