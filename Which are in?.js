// // 
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

function inArray(arr1,arr2){
  let r= []
  arr2.map(function(arr2Char) {
    arr1.map(function(arr1char){
      if(arr2Char.indexOf(arr1char) != -1){
        if(r.indexOf(arr1char) == -1){
          r.push(arr1char)
        }
      }
    })
})
  return r.length>0 && r[0] != "" ? r.sort(): []
}
console.log(inArray( ["live", "arp", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))
