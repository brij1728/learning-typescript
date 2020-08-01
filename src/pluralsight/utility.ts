export class Utility {
  static getInputValue(elementId: string): string {
    const inputElement = document.querySelector(elementId) as HTMLInputElement;
    console.log(inputElement.value);

    return inputElement.value;
  }
}
