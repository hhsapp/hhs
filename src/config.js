/* eslint-disable no-unused-vars */
import path from 'path'
import merge from 'lodash/merge'

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  dotenv.load({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example')
  })
}

const DB_USER = 'hhsapp'
const PASSWORD = encodeURIComponent('Hhsapp@123')
const CLUSTER = 'cluster0.07yuy9a.'
const DATABASE_NAME = 'hhs'
const DB_URL = `mongodb+srv://${DB_USER}:${PASSWORD}@${CLUSTER}mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: '/api',
    masterKey: requireProcessEnv('MASTER_KEY'),
    mongo: {
      options: {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    }
  },
  test: { },
  development: {
    mongo: {
      uri: DB_URL,
      options: {
        debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: DB_URL
    }
  }
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
