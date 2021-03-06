// Function is supposed to find the symmetric difference of a set of arrays.
// It could be two or more arrays passed to the function.

function sym(args) {
  var symmDiff = [] 
  var tempArray = [...arguments]
  console.log('Original arrays were ', tempArray) 
  // The way javascript works, calling symDiff = tempArray.reduce
  // Javascript will start that call and then move onto the next statement
  // I had return symDiff below before but that resulted in an empty array returning everytime
  //
  return symDiff = tempArray.reduce( function (accumulator, currentValue, currentIndex, array) {
    // Symmetrical difference works by seeing if the next set has elements that the current set doesn't.
    // If the current set doesn't have an element from the next that element is added to the current set.
    // This works for subsequent sets of numbers
    if (currentIndex < (array.length- 1)) {
      array[currentIndex].forEach( function(element) {
        if (array[(currentIndex+1)].indexOf(element) == -1){
          console.log('OK', element )
          accumulator.push(element)
          console.log(accumulator)
        }
      })
      array[currentIndex+1].forEach( function(element) {
        if (array[(currentIndex)].indexOf(element) == -1){
          console.log('OK', element )
          accumulator.push(element)
          console.log(accumulator)
        }
      })

    }
    return accumulator
  },[]
  )
}

var doh = sym([1, 2, 3],[5,2,1,4])
console.log(doh)
var ok = sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
console.log('ok is ',ok)
