export class Player implements Person {
  name: string;
  constructor() {
    this.name = "";
  }
  age?: number;
  highScore?: number;
  formatName() {
    return this.name.toLocaleUpperCase();
  }
}
