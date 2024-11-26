// const car = {
//   name: 'Basic car',
//   wheels: 4,
//   doors: 4,
//   beep: function () {
//     console.log(`${this.name} make beep`);
//   }
// }

// const jeep = {
//   ...car,
//   name: 'Jeep',
//   doors: 5,
//   height: 245
// }

// const truck = {
//   ...car,
//   name: 'Truck',
//   doors: 2,
//   wheels: 8,
// }

// const wrangler = {
//   ...jeep,
//   name: 'Jeep Wrangler',
//   price: '100$',
//   start: function () {
//     console.log(`${this.name} start engine`);
    
//   }
// }

// console.log('car',car);

// console.log('jeep',jeep);
// console.log('truck',truck);


// truck.beep();
// jeep.beep();
// car.beep();
// wrangler.beep();
// wrangler.start();




class Car {
  #price = 500;

  constructor(name, wheels, doors){
    this.name = name;
    this.wheels = wheels;
    this.doors = doors;
  }

  getPrice(){
    console.log(`Price: ${this.#price}`);
  }

  setPrice(newPrice){
    this.#price = newPrice
    console.log(`Price has been changed: ${this.#price}`);
  }

  #clearPrice(){
    this.#price = 0;
  }

  start() {
    console.log(`${this.name} start engine`);
    this.#clearPrice()
  }
}

class Truck extends Car {
  constructor(name, wheels, doors, weight){
    super(name, wheels, doors)
    this.weight = weight
  }

  getWeight(){
    console.log(`${this.name} weight ${this.weight}kg`);
  }

  start() {
    console.log(`${this.name} start engine`);
  }
}

const jeep = new Car('Jeep', 4, 4);
const lada = new Car('Lada', 4, 4);
const scania = new Truck('Scania', 8, 2, 1250);

// console.log(jeep);
// jeep.start();
// lada.start();
// console.log(scania);
// scania.getWeight()
// scania.start()

// jeep.getPrice();
// jeep.setPrice(750);
jeep.getPrice();
jeep.start();
jeep.getPrice();

scania.getPrice();
scania.start();
scania.getPrice();


