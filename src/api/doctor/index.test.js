import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Doctor } from '.'

const app = () => express(apiRoot, routes)

let doctor

beforeEach(async () => {
  doctor = await Doctor.create({})
})

test('POST /doctors 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', email: 'test', mobileNumber: 'test', password: 'test', gender: 'test', userType: 'test', profilePicture: 'test', age: 'test', experience: 'test', hospitalName: 'test', specalities: 'test', education: 'test', fcmId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.mobileNumber).toEqual('test')
  expect(body.password).toEqual('test')
  expect(body.gender).toEqual('test')
  expect(body.userType).toEqual('test')
  expect(body.profilePicture).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.experience).toEqual('test')
  expect(body.hospitalName).toEqual('test')
  expect(body.specalities).toEqual('test')
  expect(body.education).toEqual('test')
  expect(body.fcmId).toEqual('test')
})

test('GET /doctors 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /doctors/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${doctor.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(doctor.id)
})

test('GET /doctors/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /doctors/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${doctor.id}`)
    .send({ name: 'test', email: 'test', mobileNumber: 'test', password: 'test', gender: 'test', userType: 'test', profilePicture: 'test', age: 'test', experience: 'test', hospitalName: 'test', specalities: 'test', education: 'test', fcmId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(doctor.id)
  expect(body.name).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.mobileNumber).toEqual('test')
  expect(body.password).toEqual('test')
  expect(body.gender).toEqual('test')
  expect(body.userType).toEqual('test')
  expect(body.profilePicture).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.experience).toEqual('test')
  expect(body.hospitalName).toEqual('test')
  expect(body.specalities).toEqual('test')
  expect(body.education).toEqual('test')
  expect(body.fcmId).toEqual('test')
})

test('PUT /doctors/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', email: 'test', mobileNumber: 'test', password: 'test', gender: 'test', userType: 'test', profilePicture: 'test', age: 'test', experience: 'test', hospitalName: 'test', specalities: 'test', education: 'test', fcmId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /doctors/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${doctor.id}`)
  expect(status).toBe(204)
})

test('DELETE /doctors/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
