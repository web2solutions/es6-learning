'use strict';

import person from 'person.js';

class men extends person {
  constructor(name) {

  	super(name);

    this.gender = 'male';
    this.clother = 'blue';
  }
}

export default men;