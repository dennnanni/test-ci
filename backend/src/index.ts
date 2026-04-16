import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test-db';

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello from MEVN backend!' });
});

app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', db: mongoose.connection.readyState });
});

app.get('/api/message', (req: Request, res: Response) => {
    res.json({ text: 'Hello from your Express Backend!' });
});

// Database connection
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Backend is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
