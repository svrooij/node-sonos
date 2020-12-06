const Service = require('./Service')
/**
 * Sonos ConnectionManagerService
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class ConnectionManagerService
 * @extends {Service}
 */
class ConnectionManagerService extends Service {
  constructor (host, port) {
    super()
    this.name = 'ConnectionManager'
    this.host = host
    this.port = port || 1400
    this.controlURL = '/MediaRenderer/ConnectionManager/Control'
    this.eventSubURL = '/MediaRenderer/ConnectionManager/Event'
    this.SCPDURL = '/xml/ConnectionManager1.xml'
  }

  // #region actions
  /**
   * GetCurrentConnectionIDs
   * @returns {Object} response object, with these properties 'ConnectionIDs'
   */
  async GetCurrentConnectionIDs () { return this._request('GetCurrentConnectionIDs') }

  /**
   * GetCurrentConnectionInfo
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.ConnectionID
   * @returns {Object} response object, with these properties 'RcsID', 'AVTransportID', 'ProtocolInfo', 'PeerConnectionManager', 'PeerConnectionID', 'Direction', 'Status'
   */
  async GetCurrentConnectionInfo (options) { return this._request('GetCurrentConnectionInfo', options) }

  /**
   * GetProtocolInfo
   * @returns {Object} response object, with these properties 'Source', 'Sink'
   */
  async GetProtocolInfo () { return this._request('GetProtocolInfo') }
  // #endregion
}

module.exports = ConnectionManagerService
