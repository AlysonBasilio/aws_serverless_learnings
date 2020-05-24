const uuid = require('uuid')
const Joi = require('@hapi/joi')
const decoratorValidator = require('./util/decoratorValidator')
const globalEnum = require('./util/globalEnum')

class Handler {
  constructor({ dynamoDBService }) {
    this.dynamoDBService = dynamoDBService
    this.dynamoDBTable = process.env.DYNAMODB_TABLE
  }

  static validator() {
    return Joi.object({
      name: Joi.string().max(100).min(2).required(),
      power: Joi.string().max(20).required()
    })
  }

  prepareData(data) {
    const params = {
      TableName: this.dynamoDBTable,
      Item: {
        ...data,
        id: uuid.v1(),
        createdAt: new Date().toISOString()
      }
    }

    return params
  }

  async insertItem(params) {
    return this.dynamoDBService.put(params).promise()
  }

  handleSuccess(data) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(data)
    }

    return response
  }

  handleError(data) {
    return {
      statusCode: data.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create item!!'
    }
  }

  async main(event) {
    try {
      const dbParams = this.prepareData(event.body)
      await this.insertItem(dbParams)

      return this.handleSuccess(dbParams.Item)
    } catch (error) {
      console.error('Deu ruim**', error.stack, '\nMessage**',error.message)

      return this.handleError({ statusCode: 500})
    }
  }
}

// factory
const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient()
const handler = new Handler({
  dynamoDBService: dynamoDB
})

module.exports = decoratorValidator(
  handler.main.bind(handler),
  Handler.validator(),
  globalEnum.ARG_TYPE.BODY
)
