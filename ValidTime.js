function validTime(a){
    const splitedTime = a.split(':')
    if(splitedTime[0]>24 || splitedTime[1]>59){
        return false
    }
        return true
}
console.log(validTime("04:32."))
