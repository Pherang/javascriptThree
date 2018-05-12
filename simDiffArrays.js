// Function is supposed to find the symmetric difference of a set of arrays.
// It could be two or more arrays passed to the function.

function sym(args) {
  
  // Using spread operator on arguments to create an array
  var symmetricalDiff = [...arguments]
  // Flatten the array first and then we can reduce and use another array function to help us find duplicate values.
  // 
  var temp = symmetricalDiff.reduce( function(acc, currentVal) {
    return acc.concat(currentVal)
  },[]
  )
   
  return temp
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))

