import { FlyBehavior } from './fly-behavior';
import { QuackBehavior } from './quack-behavior';

export abstract class Duck {
  private flyBehavior?: FlyBehavior;
  private quackBehavior?: QuackBehavior;

  abstract display(): void;

  setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }

  performFlyBehavior(): void {
    this.flyBehavior?.fly();
  }

  performQuackBehavior(): void {
    this.quackBehavior?.quack();
  }

  swim(): void {
    console.log('All ducks float!');
  }
}
