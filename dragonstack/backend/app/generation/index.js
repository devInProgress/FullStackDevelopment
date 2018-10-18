import { SECONDS, REFRESH_RATE } from '../config.js';
import Dragon from '../dragon.js';

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
    this.generationId = null;
  }
  
  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));
    const msUntilExpiration = Math.random() < 0.5 ?
      refreshRate - expirationPeriod :
      refreshRate + expirationPeriod;
    
    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }

    return new Dragon();
  }
}

module.exports = Generation;