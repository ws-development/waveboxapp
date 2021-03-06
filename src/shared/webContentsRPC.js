module.exports = Object.freeze({
  // Events
  WCRPC_DOM_READY: 'WCRPC_DOM_READY',
  WCRPC_DID_FRAME_FINISH_LOAD: 'WCRPC_DID_FRAME_FINISH_LOAD',
  WCRPC_DID_GET_REDIRECT_REQUEST: 'WCRPC_DID_GET_REDIRECT_REQUEST',

  // Tasks
  WCRPC_CLOSE_WINDOW: 'WCRPC_CLOSE_WINDOW',
  WCRPC_SEND_INPUT_EVENT: 'WCRPC_SEND_INPUT_EVENT',
  WCRPC_SEND_INPUT_EVENTS: 'WCRPC_SEND_INPUT_EVENTS',
  WCRPC_SHOW_ASYNC_MESSAGE_DIALOG: 'WCRPC_SHOW_ASYNC_MESSAGE_DIALOG',

  // Getters
  WCRPC_SYNC_GET_GUEST_PRELOAD_CONFIG: 'WCRPC_SYNC_GET_GUEST_PRELOAD_CONFIG',
  WCRPC_SYNC_GET_EXTENSION_PRELOAD_CONFIG: 'WCRPC_SYNC_GET_EXTENSION_PRELOAD_CONFIG'
})
