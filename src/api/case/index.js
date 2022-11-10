import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, getCases, update, destroy, show, updateCaseStatus, updatePrescription, updateDiagnosis } from './controller'
import { schema } from './model'
export Case, { schema } from './model'

const router = new Router()
const { userId, doctorId, details, symptoms, readings, caseStatus, diagnosis, prescription } = schema.tree

/**
 * @api {post} /cases Create case
 * @apiName CreateCase
 * @apiGroup Case
 * @apiParam userId Case's userId.
 * @apiParam doctorId Case's doctorId.
 * @apiParam details Case's details.
 * @apiParam symptoms Case's symptoms.
 * @apiParam readings Case's readings.
 * @apiParam caseStatus Case's caseStatus.
 * @apiParam diagnosis Case's diagnosis.
 * @apiParam prescription Case's prescription.
 * @apiSuccess {Object} caseObj Case's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Case not found.
 */
router.post('/',
  body({ userId, doctorId, details, symptoms, readings, caseStatus, diagnosis, prescription }),
  create)

/**
 * @api {post} /users/fcm/:id Post FCM ID
 * @apiName POST FCMID
 * @apiGroup User
 * @apiParam fcmId User's fcmId.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.post('/updateCaseStatus/:id/:appName',
  body({ caseStatus }),
  updateCaseStatus)

/**
 * @api {post} /users/fcm/:id Post FCM ID
 * @apiName POST FCMID
 * @apiGroup User
 * @apiParam fcmId User's fcmId.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.post('/updatePrescription/:id',
  body({ prescription }),
  updatePrescription)

/**
 * @api {post} /users/fcm/:id Post FCM ID
 * @apiName POST FCMID
 * @apiGroup User
 * @apiParam fcmId User's fcmId.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.post('/updateDiagnosis/:id',
  body({ diagnosis }),
  updateDiagnosis)

/**
 * @api {get} /cases Retrieve cases
 * @apiName RetrieveCases
 * @apiGroup Case
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of cases.
 * @apiSuccess {Object[]} rows List of cases.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cases/:id Retrieve cases
 * @apiName RetrieveCase
 * @apiGroup Case
 * @apiSuccess {Number} count Total amount of cases.
 * @apiSuccess {Object[]} rows List of cases.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */

router.get('/:id',
  query(),
  show)

/**
 * @api {get} /cases/:id Retrieve cases
 * @apiName RetrieveCases by ID
 * @apiGroup Case
 * @apiSuccess {Number} count Total amount of cases.
 * @apiSuccess {Object[]} rows List of cases.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */

router.get('/:id/:appName',
  getCases)

/**
 * @api {put} /cases/:id Update case
 * @apiName UpdateCase
 * @apiGroup Case
 * @apiParam userId Case's userId.
 * @apiParam doctorId Case's doctorId.
 * @apiParam details Case's details.
 * @apiParam symptoms Case's symptoms.
 * @apiParam readings Case's readings.
 * @apiParam caseStatus Case's caseStatus.
 * @apiParam diagnosis Case's diagnosis.
 * @apiParam prescription Case's prescription.
 * @apiSuccess {Object} caseObj Case's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Case not found.
 */
router.put('/:id',
  body({ userId, doctorId, details, symptoms, readings, caseStatus, diagnosis, prescription }),
  update)

/**
 * @api {delete} /cases/:id Delete case
 * @apiName DeleteCase
 * @apiGroup Case
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Case not found.
 */
router.delete('/:id',
  destroy)

export default router
