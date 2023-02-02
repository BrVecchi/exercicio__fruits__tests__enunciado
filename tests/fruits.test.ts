import { app } from 'index';
import { FruitInput } from 'services/fruits-service';
import supertest from 'supertest';

const api = supertest(app);

describe('Fruits tests', () => {
    const body: FruitInput = {
        name: "Abacaxi",
        price: 20
    }

    it('Should create a valid fruit', async () => {
        const result = await api.post('/fruits').send(body)

        expect(result.status).toBe(201)
    })
})