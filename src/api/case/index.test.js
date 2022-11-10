import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Case } from '.'

const app = () => express(apiRoot, routes)

let caseObj

beforeEach(async () => {
  caseObj = await Case.create({})
})

test('POST /cases 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ userId: 'test', doctorId: 'test', details: 'test', symptoms: 'test', readings: 'test', caseStatus: 'test', diagnosis: 'test', prescription: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.doctorId).toEqual('test')
  expect(body.details).toEqual('test')
  expect(body.symptoms).toEqual('test')
  expect(body.readings).toEqual('test')
  expect(body.caseStatus).toEqual('test')
  expect(body.diagnosis).toEqual('test')
  expect(body.prescription).toEqual('test')
})

test('GET /cases 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /cases/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${caseObj.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(caseObj.id)
})

test('GET /cases/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /cases/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${caseObj.id}`)
    .send({ userId: 'test', doctorId: 'test', details: 'test', symptoms: 'test', readings: 'test', caseStatus: 'test', diagnosis: 'test', prescription: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(caseObj.id)
  expect(body.userId).toEqual('test')
  expect(body.doctorId).toEqual('test')
  expect(body.details).toEqual('test')
  expect(body.symptoms).toEqual('test')
  expect(body.readings).toEqual('test')
  expect(body.caseStatus).toEqual('test')
  expect(body.diagnosis).toEqual('test')
  expect(body.prescription).toEqual('test')
})

test('PUT /cases/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ userId: 'test', doctorId: 'test', details: 'test', symptoms: 'test', readings: 'test', caseStatus: 'test', diagnosis: 'test', prescription: 'test' })
  expect(status).toBe(404)
})

test('DELETE /cases/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${caseObj.id}`)
  expect(status).toBe(204)
})

test('DELETE /cases/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
