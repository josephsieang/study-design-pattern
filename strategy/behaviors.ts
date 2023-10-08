import { FlyBehavior, QuackBehavior } from './models';

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't fly!");
  }
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying!");
  }
}

export class FlyWithRocket implements FlyBehavior {
  fly(): void {
    console.log("I'm flying with a rocket!");
  }
}

export class FakeQuack implements QuackBehavior {
  quack(): void {
    console.log('Roar!');
  }
}

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack!');
  }
}

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('No sound!');
  }
}
