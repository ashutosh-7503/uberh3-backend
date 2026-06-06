import express from 'express';
import cors from 'cors';
import heatmapRoutes from './routes/heatmap.routes.js'
import { PORT } from './config/constants.js';
import { startIngester } from './ingester.js';

const app=express();
app.use(cors());
app.use(express.json());
app.use('/api',heatmapRoutes);
app.use(express.static('public'));
app.listen(PORT,()=>console.log(`Server runnning on port ${PORT}`));
startIngester();