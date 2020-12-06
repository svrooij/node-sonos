const Service = require('./Service')
/**
 * Sonos GroupRenderingControlService
 *
 * Volume related controls for groups. Group volume is the average volume of all players. Snapshot stores the volume ratio between players.
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class GroupRenderingControlService
 * @extends {Service}
 */
class GroupRenderingControlService extends Service {
  constructor (host, port) {
    super()
    this.name = 'GroupRenderingControl'
    this.host = host
    this.port = port || 1400
    this.controlURL = '/MediaRenderer/GroupRenderingControl/Control'
    this.eventSubURL = '/MediaRenderer/GroupRenderingControl/Event'
    this.SCPDURL = '/xml/GroupRenderingControl1.xml'
  }

  // #region actions
  /**
   * GetGroupMute - Get 1 for muted, 0 for un-muted
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator returns error code 701
   * @returns {Object} response object, with these properties 'CurrentMute'
   */
  async GetGroupMute (options = { InstanceID: 0 }) { return this._request('GetGroupMute', options) }

  /**
   * GetGroupVolume - Get the group volume.
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator returns error code 701
   * @returns {Object} response object, with these properties 'CurrentVolume'
   */
  async GetGroupVolume (options = { InstanceID: 0 }) { return this._request('GetGroupVolume', options) }

  /**
   * SetGroupMute - (Un-/)Mute the entire group
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {boolean} options.DesiredMute - True for mute, false for un-mute
   * @remarks Send to non-coordinator returns error code 701
   */
  async SetGroupMute (options) { return this._request('SetGroupMute', options) }

  /**
   * SetGroupVolume - Change group volume. Players volume will be changed proportionally based on last snapshot
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {number} options.DesiredVolume - New volume between 0 and 100
   * @remarks Send to non-coordinator returns error code 701
   */
  async SetGroupVolume (options) { return this._request('SetGroupVolume', options) }

  /**
   * SetRelativeGroupVolume - Relatively change group volume - returns final group volume. Players volume will be changed proportionally based on last snapshot
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {number} options.Adjustment - Number between -100 and +100
   * @remarks Send to non-coordinator returns error code 701
   * @returns {Object} response object, with these properties 'NewVolume'
   */
  async SetRelativeGroupVolume (options) { return this._request('SetRelativeGroupVolume', options) }

  /**
   * SnapshotGroupVolume - Creates a new group volume snapshot,  the volume ratio between all players. It is used by SetGroupVolume and SetRelativeGroupVolume
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator returns error code 701
   */
  async SnapshotGroupVolume (options = { InstanceID: 0 }) { return this._request('SnapshotGroupVolume', options) }
  // #endregion
}

module.exports = GroupRenderingControlService
