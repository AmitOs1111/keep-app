export const SET_LOADING = 'SET_LOADING'
export const SET_DARK_SCREEN = 'SET_DARK_SCREEN'
export const SET_FILTER_BY = 'SET_FILTER_BY'

export const SET_NOTES = 'SET_NOTES'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

const initialState = {
  notes: [],
  isLoading: false,
  isDarkScreen: false,
}

export function noteReducer(state = initialState, action) {
  let notes
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_DARK_SCREEN:
      return { ...state, isDarkScreen: action.isDarkScreen }

    case SET_NOTES:
      return { ...state, notes: action.notes }
    case REMOVE_NOTE:
      notes = state.notes.filter((note) => note._id !== action.noteId)
      return { ...state, notes: notes }
    case ADD_NOTE:
      notes = [action.note, ...state.notes]
      return { ...state, notes }
    case UPDATE_NOTE:
      notes = state.notes.map((currNote) =>
        currNote._id === action.note._id ? action.note : currNote
      )
      return { ...state, notes }

    default:
      return state
  }
}
