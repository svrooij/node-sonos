const Service = require('./Service')
/**
 * Sonos AVTransportService
 *
 * Service that controls stuff related to transport (play/pause/next/special urls)
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class AVTransportService
 * @extends {Service}
 */
class AVTransportService extends Service {
  constructor (host, port) {
    super()
    this.name = 'AVTransport'
    this.host = host
    this.port = port || 1400
    this.controlURL = '/MediaRenderer/AVTransport/Control'
    this.eventSubURL = '/MediaRenderer/AVTransport/Event'
    this.SCPDURL = '/xml/AVTransport1.xml'
  }

  // #region actions
  /**
   * AddMultipleURIsToQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {number} options.UpdateID
   * @param {number} options.NumberOfURIs
   * @param {string} options.EnqueuedURIs
   * @param {string} options.EnqueuedURIsMetaData
   * @param {string} options.ContainerURI
   * @param {string} options.ContainerMetaData
   * @param {number} options.DesiredFirstTrackNumberEnqueued
   * @param {boolean} options.EnqueueAsNext
   * @returns {Object} response object, with these properties 'FirstTrackNumberEnqueued', 'NumTracksAdded', 'NewQueueLength', 'NewUpdateID'
   */
  async AddMultipleURIsToQueue (options) { return this._request('AddMultipleURIsToQueue', options) }

  /**
   * AddURIToQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.EnqueuedURI
   * @param {string} options.EnqueuedURIMetaData
   * @param {number} options.DesiredFirstTrackNumberEnqueued
   * @param {boolean} options.EnqueueAsNext
   * @returns {Object} response object, with these properties 'FirstTrackNumberEnqueued', 'NumTracksAdded', 'NewQueueLength'
   */
  async AddURIToQueue (options) { return this._request('AddURIToQueue', options) }

  /**
   * AddURIToSavedQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.ObjectID
   * @param {number} options.UpdateID
   * @param {string} options.EnqueuedURI
   * @param {string} options.EnqueuedURIMetaData
   * @param {number} options.AddAtIndex
   * @returns {Object} response object, with these properties 'NumTracksAdded', 'NewQueueLength', 'NewUpdateID'
   */
  async AddURIToSavedQueue (options) { return this._request('AddURIToSavedQueue', options) }

  /**
   * BackupQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   */
  async BackupQueue (options = { InstanceID: 0 }) { return this._request('BackupQueue', options) }

  /**
   * BecomeCoordinatorOfStandaloneGroup - Leave the current group and revert to a single player.
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @returns {Object} response object, with these properties 'DelegatedGroupCoordinatorID', 'NewGroupID'
   */
  async BecomeCoordinatorOfStandaloneGroup (options = { InstanceID: 0 }) { return this._request('BecomeCoordinatorOfStandaloneGroup', options) }

  /**
   * BecomeGroupCoordinator
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.CurrentCoordinator
   * @param {string} options.CurrentGroupID
   * @param {string} options.OtherMembers
   * @param {string} options.TransportSettings
   * @param {string} options.CurrentURI
   * @param {string} options.CurrentURIMetaData
   * @param {string} options.SleepTimerState
   * @param {string} options.AlarmState
   * @param {string} options.StreamRestartState
   * @param {string} options.CurrentQueueTrackList
   * @param {string} options.CurrentVLIState
   */
  async BecomeGroupCoordinator (options) { return this._request('BecomeGroupCoordinator', options) }

  /**
   * BecomeGroupCoordinatorAndSource
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.CurrentCoordinator
   * @param {string} options.CurrentGroupID
   * @param {string} options.OtherMembers
   * @param {string} options.CurrentURI
   * @param {string} options.CurrentURIMetaData
   * @param {string} options.SleepTimerState
   * @param {string} options.AlarmState
   * @param {string} options.StreamRestartState
   * @param {string} options.CurrentAVTTrackList
   * @param {string} options.CurrentQueueTrackList
   * @param {string} options.CurrentSourceState
   * @param {boolean} options.ResumePlayback
   */
  async BecomeGroupCoordinatorAndSource (options) { return this._request('BecomeGroupCoordinatorAndSource', options) }

