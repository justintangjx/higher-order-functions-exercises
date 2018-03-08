// function countDown(n) {
//     if(n < 0) {
//         return;
//     };
//     if(n===0) {
//         console.log(n);
//     }
//     if(n >= 1) {
//        console.log(n);
//        countDown(n-1);
//   };
// }
// countDown(3);

function reverse(str) {
  if (str.length === 0) {
    return;
  }
  if (str.length === 1) {
    return str;
  }
  if (str.length > 1) {
    // console.log(str.slice(1, str.length + 1));
    // console.log(str.length + 1);
    return reverse(str.slice(1, str.length + 1)) + str[0];
  }
}
console.log(reverse("abcd"));
