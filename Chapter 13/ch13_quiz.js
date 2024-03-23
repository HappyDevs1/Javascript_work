function addOne(val){
  return val + 1;
 }
 function total(a, b, callback){
  const sum = a + b;
  return callback(sum);
 }
 console.log(total(4, 5, addOne()));