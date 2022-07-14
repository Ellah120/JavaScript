class MyCar {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

start() {
    console.log("Welcome on board");
  }

  stop() {
    console.log("Goodbye");
  }

  describe() {
    console.log(`This is a ${this.color} ${this.brand} ${this.model} and year of manufacture is ${this.year}`)
  }
}

let ourCar = new MyCar("Mercedes-Benz", "AMG G63", 2019, "Black");
ourCar.start();
