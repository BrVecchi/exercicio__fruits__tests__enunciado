import { response } from 'express';
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

    it('Should not create the same fruit', async () => {
        const result = await api.post('/fruits').send(body)
        expect(result.status).toBe(409)
    })

    it('Should return all fruits', async () => {
        const result = await api.get('/fruits')
        const response =  result.body
        expect(result.status).toBe(200)
        expect(response.length).toBe(1)
    })

    it('Should return a specific fruit', async () => {
        const result = await api.get('/fruits/1')
        expect(result.status).toBe(200)
    })
})