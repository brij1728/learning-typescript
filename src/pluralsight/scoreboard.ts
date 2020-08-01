import { Result } from "./result";

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResults: Result): void {
    this.results.push(newResults);
  }

  updatScoreboard(): void {
    let output: string = `<h2>Scoreboard</h2>`;

    for (let index = 0; index < this.results.length; index++) {
      const result: Result = this.results[index];
      output += `<h4>${result.playerName}: ${result.score} / ${result.problemCount} for factor ${result.factor}</h4>`;
    }

    const scoreElement = document.querySelector("#scores") as HTMLElement;
    // if (scoreElement) {
    //   //   scoreElement.innerHTML = `Type here is HTMLElement , not null`;
    //   scoreElement.innerHTML = output;
    // }
    scoreElement.innerHTML = output;
  }
}
