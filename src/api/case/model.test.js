import { Case } from '.'

let caseObj

beforeEach(async () => {
  caseObj = await Case.create({ userId: 'test', doctorId: 'test', details: 'test', symptoms: 'test', readings: 'test', caseStatus: 'test', diagnosis: 'test', prescription: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = caseObj.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(caseObj.id)
    expect(view.userId).toBe(caseObj.userId)
    expect(view.doctorId).toBe(caseObj.doctorId)
    expect(view.details).toBe(caseObj.details)
    expect(view.symptoms).toBe(caseObj.symptoms)
    expect(view.readings).toBe(caseObj.readings)
    expect(view.caseStatus).toBe(caseObj.caseStatus)
    expect(view.diagnosis).toBe(caseObj.diagnosis)
    expect(view.prescription).toBe(caseObj.prescription)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = caseObj.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(caseObj.id)
    expect(view.userId).toBe(caseObj.userId)
    expect(view.doctorId).toBe(caseObj.doctorId)
    expect(view.details).toBe(caseObj.details)
    expect(view.symptoms).toBe(caseObj.symptoms)
    expect(view.readings).toBe(caseObj.readings)
    expect(view.caseStatus).toBe(caseObj.caseStatus)
    expect(view.diagnosis).toBe(caseObj.diagnosis)
    expect(view.prescription).toBe(caseObj.prescription)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
