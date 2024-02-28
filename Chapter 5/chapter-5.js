//CHAPTER PROJECT
//math multiplication table
const finalTable = [];
const value = 10;

for (let i = 0; i < value; i++) {
  let tempArr = [];
  for (let j = 0; i < value; i++) {
    tempArr.push(i * j);
  };
  finalTable.push(tempArr);
};