'use strict';

import person from 'person.js';

class women extends person {
  constructor(name) {
  	super(name);
    this.gender = 'female';
    this.clothes = 'pink';
  }
}

export default women;