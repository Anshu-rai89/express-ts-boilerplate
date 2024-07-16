import request from 'supertest';
import app from '../src/app';

describe('GET /health', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/health');
        expect(res.status).toEqual(200);
    });

    it('should return "Server is healthy"', async () => {
        const res = await request(app).get('/health');
        expect(res.text).toEqual('Server is healthy');
    });
});