  /**
   * ChangeCoordinator
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.CurrentCoordinator
   * @param {string} options.NewCoordinator
   * @param {string} options.NewTransportSettings
   * @param {string} options.CurrentAVTransportURI
   */
  async ChangeCoordinator (options) { return this._request('ChangeCoordinator', options) }

  /**
   * ChangeTransportSettings
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.NewTransportSettings
   * @param {string} options.CurrentAVTransportURI
   */
  async ChangeTransportSettings (options) { return this._request('ChangeTransportSettings', options) }

  /**
   * ConfigureSleepTimer - Stop playing after set sleep timer
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.NewSleepTimerDuration - Time to stop after, as hh:mm:ss
   * @remarks Send to non-coordinator returns error code 800
   */
  async ConfigureSleepTimer (options) { return this._request('ConfigureSleepTimer', options) }

  /**
   * CreateSavedQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.Title
   * @param {string} options.EnqueuedURI
   * @param {string} options.EnqueuedURIMetaData
   * @returns {Object} response object, with these properties 'NumTracksAdded', 'NewQueueLength', 'AssignedObjectID', 'NewUpdateID'
   */
  async CreateSavedQueue (options) { return this._request('CreateSavedQueue', options) }

  /**
   * DelegateGroupCoordinationTo - Delegates the coordinator role to another player in the same group
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.NewCoordinator - uuid of the new coordinator - must be in same group
   * @param {boolean} options.RejoinGroup - Should former coordinator rejoin the group?
   * @remarks Send to non-coordinator has no results - should be avoided.
   */
  async DelegateGroupCoordinationTo (options) { return this._request('DelegateGroupCoordinationTo', options) }

  /**
   * EndDirectControlSession
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   */
  async EndDirectControlSession (options = { InstanceID: 0 }) { return this._request('EndDirectControlSession', options) }

  /**
   * GetCrossfadeMode - Get crossfade mode, 1 for on, 0 for off
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator may return wrong value as only the coordinator value in a group
   * @returns {Object} response object, with these properties 'CrossfadeMode'
   */
  async GetCrossfadeMode (options = { InstanceID: 0 }) { return this._request('GetCrossfadeMode', options) }

  /**
   * GetCurrentTransportActions - Get current transport actions such as Set, Stop, Pause, Play, X_DLNA_SeekTime, Next, X_DLNA_SeekTrackNr
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator always returns Stop, Play
   * @returns {Object} response object, with these properties 'Actions'
   */
  async GetCurrentTransportActions (options = { InstanceID: 0 }) { return this._request('GetCurrentTransportActions', options) }

  /**
   * GetDeviceCapabilities
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @returns {Object} response object, with these properties 'PlayMedia', 'RecMedia', 'RecQualityModes'
   */
  async GetDeviceCapabilities (options = { InstanceID: 0 }) { return this._request('GetDeviceCapabilities', options) }

  /**
   * GetMediaInfo - Get information about the current playing media (queue)
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @returns {Object} response object, with these properties 'NrTracks', 'MediaDuration', 'CurrentURI', 'CurrentURIMetaData', 'NextURI', 'NextURIMetaData', 'PlayMedium', 'RecordMedium', 'WriteStatus'
   */
  async GetMediaInfo (options = { InstanceID: 0 }) { return this._request('GetMediaInfo', options) }

  /**
   * GetPositionInfo - Get information about current position (position in queue and time in current song)
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @returns {Object} response object, with these properties 'Track', 'TrackDuration', 'TrackMetaData', 'TrackURI', 'RelTime', 'AbsTime', 'RelCount', 'AbsCount'
   */
  async GetPositionInfo (options = { InstanceID: 0 }) { return this._request('GetPositionInfo', options) }

