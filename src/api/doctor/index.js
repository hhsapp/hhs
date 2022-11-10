import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, updateFcm, login } from './controller'
import { schema } from './model'
export Doctor, { schema } from './model'

const router = new Router()
const { name, email, mobileNumber, password, gender, userType, profilePicture, age, experience, hospitalName, specalities, education, fcmId } = schema.tree

/**
 * @api {post} /doctors Create doctor
 * @apiName CreateDoctor
 * @apiGroup Doctor
 * @apiParam name Doctor's name.
 * @apiParam email Doctor's email.
 * @apiParam mobileNumber Doctor's mobileNumber.
 * @apiParam password Doctor's password.
 * @apiParam gender Doctor's gender.
 * @apiParam userType Doctor's userType.
 * @apiParam profilePicture Doctor's profilePicture.
 * @apiParam age Doctor's age.
 * @apiParam experience Doctor's experience.
 * @apiParam hospitalName Doctor's hospitalName.
 * @apiParam specalities Doctor's specalities.
 * @apiParam education Doctor's education.
 * @apiParam fcmId Doctor's fcmId.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 */
router.post('/',
  body({ name, email, mobileNumber, password, gender, userType, profilePicture, age, experience, hospitalName, specalities, education, fcmId }),
  create)

/**
 * @api {post} /doctors/fcm/:id Post FCM ID
 * @apiName POST FCMID
 * @apiGroup Doctor
 * @apiParam fcmId Doctor's fcmId.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 */
router.post('/fcm/:id',
  body({ fcmId }),
  updateFcm)

/**
 * @api {post} /doctors/login Login
 * @apiName Login
 * @apiGroup Doctor
 * @apiParam email Doctor's email.
 * @apiParam password Doctor's password.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 401 Password mismatch.
 * @apiError 404 Doctor not found.
 */
router.post('/login',
  body({ email, password }),
  login)

/**
 * @api {get} /doctors Retrieve doctors
 * @apiName RetrieveDoctors
 * @apiGroup Doctor
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of doctors.
 * @apiSuccess {Object[]} rows List of doctors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /doctors/:id Retrieve doctor
 * @apiName RetrieveDoctor
 * @apiGroup Doctor
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /doctors/:id Update doctor
 * @apiName UpdateDoctor
 * @apiGroup Doctor
 * @apiParam name Doctor's name.
 * @apiParam email Doctor's email.
 * @apiParam mobileNumber Doctor's mobileNumber.
 * @apiParam password Doctor's password.
 * @apiParam gender Doctor's gender.
 * @apiParam userType Doctor's userType.
 * @apiParam profilePicture Doctor's profilePicture.
 * @apiParam age Doctor's age.
 * @apiParam experience Doctor's experience.
 * @apiParam hospitalName Doctor's hospitalName.
 * @apiParam specalities Doctor's specalities.
 * @apiParam education Doctor's education.
 * @apiParam fcmId Doctor's fcmId.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 */
router.put('/:id',
  body({ name, email, mobileNumber, password, gender, userType, profilePicture, age, experience, hospitalName, specalities, education, fcmId }),
  update)

/**
 * @api {delete} /doctors/:id Delete doctor
 * @apiName DeleteDoctor
 * @apiGroup Doctor
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Doctor not found.
 */
router.delete('/:id',
  destroy)

export default router
