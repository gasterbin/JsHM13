class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  move() {
    console.log(`${this.constructor.name} is moving.`);
  }

  say() {
    console.log(`${this.constructor.name} is making a sound.`);
  }

  eat() {
    console.log(`${this.constructor.name} is eating.`);
  }

  static isAnimals(instance) {
    return instance instanceof Animals;
  }
}

class Mammals extends Animals {
  static maxAge = 20;
  static maxWeight = 200;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isMammals(instance) {
    return instance instanceof Mammals;
  }
}

class Birds extends Animals {
  static maxAge = 10;
  static maxWeight = 50;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    console.log(`${this.constructor.name} is flying.`);
  }

  static isBirds(instance) {
    return instance instanceof Birds;
  }
}

class Fish extends Animals {
  static maxAge = 15;
  static maxWeight = 100;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    console.log(`${this.constructor.name} is swimming.`);
  }

  static isFish(instance) {
    return instance instanceof Fish;
  }
}

class Predators extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  eat() {
    console.log(`${this.constructor.name} is hunting.`);
  }

  static isPredators(instance) {
    return instance instanceof Predators;
  }
}

class Whales extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isWhales(instance) {
    return instance instanceof Whales;
  }
}

class Primates extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isPrimates(instance) {
    return instance instanceof Primates;
  }
}

class Dog extends Predators {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isDog(instance) {
    return instance instanceof Dog;
  }
}

class Dolphin extends Whales {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isDolphin(instance) {
    return instance instanceof Dolphin;
  }
}

class Human extends Primates {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isHuman(instance) {
    return instance instanceof Human;
  }
}

const dog1 = new Dog(5, "Rex", 20, 4);
const dog2 = new Dog(3, "Buddy", 18, 4);

const dolphin1 = new Dolphin(10, "Flipper", 1000, 0);
const dolphin2 = new Dolphin(8, "Dolly", 900, 0);

const human1 = new Human(30, "John", 70, 4);
const human2 = new Human(25, "Anna", 65, 4);

dog1.move();
dog2.eat();
console.log(Dog.isDog(dog1));

dolphin1.say();
dolphin2.move();
console.log(Dolphin.isWhales(dolphin2));

human1.say();
human2.move();
console.log(Human.isPrimates(human1));