  /**
   * GetRemainingSleepTimerDuration - Get time left on sleeptimer or empty string
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator returns error code 800
   * @returns {Object} response object, with these properties 'RemainingSleepTimerDuration', 'CurrentSleepTimerGeneration'
   */
  async GetRemainingSleepTimerDuration (options = { InstanceID: 0 }) { return this._request('GetRemainingSleepTimerDuration', options) }

  /**
   * GetRunningAlarmProperties
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @returns {Object} response object, with these properties 'AlarmID', 'GroupID', 'LoggedStartTime'
   */
  async GetRunningAlarmProperties (options = { InstanceID: 0 }) { return this._request('GetRunningAlarmProperties', options) }

  /**
   * GetTransportInfo - Get current transport status, speed and state such as PLAYING, STOPPED, PLAYING, PAUSED_PLAYBACK, TRANSITIONING, NO_MEDIA_PRESENT
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator always returns PLAYING
   * @returns {Object} response object, with these properties 'CurrentTransportState', 'CurrentTransportStatus', 'CurrentSpeed'
   */
  async GetTransportInfo (options = { InstanceID: 0 }) { return this._request('GetTransportInfo', options) }

  /**
   * GetTransportSettings - Get transport settings
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator returns the settings of it's queue
   * @returns {Object} response object, with these properties 'PlayMode', 'RecQualityMode'
   */
  async GetTransportSettings (options = { InstanceID: 0 }) { return this._request('GetTransportSettings', options) }

  /**
   * Next - Go to next song, not always supported - see GetCurrentTransportActions
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   */
  async Next (options = { InstanceID: 0 }) { return this._request('Next', options) }

  /**
   * NotifyDeletedURI
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.DeletedURI
   */
  async NotifyDeletedURI (options) { return this._request('NotifyDeletedURI', options) }

  /**
   * Pause - Pause playback
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   */
  async Pause (options = { InstanceID: 0 }) { return this._request('Pause', options) }

  /**
   * Play - Start playing the set TransportURI
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.Speed - Play speed usually 1, can be a fraction of 1 [  ]
   */
  async Play (options) { return this._request('Play', options) }

  /**
   * Previous - Go to previous song, not always supported - GetCurrentTransportActions
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   */
  async Previous (options = { InstanceID: 0 }) { return this._request('Previous', options) }

  /**
   * RemoveAllTracksFromQueue - Flushes the SONOS queue. If queue is already empty it throw error 804
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @remarks Send to non-coordinator returns error code 800.
   */
  async RemoveAllTracksFromQueue (options = { InstanceID: 0 }) { return this._request('RemoveAllTracksFromQueue', options) }

  /**
   * RemoveTrackFromQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.ObjectID
   * @param {number} options.UpdateID
   */
  async RemoveTrackFromQueue (options) { return this._request('RemoveTrackFromQueue', options) }

  /**
   * RemoveTrackRangeFromQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {number} options.UpdateID
   * @param {number} options.StartingIndex
   * @param {number} options.NumberOfTracks
   * @returns {Object} response object, with these properties 'NewUpdateID'
   */
  async RemoveTrackRangeFromQueue (options) { return this._request('RemoveTrackRangeFromQueue', options) }

  /**
   * ReorderTracksInQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {number} options.StartingIndex
   * @param {number} options.NumberOfTracks
   * @param {number} options.InsertBefore
   * @param {number} options.UpdateID
   */
  async ReorderTracksInQueue (options) { return this._request('ReorderTracksInQueue', options) }

  /**
   * ReorderTracksInSavedQueue
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.ObjectID
   * @param {number} options.UpdateID
   * @param {string} options.TrackList
   * @param {string} options.NewPositionList
   * @returns {Object} response object, with these properties 'QueueLengthChange', 'NewQueueLength', 'NewUpdateID'
   */
  async ReorderTracksInSavedQueue (options) { return this._request('ReorderTracksInSavedQueue', options) }

