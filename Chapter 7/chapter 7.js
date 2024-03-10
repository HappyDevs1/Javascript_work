//Classes and Object
/*
class movie {
  name;
  year;
  starring;
  constructor (name, year, starring) {
    this.name = name;
    this.year = year;
    this.starring = starring;
  }
}

let movie1 = new movie ("Lift", 2024, "Kevin Hart");
console.log(movie1);

//Practice Exersise 7.1
class Person {
  constructor (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
let friend1 = new Person ("Themba", "Malinga");
let friend2 = new Person ("Samkelo", "Hlatswayo");
console.log("Hello " + friend1.firstname);
console.log("Hello " + friend2.firstname);

//Practice Exersise 7.2
class Person {
  constructor (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullname() {
    return this.firstname + " " + this.lastname
  }
}
let person1 = new Person ("Themba", "Malinga");
let person2 = new Person ("Samkelo", "Hlatswayo");

console.log(person1.fullname());
console.log(person2.fullname());
*/
class Animals {
  constructor(specie, sound) {
    this.specie = specie;
    this.sound = sound;
  }
  print() {
    return this.specie + " " + this.sound;
  }
}

let animal1 = new Animals ("Lion", "Roar");
let animal2 = new Animals ("Dog", "Bark");

Animals.prototype.eating = function() {
  return this.specie + " " + "is eating"
}
console.log(animal1.eating());
console.log(animal2.eating());

//CHAPTER PROJECTS
//Employee tracking app
class Employee {
  constructor(first, last, years) {
      this.first = first;
      this.last = last;
      this.years = years;
  }
}
const person1 = new Employee("Happy", "Mahlangu", 15);
const person2 = new Employee("Albert", "Burgess", 7);
const workers = [person1, person2];

Employee.prototype.details = function(){
  return this.first + " " + this.last + " has worked here " + this.years + " years";
}

workers.forEach((person) => {
  console.log(person.details());
});

//Project 2
//Menu item price calculator
class Menu {
  #offer1 = 10;
  #offer2 = 20;
  constructor(val1, val2) {
      this.val1 = val1;
      this.val2 = val2;
  }
  calTotal(){
      return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
  }
  get total(){
      return this.calTotal();
  }
}

const val1 = new Menu(2,0);
const val2 = new Menu(1,3);
const val3 = new Menu(3,2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);
