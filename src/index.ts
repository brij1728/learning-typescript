import "./index.css";
// import {./app, ./person, ./player, ./result} from "./pluralsight";

import "./chapter-01";

import { add } from "./common/math";

import "./pluralsight/app";
import "./pluralsight/person";
import "./pluralsight/player";
import "./pluralsight/result";

export class C {
  private x = 17;
  getX = () => this.x;
  setX = (newVal: number) => {
    this.x = newVal;
  };
}

export let x = new C();
export let y = { ...{ some: "value" } };

console.log(add(3, 4));
