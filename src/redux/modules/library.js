// TYPES

export const UPDATE_LIBRARY = 'UPDATE_LIBRARY'
export const SELECT_SONG = 'SELECT_SONG'

// ACTIONS

export const updateLibrary = (data) => ({
  type: UPDATE_LIBRARY,
  payload: data
})

export const selectSong = (id) => ({
  type: SELECT_SONG,
  payload: id
})

// REDUCERS

export function libraryReducer(mediaFiles = {}, action) {
  if (action.type === UPDATE_LIBRARY) {
    return action.payload
  }
  return mediaFiles
}

export function songReducer(media = '', action) {
  if (action.type === SELECT_SONG) {
    return action.payload
  }
  return media
}
