'use strict';
class Greeter {
  constructor(message) {
    this.message = message;
  }

  greet() {
    let element = document.querySelector('#message');
    element.textContent = this.message;
  }
}

export let greeter = new Greeter('Hello World!');
