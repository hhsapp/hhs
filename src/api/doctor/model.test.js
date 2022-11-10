import { Doctor } from '.'

let doctor

beforeEach(async () => {
  doctor = await Doctor.create({ name: 'test', email: 'test', mobileNumber: 'test', password: 'test', gender: 'test', userType: 'test', profilePicture: 'test', age: 'test', experience: 'test', hospitalName: 'test', specalities: 'test', education: 'test', fcmId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = doctor.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doctor.id)
    expect(view.name).toBe(doctor.name)
    expect(view.email).toBe(doctor.email)
    expect(view.mobileNumber).toBe(doctor.mobileNumber)
    expect(view.password).toBe(doctor.password)
    expect(view.gender).toBe(doctor.gender)
    expect(view.userType).toBe(doctor.userType)
    expect(view.profilePicture).toBe(doctor.profilePicture)
    expect(view.age).toBe(doctor.age)
    expect(view.experience).toBe(doctor.experience)
    expect(view.hospitalName).toBe(doctor.hospitalName)
    expect(view.specalities).toBe(doctor.specalities)
    expect(view.education).toBe(doctor.education)
    expect(view.fcmId).toBe(doctor.fcmId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = doctor.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doctor.id)
    expect(view.name).toBe(doctor.name)
    expect(view.email).toBe(doctor.email)
    expect(view.mobileNumber).toBe(doctor.mobileNumber)
    expect(view.password).toBe(doctor.password)
    expect(view.gender).toBe(doctor.gender)
    expect(view.userType).toBe(doctor.userType)
    expect(view.profilePicture).toBe(doctor.profilePicture)
    expect(view.age).toBe(doctor.age)
    expect(view.experience).toBe(doctor.experience)
    expect(view.hospitalName).toBe(doctor.hospitalName)
    expect(view.specalities).toBe(doctor.specalities)
    expect(view.education).toBe(doctor.education)
    expect(view.fcmId).toBe(doctor.fcmId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
