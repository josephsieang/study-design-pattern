import { FakeQuack, FlyNoWay, FlyWithRocket, FlyWithWings, MuteQuack, Quack } from './behaviors';
import { Duck } from './models';

export class DucksSimulator {
  decoyDuck: Duck = new DecoyDuck();
  mallardDuck: Duck = new MallardDuck();

  demoDucks(): void {
    this.decoyDuck.display();
    this.decoyDuck.performFlyBehavior();
    this.decoyDuck.performQuackBehavior();
    this.decoyDuck.swim();

    console.log('----------------------------------------------------------------');

    this.mallardDuck.display();
    this.mallardDuck.performFlyBehavior();
    this.mallardDuck.setFlyBehavior(new FlyWithRocket());
    this.mallardDuck.performFlyBehavior();
    this.mallardDuck.performQuackBehavior();
    this.mallardDuck.setQuackBehavior(new FakeQuack());
    this.mallardDuck.performQuackBehavior();
    this.mallardDuck.swim();
  }
}

class DecoyDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehavior(new FlyNoWay());
    this.setQuackBehavior(new MuteQuack());
  }

  display(): void {
    console.log('I am decoy duck!');
  }
}

class MallardDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehavior(new FlyWithWings());
    this.setQuackBehavior(new Quack());
  }

  display(): void {
    console.log('I am mallard duck!');
  }
}
