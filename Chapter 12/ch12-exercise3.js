function myFun() {
  let lastOne = "";
  for (let i = 0; i < arguments.length; i++) {
    lastOne = arguments[i];
  }
  return lastOne;
};

console.log(myFun("Porsche", "Bentley", "Aston-Martin", "Lamborghini"));