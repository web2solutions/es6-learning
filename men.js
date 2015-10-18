'use strict';

import person from 'person';

class men extends person {
  constructor(name) {
  	super(name);
    this.gender = 'male';
    this.clothes = 'blue';
  }
}

export default men;