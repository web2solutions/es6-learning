'use strict';

class person {
  constructor(name) {
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
    this.foot = 2;
    this.name = name;
    this.hair = 'black';
  }

  speak() {
    let element = document.querySelector('#log');
    element.innerHTML += this.name + " is speaking .... <br> ";
  }

  walk() {
    let element = document.querySelector('#log');
    element.innerHTML += this.name + " is walking .... <br> ";
    //element.textContent += this.name + " is walking .... <br> ";
  }

  set hairColor(color){
  	this.hair = color;
  }

  static changeEyes() {
    this.eyes = 1;
  }
}

export default person;