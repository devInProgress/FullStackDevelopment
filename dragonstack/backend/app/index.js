import GenerationEngine from './generation/engine.js';
import express from 'express';
import dragonRouter from './api/dragon';
import generationRouter from './api/generation';

const engine = new GenerationEngine();
const app = express();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();

module.exports = app; 
