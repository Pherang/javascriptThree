function telephoneCheck(str) {
  
  // Some of these regex can probably be refactored. Format 1 and two are similar enough to combine..
  // Format 3 and 4 can also probably be combined.
  // At the same time though, it's easier for someone else to read the filters if they are separated out
  
  var phoneFormat1 = /^\d{3}-\d{3}-\d{4}/
  var phoneFormat2 = /^\(\d{3}\)\d{3}-\d{4}/
  var phoneFormat3 = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}/
  var phoneFormat4 = /^1[\s-]\d{3}[\s-]\d{3}[\s-]\d{4}/
  var phoneFormat5 = /^\d{10}$/;
  
  if (phoneFormat1.test(str)) {
    return true;
  }
  if (phoneFormat2.test(str)) {
    return true;
  }
  if (phoneFormat3.test(str)) {
    return true;
  }
  if (phoneFormat4.test(str)) {
    return true;
  }
  if (phoneFormat5.test(str)) {
    return true;
  }
  
  return false;
}


telephoneCheck("555-555-5555");