  /**
   * RunAlarm
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {number} options.AlarmID
   * @param {string} options.LoggedStartTime
   * @param {string} options.Duration
   * @param {string} options.ProgramURI
   * @param {string} options.ProgramMetaData
   * @param {string} options.PlayMode [ 'NORMAL' / 'REPEAT_ALL' / 'REPEAT_ONE' / 'SHUFFLE_NOREPEAT' / 'SHUFFLE' / 'SHUFFLE_REPEAT_ONE' ]
   * @param {number} options.Volume
   * @param {boolean} options.IncludeLinkedZones
   */
  async RunAlarm (options) { return this._request('RunAlarm', options) }

  /**
   * SaveQueue - Saves the current SONOS queue as a SONOS playlist and outputs objectID
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.Title - SONOS playlist title
   * @param {string} options.ObjectID
   * @remarks Send to non-coordinator returns error code 800
   * @returns {Object} response object, with these properties 'AssignedObjectID'
   */
  async SaveQueue (options) { return this._request('SaveQueue', options) }

  /**
   * Seek - Seek track in queue, time delta or absolute time in song, not always supported - see GetCurrentTransportActions
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.Unit - What to seek [ 'TRACK_NR' / 'REL_TIME' / 'TIME_DELTA' ]
   * @param {string} options.Target - Position of track in queue (start at 1) or hh:mm:ss for REL_TIME or +/-hh:mm:ss for TIME_DELTA
   * @remarks Returns error code 701 in case that content does not support Seek or send to non-coordinator
   */
  async Seek (options) { return this._request('Seek', options) }

  /**
   * SetAVTransportURI - Set the transport URI to a song, a stream, the queue, another player-rincon and a lot more
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.CurrentURI - The new TransportURI - its a special SONOS format
   * @param {string} options.CurrentURIMetaData - Track Metadata, see MetadataHelper.GuessTrack to guess based on track uri
   * @remarks If set to another player RINCON, the player is grouped with that one.
   */
  async SetAVTransportURI (options) { return this._request('SetAVTransportURI', options) }

  /**
   * SetCrossfadeMode - Set crossfade mode off
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {boolean} options.CrossfadeMode - true for on, false for off
   * @remarks Send to non-coordinator returns error code 800. Same for content, which does not support crossfade mode.
   */
  async SetCrossfadeMode (options) { return this._request('SetCrossfadeMode', options) }

  /**
   * SetNextAVTransportURI
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.NextURI
   * @param {string} options.NextURIMetaData
   */
  async SetNextAVTransportURI (options) { return this._request('SetNextAVTransportURI', options) }

  /**
   * SetPlayMode - Set the PlayMode
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.NewPlayMode - New playmode [ 'NORMAL' / 'REPEAT_ALL' / 'REPEAT_ONE' / 'SHUFFLE_NOREPEAT' / 'SHUFFLE' / 'SHUFFLE_REPEAT_ONE' ]
   * @remarks Send to non-coordinator returns error code 712. If SONOS queue is not activated returns error code 712.
   */
  async SetPlayMode (options) { return this._request('SetPlayMode', options) }

  /**
   * SnoozeAlarm - Snooze the current alarm for some time.
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.Duration - Snooze time as hh:mm:ss, 10 minutes = 00:10:00
   */
  async SnoozeAlarm (options) { return this._request('SnoozeAlarm', options) }

  /**
   * StartAutoplay
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   * @param {string} options.ProgramURI
   * @param {string} options.ProgramMetaData
   * @param {number} options.Volume
   * @param {boolean} options.IncludeLinkedZones
   * @param {boolean} options.ResetVolumeAfter
   */
  async StartAutoplay (options) { return this._request('StartAutoplay', options) }

  /**
   * Stop - Stop playback
   *
   * @param {Object} [options] - An object with the following properties
   * @param {number} options.InstanceID - InstanceID should always be 0
   */
  async Stop (options = { InstanceID: 0 }) { return this._request('Stop', options) }
  // #endregion
}

module.exports = AVTransportService
