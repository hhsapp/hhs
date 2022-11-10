import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, updateFcm, login } from './controller'
import { schema } from './model'
export User, { schema } from './model'

const router = new Router()
const { name, email, mobileNumber, age, gender, password, bloodGroup, height, weight, userType, profilePicture, fcmId } = schema.tree

/**
 * @api {post} /users Create user
 * @apiName CreateUser
 * @apiGroup User
 * @apiParam name User's name.
 * @apiParam email User's email.
 * @apiParam mobileNumber User's mobileNumber.
 * @apiParam age User's age.
 * @apiParam gender User's gender.
 * @apiParam password User's password.
 * @apiParam bloodGroup User's bloodGroup.
 * @apiParam height User's height.
 * @apiParam weight User's weight.
 * @apiParam userType User's userType.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.post('/',
  body({ name, email, mobileNumber, age, gender, password, bloodGroup, height, weight, userType, profilePicture, fcmId }),
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
router.post('/fcm/:id',
  body({ fcmId }),
  updateFcm)

/**
 * @api {post} /users/login Login
 * @apiName Login
 * @apiGroup User
 * @apiParam email User's email.
 * @apiParam password User's password.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 401 Password mismatch.
 * @apiError 404 User not found.
 */
router.post('/login',
  body({ email, password }),
  login)

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup User
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of users.
 * @apiSuccess {Object[]} rows List of users.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 * @apiGroup User
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /users/:id Update user
 * @apiName UpdateUser
 * @apiGroup User
 * @apiParam name User's name.
 * @apiParam email User's email.
 * @apiParam mobileNumber User's mobileNumber.
 * @apiParam age User's age.
 * @apiParam gender User's gender.
 * @apiParam password User's password.
 * @apiParam bloodGroup User's bloodGroup.
 * @apiParam height User's height.
 * @apiParam weight User's weight.
 * @apiParam userType User's userType.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.put('/:id',
  body({ name, email, mobileNumber, age, gender, password, bloodGroup, height, weight, userType, profilePicture, fcmId }),
  update)

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 User not found.
 */
router.delete('/:id',
  destroy)

export default router
