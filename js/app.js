function pow(x, n) {
  if(n != 1) {
    return x * pow(x, n-1);
  }
  else {
    return x;
  }
}
alert(pow(3, 4));
console.log(pow(3, 4));


// function pow(x, n) {
//   let result = 1;
//   for(let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// alert(pow(3, 4));



// pow(x, n) = x * pow(x, n-1);

// pow(2, 3) = 2 * pow(2, 2);
// pow(2, 2) = 2 * pow(2, 1);
// pow(2, 1) = 2;