
// Function modifies the collection based on the parameters it receives.
/* Requirements:
// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.


If value is empty (""), delete the given prop property from the album. */


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop && value === ""){
    delete collectionCopy[id][prop]
    return collectionCopy;
  }
  if (prop !== "tracks" && value !== "") {
    collectionCopy[id][prop] = value;
    return collectionCopy;
  }
  if (prop === "tracks") {
    if (!collectionCopy[id].hasOwnProperty(prop)) {
      collectionCopy[id].tracks = []
      collectionCopy[id]['tracks'].push(value)
      return collectionCopy;
    } else {
      collectionCopy[id]['tracks'].push(value)
      return collectionCopy;
    }
  }
  return collectionCopy;
}

// Alter values below to test your code
console.log(updateRecords(2468, "tracks", "Free"))
console.log('')

