const Service = require('./Service')
/**
 * Sonos SystemPropertiesService
 *
 * Manage system-wide settings, mainly account stuff.
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class SystemPropertiesService
 * @extends {Service}
 */
class SystemPropertiesService extends Service {
  constructor (host, port) {
    super()
    this.name = 'SystemProperties'
    this.host = host
    this.port = port || 1400
    this.controlURL = '/SystemProperties/Control'
    this.eventSubURL = '/SystemProperties/Event'
    this.SCPDURL = '/xml/SystemProperties1.xml'
  }

  // #region actions
  /**
   * AddAccountX
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @param {string} options.AccountID
   * @param {string} options.AccountPassword
   * @returns {Object} response object, with these properties 'AccountUDN'
   */
  async AddAccountX (options) { return this._request('AddAccountX', options) }

  /**
   * AddOAuthAccountX
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @param {string} options.AccountToken
   * @param {string} options.AccountKey
   * @param {string} options.OAuthDeviceID
   * @param {string} options.AuthorizationCode
   * @param {string} options.RedirectURI
   * @param {string} options.UserIdHashCode
   * @param {number} options.AccountTier
   * @returns {Object} response object, with these properties 'AccountUDN', 'AccountNickname'
   */
  async AddOAuthAccountX (options) { return this._request('AddOAuthAccountX', options) }

  /**
   * DoPostUpdateTasks
   */
  async DoPostUpdateTasks () { return this._request('DoPostUpdateTasks') }

  /**
   * EditAccountMd
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @param {string} options.AccountID
   * @param {string} options.NewAccountMd
   */
  async EditAccountMd (options) { return this._request('EditAccountMd', options) }

  /**
   * EditAccountPasswordX
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @param {string} options.AccountID
   * @param {string} options.NewAccountPassword
   */
  async EditAccountPasswordX (options) { return this._request('EditAccountPasswordX', options) }

  /**
   * EnableRDM
   *
   * @param {Object} [options] - An object with the following properties
   * @param {boolean} options.RDMValue
   */
  async EnableRDM (options) { return this._request('EnableRDM', options) }

  /**
   * GetRDM
   * @returns {Object} response object, with these properties 'RDMValue'
   */
  async GetRDM () { return this._request('GetRDM') }

  /**
   * GetString - Get a saved string.
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.VariableName - The key for this variable
   * @remarks Strings are saved in the system with SetString, every speaker should send the same data. Will error when not existing
   * @returns {Object} response object, with these properties 'StringValue'
   */
  async GetString (options) { return this._request('GetString', options) }

  /**
   * GetWebCode
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @returns {Object} response object, with these properties 'WebCode'
   */
  async GetWebCode (options) { return this._request('GetWebCode', options) }

  /**
   * ProvisionCredentialedTrialAccountX
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @param {string} options.AccountID
   * @param {string} options.AccountPassword
   * @returns {Object} response object, with these properties 'IsExpired', 'AccountUDN'
   */
  async ProvisionCredentialedTrialAccountX (options) { return this._request('ProvisionCredentialedTrialAccountX', options) }

  /**
   * RefreshAccountCredentialsX
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @param {number} options.AccountUID
   * @param {string} options.AccountToken
   * @param {string} options.AccountKey
   */
  async RefreshAccountCredentialsX (options) { return this._request('RefreshAccountCredentialsX', options) }

  /**
   * Remove - Remove a saved string
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.VariableName - The key for this variable
   * @remarks Not sure what happens if you call this with a VariableName that doesn't exists.
   */
  async Remove (options) { return this._request('Remove', options) }

  /**
   * RemoveAccount
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.AccountType
   * @param {string} options.AccountID
   */
  async RemoveAccount (options) { return this._request('RemoveAccount', options) }

  /**
   * ReplaceAccountX
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.AccountUDN
   * @param {string} options.NewAccountID
   * @param {string} options.NewAccountPassword
   * @param {string} options.AccountToken
   * @param {string} options.AccountKey
   * @param {string} options.OAuthDeviceID
   * @returns {Object} response object, with these properties 'NewAccountUDN'
   */
  async ReplaceAccountX (options) { return this._request('ReplaceAccountX', options) }

  /**
   * ResetThirdPartyCredentials
   */
  async ResetThirdPartyCredentials () { return this._request('ResetThirdPartyCredentials') }

  /**
   * SetAccountNicknameX
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.AccountUDN
   * @param {string} options.AccountNickname
   */
  async SetAccountNicknameX (options) { return this._request('SetAccountNicknameX', options) }

  /**
   * SetString - Save a string in the system
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.VariableName - The key for this variable, use something unique
   * @param {string} options.StringValue
   * @remarks Strings are saved in the system, retrieve values with GetString.
   */
  async SetString (options) { return this._request('SetString', options) }
  // #endregion
}

module.exports = SystemPropertiesService
