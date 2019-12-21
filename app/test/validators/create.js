
const ajv = require('ajv')()

require('ajv-keywords')(ajv)

const schema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    }
  },
  required: ['firstName', 'lastName'],
  additionalProperties: true
}

const validate = ajv.compile(schema)

module.exports = validate