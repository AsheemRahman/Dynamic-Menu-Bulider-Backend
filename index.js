import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/menuRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
    });

app.use('/api/menus', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
