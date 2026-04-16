"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test-db';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from MEVN backend!' });
});
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', db: mongoose_1.default.connection.readyState });
});
// Database connection
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Backend is running on http://localhost:${PORT}`);
    });
})
    .catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
