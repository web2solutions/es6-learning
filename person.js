'use strict';
export default class person {
  constructor(message) {
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
    this.foot = 2;
  }

  speak() {
    let element = document.querySelector('#log');
    element.textContent += "I'm speaking .... ";
  }

  walk() {
    let element = document.querySelector('#log');
    element.textContent += "I'm walking .... ";
  }
}


class women extends person {
  constructor() {
    this.gender = 'female';
    this.clother = 'pink';
  }
}


class men extends person {
  constructor() {
    this.gender = 'male';
    this.clother = 'blue';
  }
}



//export let greeter = new person('Hello World!');
//greeter.greet();

//console.log(greeter);