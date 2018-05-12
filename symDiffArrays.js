// Function is supposed to find the symmetric difference of a set of arrays.
// It could be two or more arrays passed to the function.

function sym(args) {
  
  // Using spread operator on arguments to create an array
  var inputArrays = [...arguments]
  // Flatten the array first and then we can reduce and use another array function to help us find duplicate values.
  // 
  var temp = inputArrays.reduce( function(acc, currentVal) {
    return acc.concat(currentVal)
  },[]
  )
  console.log('flattened array ', temp) 
  var symmDiff = temp.reduce( function (acc, currentVal, currentIndex, array) {
    //
    // If we find one value and then from that index find a second value, that means we have two values and it can't be unique
    // to the set.
    if (array.indexOf(currentVal) !== -1 && array.indexOf(currentVal, (array.indexOf(currentVal)+1)) !== -1) {
        return acc
    }
    return acc.concat(currentVal)
  },[]
  )

  return symmDiff
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))
