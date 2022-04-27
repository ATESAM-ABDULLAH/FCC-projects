function telephoneCheck(str) {
  let reg1=/^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/;
  let reg2=/^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/;
  let reg3=/^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/;
  if(reg1.test(str)||reg2.test(str)||reg3.test(str)){
    return true;
  }
  else {
    return false;
  }
}

telephoneCheck("555-555-5555");