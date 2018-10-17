import GenerationEngine from './generation/engine.js';
import express from 'express';

const engine = new GenerationEngine();
const app = express();

engine.start();

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: engine.generation.newDragon() });
});

module.exports = app; 
