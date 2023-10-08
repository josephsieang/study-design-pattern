import { Animal } from './models';

export class AnimalsSimulator {
  private animals: Animal[] = [];

  constructor() {
    this.animals = [new Dog(), new Cat()];
  }

  showAnimalsSound(): void {
    // Demo design principle: programming to interface or abstract class instead of implementation
    // Programming to implementation would be: dog.bark() or cat.meow();
    this.animals.forEach((animal) => animal.makeSound());
  }
}

class Dog extends Animal {
  makeSound(): void {
    this.bark();
  }

  private bark(): void {
    console.log('Dog is Woof');
  }
}

class Cat extends Animal {
  makeSound(): void {
    this.meow();
  }

  private meow(): void {
    console.log('Cat is Meow');
  }
}
