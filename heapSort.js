let arr = [31,53,59,26,41,98,99]
heapSort(arr);
function heapSort(arr) {
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    let temp = arr[i];
    let child;
    let larger;
 
      if (arr[leftNode(i)] < arr[rightNode(i)]) {
        larger = arr[rightNode(i)];
        child = rightNode(i);
      }
      if (arr[leftNode(i)] > arr[rightNode(i)]) {
        larger = arr[leftNode(i)];
        child = leftNode(i);
      }
      if (temp < larger) {
        arr[i] = larger;
        arr[child] = temp;
        reCheck(arr, child);
      }
      if (temp > larger) {
        arr[i] = temp;
      }
      console.log(arr);
    
  }
  // console.log(arr)
}
function leftNode(n) {
  return 2 * n + 1;
}
function rightNode(n) {
  // console.log(2*n+2)
  return 2 * n + 2;
}
function reCheck(arr, i) {
  let needTocompare = arr[i];
  let saveIndex;
  let larger;
  if (leftNode(i) < arr.length || rightNode(i) < arr.length) {
    if (arr[leftNode(i)] < arr[rightNode(i)]) {
      larger = arr[rightNode(i)];
      saveIndex = rightNode(i);
    }
    if (arr[leftNode(i)] > arr[rightNode(i)]) {
      larger = arr[leftNode(i)];
      saveIndex = leftNode(i);
    }
    if (needTocompare < larger) {
      arr[i] = larger;
      arr[saveIndex] = needTocompare;
    }
    if (needTocompare > larger) {
      a[i] = needTocompare;
    }
  }
}
