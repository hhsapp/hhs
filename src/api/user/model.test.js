import { User } from '.'

let user

beforeEach(async () => {
  user = await User.create({ name: 'test', email: 'test', mobileNumber: 'test', age: 'test', gender: 'test', password: 'test', bloodGroup: 'test', height: 'test', weight: 'test', userType: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = user.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.name).toBe(user.name)
    expect(view.email).toBe(user.email)
    expect(view.mobileNumber).toBe(user.mobileNumber)
    expect(view.age).toBe(user.age)
    expect(view.gender).toBe(user.gender)
    expect(view.password).toBe(user.password)
    expect(view.bloodGroup).toBe(user.bloodGroup)
    expect(view.height).toBe(user.height)
    expect(view.weight).toBe(user.weight)
    expect(view.userType).toBe(user.userType)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = user.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.name).toBe(user.name)
    expect(view.email).toBe(user.email)
    expect(view.mobileNumber).toBe(user.mobileNumber)
    expect(view.age).toBe(user.age)
    expect(view.gender).toBe(user.gender)
    expect(view.password).toBe(user.password)
    expect(view.bloodGroup).toBe(user.bloodGroup)
    expect(view.height).toBe(user.height)
    expect(view.weight).toBe(user.weight)
    expect(view.userType).toBe(user.userType)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
