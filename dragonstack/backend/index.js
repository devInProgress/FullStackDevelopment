import GenerationEngine from './engine.js';

const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
  engine.stop();
}, 20000);