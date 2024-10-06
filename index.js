import express from 'express';
import { noteRouter } from './routes/notes-routes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

await mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(express.json());

app.use(cors())
app.use(express.json())
app.use(noteRouter)



app.listen(3000, () => {
    console.log('App is listening on port 3000')
});