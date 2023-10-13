class Animal {
  constructor(species, sound) {
    this._species = species;
    this._sound = sound;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(this._sound);
  }
}

class Cat extends Animal {
  constructor(species = "Cat") {
    super(species, "purr");
  }

  purr() {
    this.makeSound();
  }
}

class Dog extends Animal {
  constructor(species = "Dog") {
    super(species, "woof");
  }

  bark() {
    this.makeSound();
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
