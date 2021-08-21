function reverseString(arr,i){
    let start = i   
    let  end = arr.length-1-i
    if(start < end){
      [arr[start],arr[end]] = [arr[end], arr[start]]
      reverseString(arr,i+1)
    }
}

let a =["a","b","c","d","e"]
reverseString(a,0)
console.log(a)
