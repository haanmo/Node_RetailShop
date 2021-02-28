// let, const var class?
// param as object, dictionary?
// param change and display
class Hello {
    constructor (param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    param1;
    param2;

    area() {
        return this.param1 * this.param2;
    }
}

let Person = class {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

class Collection {
    constructor() {
        this.items = [];
    }
    *[Symbol.iterator]() {
        yield *this.items.values();
    }
}
var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let x of collection) {
    console.log(x);
}

console.log("-----");
var p1 = new Person("Haan", 37);
console.log(p1.firstName);
console.log(p1.lastName);

console.log("-----");
var p2 = new Person("Haan", "Johng");
console.log(p2.firstName);
console.log(p2.lastName);

console.log("-----");
var h1 = new Hello("H", 1);
console.log(h1.param1);
console.log(h1.param2);

console.log("-----");
var h2 = new Hello("H", "J");
console.log(h2.param1);
console.log(h2.param2);

console.log("-----");
var company = {
    name: "H'C",
    address: "17601",
    contact: "214"
}
var h3 = new Hello(company, "J");
console.log(h3.param1);
console.log(h3.param2);

console.log("-----");
h3.param1.name = "Haan'C"
console.log(h3.param1);
console.log(h3.param2);

console.log("-----");
var h4 = new Hello(3,4);
console.log(h4.area());

console.log("-----");
var h4 = new Hello("A",4);
console.log(h4.area());
