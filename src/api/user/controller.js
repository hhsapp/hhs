import { success, notFound } from '../../services/response/'
import { User } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  User.create(body)
    .then((user) => user.view(true))
    .then(success(res, 200))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  User.count(query)
    .then(count => User.find(query, select, cursor)
      .then((users) => ({
        count,
        rows: users.map((user) => user.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? user.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? Object.assign(user, body).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? user.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const updateFcm = ({ bodymen: { body }, params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? Object.assign(user, body).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const login = ({ bodymen: { body }, params }, res, next) =>
  User.findOne({ email: body.email })
    .then(function (user) {
      if (user) {
        if (user.password === body.password) {
          res.send(user)
        } else {
          res.status(401)
          res.send({
            code: 401,
            message: 'Password mismatch',
            subMessage: 'Password mismatch'
          })
        }
      } else {
        res.status(404)
        res.send({
          code: 404,
          message: 'User not found',
          subMessage: 'User not found'
        })
      }
    }).catch(next)
