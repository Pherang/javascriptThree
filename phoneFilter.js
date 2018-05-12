function telephoneCheck(str) {
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
