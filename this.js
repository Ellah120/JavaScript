const person = {
  name: "Shalom",
  age: 20,
  nigerian: true,
  speak: function(){
    console.log("Hello");
  },
  walk: function(){
    console.log("I am walking");
  }
}
// to call our function inside the object we write the object name.the name of the function... see below
person.speak();
person.walk();

// to change any property in the person object we have two ways
person.name = "Ella";
person["age"] = 30;
console.log(person);


function Person(name, age, height, hobby){
  this.name = name;
  this.age = age;
  this.height = height;
  this.hobby = hobby;
  this.speak = function(){
    console.log(`Hello ${this.name}`);
  };
  this.sayAge = function(){
    console.log(`I am ${this.age} years old`);
  }
}

let student1 = new Person("Ella",20,"6.1","Movies");
student1.speak();
let student2= new Person("Shalom", 23, "7", "Sleeping");
student2.speak();
student2.sayAge();

console.log(student1);
console.log(student2);