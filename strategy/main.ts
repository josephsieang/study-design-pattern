import { AnimalsSimulator } from './animals-simulator';
import { DucksSimulator } from './ducks-simulator';

function main(): void {
  console.log('----------------------------------------------------------------');

  const animalsSimulator = new AnimalsSimulator();
  animalsSimulator.showAnimalsSound();

  console.log('----------------------------------------------------------------');

  const ducksSimulator = new DucksSimulator();
  ducksSimulator.demoDucks();

  console.log('----------------------------------------------------------------');
}

main();
