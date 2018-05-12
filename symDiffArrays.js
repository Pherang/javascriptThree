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
  
  var symmDiff = temp.reduce( function (acc, currentVal, currentIndex, array) {
    //
    // Add the current value if it's unique in the flattened array.
    
    debugger
    console.log('Did we find a duplicate ', array.indexOf(currentVal, currentIndex) )
    if (array.indexOf(currentVal, currentIndex) === -1){
      return acc.concat(currentVal)
    }
    return acc
  },[]
  )

  return symmDiff
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))
