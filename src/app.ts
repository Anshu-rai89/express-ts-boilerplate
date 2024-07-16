import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
    res.send('Server is healthy');
});

export default app;
