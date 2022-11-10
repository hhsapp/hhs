import { success, notFound } from '../../services/response/'
import { Case } from '.'
import { User } from '../user/.'
import { Doctor } from '../doctor/.'
import {sendMessage, sendMessageDoc} from '../../services/push/sendPushUser'

export const create = ({ bodymen: { body } }, res, next) =>
  Case.create(body)
    .then((caseObj) => {
      Doctor.findById(caseObj.doctorId)
        .then(function (user) {
          const message = {
            notification: {
              title: 'New case !!!',
              body: `${body.caseStatus} ${caseObj.details}`
            },
            data: {
              case: caseObj.id
            },
            token: user.fcmId
          }
          sendMessageDoc(message).then().catch()
        }).catch(() => {
        })
      return caseObj.view(true)
    })
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Case.count(query)
    .then(count => Case.find(query, select, cursor)
      .then((cases) => ({
        count,
        rows: cases.map((caseObj) => caseObj.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Case.findById(params.id)
    .then(notFound(res))
    .then((caseObj) => caseObj ? caseObj.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Case.findById(params.id)
    .then(notFound(res))
    .then((caseObj) => caseObj ? Object.assign(caseObj, body).save() : null)
    .then((caseObj) => caseObj ? caseObj.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Case.findById(params.id)
    .then(notFound(res))
    .then((caseObj) => caseObj ? caseObj.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const getCases = ({ params }, res, next) => {
  if (params.appName === 'hhs') {
    return Case.find({ userId: params.id })
      .then(function (cases) {
        let promiseArr = cases.map(function (e) {
          if (e.caseStatus !== 'CLOSED') {
            return Doctor.findById(e.doctorId)
              .then(function (doc) {
                const responseObj = {caseDetail: e, doctorDetail: doc}
                return responseObj
              }).catch(() => {
                const responseObj = {caseDetail: e, doctorDetail: {}}
                return responseObj
              })
          }
        })
        Promise.all(promiseArr).then(function (resultsArray) {
          const responseArray = resultsArray.filter((obj) => obj)
          res.status(200)
          if (responseArray.length > 0) {
            res.send(responseArray)
          } else {
            res.send([])
          }
        }).catch(function (errors) {
          res.status(200)
          res.send([])
        })
      }).catch(next)
  }
  return Case.find({ doctorId: params.id })
    .then(function (cases) {
      let promiseArr = cases.map(function (e) {
        if (e.caseStatus !== 'CLOSED') {
          return User.findById(e.userId)
            .then(function (user) {
              const responseObj = {caseDetail: e, userDetail: user}
              return responseObj
            }).catch(() => {
              const responseObj = {caseDetail: e, userDetail: {}}
              return responseObj
            })
        }
      })
      Promise.all(promiseArr).then(function (resultsArray) {
        const responseArray = resultsArray.filter((obj) => obj)
        res.status(200)
        if (responseArray.length > 0) {
          res.send(responseArray)
        } else {
          res.send([])
        }
      }).catch(function (errors) {
        res.status(200)
        res.send([])
      })
    }).catch(next)
}

export const updateCaseStatus = ({ bodymen: { body }, params }, res, next) => {
  Case.findById(params.id)
    .then((caseObj) => {
      if (caseObj) {
        caseObj.caseStatus = body.caseStatus
        caseObj.save()
        if (params.appName === 'hhs') {
          Doctor.findById(caseObj.doctorId)
            .then(function (user) {
              const message = {
                notification: {
                  title: 'Case Status Updated',
                  body: `${body.caseStatus} ${caseObj.details}`
                },
                data: {
                  case: caseObj.id
                },
                token: user.fcmId
              }
              sendMessageDoc(message).then().catch()
            }).catch(() => {
            })
        } else {
          User.findById(caseObj.userId)
            .then(function (user) {
              const message = {
                notification: {
                  title: 'Case Status Updated',
                  body: `${body.caseStatus} ${caseObj.details}`
                },
                data: {
                  case: caseObj.id
                },
                token: user.fcmId
              }
              sendMessage(message).then().catch()
            }).catch(() => {
            })
        }
        res.status(200)
        res.send({
          code: 200,
          message: 'Case status updated',
          subMessage: 'Case status updated'
        })
      } else {
        res.status(404)
        res.send({
          code: 404,
          message: 'Case not found',
          subMessage: 'Case not found'
        })
      }
    })
    .catch(next)
}

export const updatePrescription = ({ bodymen: { body }, params }, res, next) => {
  Case.findById(params.id)
    .then((caseObj) => {
      if (caseObj) {
        caseObj.prescription = body.prescription
        caseObj.caseStatus = 'PRESCRIBED'
        caseObj.save()
        User.findById(caseObj.userId)
          .then(function (user) {
            const message = {
              notification: {
                title: 'Case Prescription Updated',
                body: `${caseObj.details}`
              },
              data: {
                case: caseObj.id
              },
              token: user.fcmId
            }
            sendMessage(message).then().catch()
          }).catch(() => {
          })
        res.status(200)
        res.send({
          code: 200,
          message: 'Case Prescription updated',
          subMessage: 'Case Prescription updated'
        })
      } else {
        res.status(404)
        res.send({
          code: 404,
          message: 'Case not found',
          subMessage: 'Case not found'
        })
      }
    })
    .catch(next)
}

export const updateDiagnosis = ({ bodymen: { body }, params }, res, next) => {
  Case.findById(params.id)
    .then((caseObj) => {
      if (caseObj) {
        caseObj.diagnosis = body.diagnosis
        if (caseObj.caseStatus !== 'PRESCRIBED') {
          caseObj.caseStatus = 'DIAGONISED'
        }
        caseObj.save()
        User.findById(caseObj.userId)
          .then(function (user) {
            const message = {
              notification: {
                title: 'Case Diagnosis Updated',
                body: `${caseObj.details}`
              },
              data: {
                case: caseObj.id
              },
              token: user.fcmId
            }
            sendMessage(message).then().catch()
          }).catch(() => {
          })
        res.status(200)
        res.send({
          code: 200,
          message: 'Case Diagnosis updated',
          subMessage: 'Case Diagnosis updated'
        })
      } else {
        res.status(404)
        res.send({
          code: 404,
          message: 'Case not found',
          subMessage: 'Case not found'
        })
      }
    })
    .catch(next)
}
