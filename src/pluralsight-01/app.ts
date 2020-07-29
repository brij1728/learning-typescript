import { Game } from "./game";
import { Player } from "./player";
import { Utility } from "./utility";

let newGame: Game;

//  add click handler to the start game button
const gameButton = document.querySelector("#startGame") as HTMLElement;
gameButton.addEventListener("click", () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue("#playername");

  const problemCount: number = Number(Utility.getInputValue("#problemCount"));
  const factor: number = Number(Utility.getInputValue("#factor"));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

//  add click handler to calculate the score button
document.querySelector("#calculate")!.addEventListener("click", () => {
  newGame.calculateScore();
});
