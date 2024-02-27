//Practice 3.1
let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList.length);
shoppingList[1] = "Banana";
console.log(shoppingList);

//Practice 3.2
let shoppingList2 = ["Milk", "Bread", "Apples"];
shoppingList.splice(1, 1, "Bananas", "Egg");
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);
shoppingList.sort();
console.log(shoppingList);
let milkIndex = shoppingList.indexOf("Milk");
console.log(milkIndex);
shoppingList.splice(1, 0 , "Carrot", "Lettuce");
console.log(shoppingList);
let newList = ["Juice", "Pop"];
let combinedLists = shoppingList.concat(newList, newList);
console.log(combinedLists);
let popLastIndex = combinedLists.lastIndexOf("Pop");
console.log(popLastIndex);

//Chapter Project
//manipulating an array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

theList.shift() && theList.pop();
console.log(theList);
theList.splice(0, 0, "FIRST");
theList[3] = "hello World!";
theList.push("LAST");
console.log(theList);

//company product catalogue
// Empty array to hold an inventory of store items.
const inventory = [];

// 2. Created three items, each having the properties of name, model, cost, and quantity.
const item1 = {
  name: "Smartphone",
  model: "XYZ-123",
  cost: 299.99,
  quantity: 10,
};

const item2 = {
  name: "Laptop",
  model: "ABC-456",
  cost: 799.99,
  quantity: 5,
};

const item3 = {
  name: "Headphones",
  model: "HD-789",
  cost: 49.99,
  quantity: 20,
};

// 3. Add all three objects to the main array using an array method.
inventory.push(item1, item2, item3);

// 4. Access the quantity element of your third item and log it to the console.
console.log("Quantity of headphones:", inventory[2].quantity);

// Experiment by adding and accessing more elements within your data structure.
// For example:
const newItem = {
  name: "Tablet",
  model: "TAB-567",
  cost: 199.99,
  quantity: 8,
};
inventory.push(newItem);

console.log("Updated inventory:", inventory);
