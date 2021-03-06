// Function is supposed to find the symmetric difference of a set of arrays.
// It could be two or more arrays passed to the function.
// Note that the challenge treated duplicate numbers as invalid in a set of symmetrical difference numbers.

function sym(args) {
  var symmDiff = [] 
  var tempArray1 = [...arguments]
  var tempArray2 = []
  console.log('Original arrays were ', tempArray1) 
  // The way javascript works, calling symDiff = tempArray.reduce
  // Javascript will start that call and then move onto the next statement
  // I had return symDiff below before but that resulted in an empty array returning everytime
  //
  
  tempArray1.forEach( function(element) {
    
    tempArray2.push( 
      element.reduce( function (accumulator, currentValue, currentIndex, array) {
        if (accumulator.indexOf(currentValue) === -1) {
          accumulator.push(currentValue)
        }
        console.log(accumulator) 
        return accumulator
      },[])
    )
  })
  console.log('After cleanup ', tempArray2)

  return symDiff = tempArray2.reduce( function (accumulator, currentValue, currentIndex, array) {
    
    console.log(accumulator)
    if (currentIndex <= (array.length - 2))  {
      array[currentIndex+1].forEach( function (element) {
        if (accumulator.indexOf(element) !== -1) {
          accumulator.splice( accumulator.indexOf(element), 1)
        } else {
          accumulator.push(element)
        }
      })
    }

    return accumulator
  },tempArray2[0]
  )
}

var doh = sym([1, 1, 2, 5],[2,2,3,5],[3,4,5,5])
console.log(doh)
var doh2 = sym([1, 1, 2, 3,4,4],[1,5,6])
console.log(doh2)

// var ok = sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
// console.log('ok is ',ok)
