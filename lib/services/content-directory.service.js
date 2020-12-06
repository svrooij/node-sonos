const Service = require('./Service')
/**
 * Sonos ContentDirectoryService
 *
 * Browse for local content
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class ContentDirectoryService
 * @extends {Service}
 */
class ContentDirectoryService extends Service {
  constructor (host, port) {
    super()
    this.name = 'ContentDirectory'
    this.host = host
    this.port = port || 1400
    this.controlURL = '/MediaServer/ContentDirectory/Control'
    this.eventSubURL = '/MediaServer/ContentDirectory/Event'
    this.SCPDURL = '/xml/ContentDirectory1.xml'
  }

  // #region actions
  /**
   * Browse - Browse for content, see BrowseParsed for a better experience.
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.ObjectID - The search query, ['A:ARTIST','A:ALBUMARTIST','A:ALBUM','A:GENRE','A:COMPOSER','A:TRACKS','A:PLAYLISTS'] with optionally ':search+query' behind it.
   * @param {string} options.BrowseFlag - How to browse [ 'BrowseMetadata' / 'BrowseDirectChildren' ]
   * @param {string} options.Filter - Which fields should be returned '*' for all.
   * @param {number} options.StartingIndex - Paging, where to start
   * @param {number} options.RequestedCount - Paging, number of items
   * @param {string} options.SortCriteria - Sort the results based on metadata fields. '+upnp:artist,+dc:title' for sorting on artist then on title.
   * @returns {Object} response object, with these properties 'Result', 'NumberReturned', 'TotalMatches', 'UpdateID'
   */
  async Browse (options) { return this._request('Browse', options) }

  /**
   * CreateObject
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.ContainerID
   * @param {string} options.Elements
   * @returns {Object} response object, with these properties 'ObjectID', 'Result'
   */
  async CreateObject (options) { return this._request('CreateObject', options) }

  /**
   * DestroyObject
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.ObjectID
   */
  async DestroyObject (options) { return this._request('DestroyObject', options) }

  /**
   * FindPrefix
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.ObjectID
   * @param {string} options.Prefix
   * @returns {Object} response object, with these properties 'StartingIndex', 'UpdateID'
   */
  async FindPrefix (options) { return this._request('FindPrefix', options) }

  /**
   * GetAlbumArtistDisplayOption
   * @returns {Object} response object, with these properties 'AlbumArtistDisplayOption'
   */
  async GetAlbumArtistDisplayOption () { return this._request('GetAlbumArtistDisplayOption') }

  /**
   * GetAllPrefixLocations
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.ObjectID
   * @returns {Object} response object, with these properties 'TotalPrefixes', 'PrefixAndIndexCSV', 'UpdateID'
   */
  async GetAllPrefixLocations (options) { return this._request('GetAllPrefixLocations', options) }

  /**
   * GetBrowseable
   * @returns {Object} response object, with these properties 'IsBrowseable'
   */
  async GetBrowseable () { return this._request('GetBrowseable') }

  /**
   * GetLastIndexChange
   * @returns {Object} response object, with these properties 'LastIndexChange'
   */
  async GetLastIndexChange () { return this._request('GetLastIndexChange') }

  /**
   * GetSearchCapabilities
   * @returns {Object} response object, with these properties 'SearchCaps'
   */
  async GetSearchCapabilities () { return this._request('GetSearchCapabilities') }

  /**
   * GetShareIndexInProgress
   * @returns {Object} response object, with these properties 'IsIndexing'
   */
  async GetShareIndexInProgress () { return this._request('GetShareIndexInProgress') }

  /**
   * GetSortCapabilities
   * @returns {Object} response object, with these properties 'SortCaps'
   */
  async GetSortCapabilities () { return this._request('GetSortCapabilities') }

  /**
   * GetSystemUpdateID
   * @returns {Object} response object, with these properties 'Id'
   */
  async GetSystemUpdateID () { return this._request('GetSystemUpdateID') }

  /**
   * RefreshShareIndex
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.AlbumArtistDisplayOption
   */
  async RefreshShareIndex (options) { return this._request('RefreshShareIndex', options) }

  /**
   * RequestResort
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.SortOrder
   */
  async RequestResort (options) { return this._request('RequestResort', options) }

  /**
   * SetBrowseable
   *
   * @param {Object} [options] - An object with the following properties
   * @param {boolean} options.Browseable
   */
  async SetBrowseable (options) { return this._request('SetBrowseable', options) }

  /**
   * UpdateObject
   *
   * @param {Object} [options] - An object with the following properties
   * @param {string} options.ObjectID
   * @param {string} options.CurrentTagValue
   * @param {string} options.NewTagValue
   */
  async UpdateObject (options) { return this._request('UpdateObject', options) }
  // #endregion
}

module.exports = ContentDirectoryService
