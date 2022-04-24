function palindrome(str) {
  var regex=/[\W_]/g;
  let base=str.toLowerCase().replace(regex,'');
  let revbase=base.split('').reverse().join('');
  return base===revbase;
    
}

var str = prompt("Enter String :");
palindrome(str);