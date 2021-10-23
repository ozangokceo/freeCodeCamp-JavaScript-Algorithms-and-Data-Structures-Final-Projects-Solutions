function telephoneCheck(str) {
    let regex1 = /^\d{10}$/;
    let regex2 = /^\d{3}-\d{3}-\d{4}$/
    let regex3 = /^\(\d{3}[)]\d{3}-\d{4}?$/
    let regex4 = /^\(\d{3}[)] \d{3}-\d{4}$/
    let regex5 = /^\d{3} \d{3} \d{4}$/
    let regex6 = /^[1] \d{3} \d{3} \d{4}$/
    let regex7 = /^[1] \d{3}-\d{3}-\d{4}$/
    let regex8 = /^[1] \(\d{3}\) \d{3}-\d{4}$/
    let regex9 = /^[1]\(\d{3}\)\d{3}-\d{4}$/
  
    if(regex1.test(str) || regex2.test(str) || regex3.test(str) || regex4.test(str) || regex5.test(str) || regex6.test(str) || regex7.test(str) || regex8.test(str) || regex9.test(str)) {
      return true;
    }
    return false;
  }
  
  console.log(telephoneCheck("1(555)555-5555"));
  
  
  
  //example formats:
  /*
  1 => 5555555555 ok
  2 => 555-555-5555 ok
  3 => (555)555-5555 ok 
  4 => (555) 555-5555 ok
  5 => 555 555 5555 ok
  6 => 1 555 555 5555 ok 
  7 => 1 555-555-5555 ok
  8 => 1 (555) 555-5555 ok
  9 => 1(555)555-5555 ok
  */