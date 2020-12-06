/**
 * Sonos library to control (almost) everything from your sonos devices
 * @module sonos
 * @requires 'request'
 * @requires 'axios'
 * @requires 'xml2js'
 * @requires 'debug'
 * @requires '../helpers
 */

const request = require('axios')
const parseString = require('xml2js').parseString
const debug = require('debug')('sonos:service')
const Helpers = require('../helpers')

/**
 * Create a new instance of Service
 * @class Service
 * @param {Object} [options] All the required options to use this class
 * @param {String} options.host The host param of one of your sonos speakers
 * @param {Number} options.port The port of your sonos speaker, defaults to 1400
 * @param {String} options.controlURL The control url used for the calls
 * @param {String} options.eventURL The Event URL used for the calls
 * @param {String} options.SCPDURL The SCPDURL (ask Ben)
 */
class Service {
  constructor (options = {}) {
    this.name = options.name
    this.host = options.host
    this.port = options.port || 1400
    this.controlURL = options.controlURL
    this.eventSubURL = options.eventSubURL
    this.SCPDURL = options.SCPDURL

    this.debug = debug
  }

  /**
   * Call the UPNP action
   * @param {String} action The action you want to call
   * @param {Object} variables If this endpoint requires options, put them in here. Otherwise `{ }`
   * @returns {Object} The result of the request.
   */
  _request (action, variables) {
    debug('Service._request(%j %j)', action, variables)
    return new Promise((resolve, reject) => {
      const messageAction = `"urn:schemas-upnp-org:service:${this.name}:1#${action}"`
      let messageBody = `<u:${action} xmlns:u="urn:schemas-upnp-org:service:${this.name}:1">`
      if (variables) {
        Object.keys(variables).forEach(key => {
          if (typeof variables[key] === 'boolean') {
            messageBody += `<${key}>${variables[key] === true ? '1' : '0'}</${key}>`
          } else {
            messageBody += `<${key}>${variables[key]}</${key}>`
          }
        })
      }
      messageBody += `</u:${action}>`
      var responseTag = `u:${action}Response`
      request({
        url: 'http://' + this.host + ':' + this.port + this.controlURL,
        method: 'POST',
        headers: {
          SOAPAction: messageAction,
          'Content-type': 'text/xml; charset=utf8'
        },
        data: Helpers.CreateSoapEnvelop(messageBody)
      }).then(response => response.data)
        .then(Helpers.ParseXml)
        .then(result => {
          debug('Parsed service response as JSON\n%s', JSON.stringify(result, null, 2))
          if (!result || !result['s:Envelope']) {
            reject(new Error('Invalid response for ' + action + ': ' + result))
          } else if (typeof result['s:Envelope']['s:Body']['s:Fault'] !== 'undefined') {
            reject(result['s:Envelope']['s:Body']['s:Fault'])
          } else {
            const output = result['s:Envelope']['s:Body'][responseTag]
            // Remove namespace from result
            delete output['xmlns:u']
            resolve(output)
          }
        })
        .catch((error) => {
        // In case of an SOAP error error.reponse helds the details.
        // That goes usually together with status code 500 - triggering catch
        // Experience: When using reject(error) the error.reponse get lost.
        // Thats why error.response is checked and handled here
          let myError
          if (error.response) { // Indicator for SOAP Error
            if (error.message.startsWith('Request failed with status code 500')) {
              myError = new Error('upnp: statusCode 500 & upnpErrorCode ' + error.response.data)
              reject(myError)
            } else {
              myError = new Error('upnp: ' + error.message + '///' + error.response.data)
              reject(myError)
            }
          } else {
            reject(error)
          }
        })
    })
  }

  /**
   * Parse a key from the response.
   * @param {Object} input The complete response
   * @param {String} key The key you want parsed
   * @param  {Function} callback (err, result)
   * @return {void}
   */
  _parseKey (input, key, callback) {
    debug('Service._parseKey(%j, %j)', key, callback)
    // debug('Service._parseKey(%j, %j, %j)', input, key, callback)
    if (!input || !key || !callback) {
      debug('_parseKey something not defined')
    }

    if (typeof input[key] === 'undefined') {
      return callback(new Error('Key doesn\'t exists'))
    }

    parseString(input[key], { mergeAttrs: true, explicitArray: false }, (err, result) => {
      if (err) return callback(err)
      return callback(null, result)
    })
  }
}

module.exports = Service
