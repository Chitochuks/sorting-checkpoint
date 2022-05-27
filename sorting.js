const toBeSorted = [2, 8, 5, 3, 4, 1]


const sort = (arr) => { 
  for(i = 1; i < arr.length; i++) {

    const current = arr[i]
    let j = i - 1

    while(j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }

  return arr
};

console.log(sort(toBeSorted))