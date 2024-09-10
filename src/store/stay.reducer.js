export const SET_LOADING = 'SET_LOADING'
export const SET_DARK_SCREEN = 'SET_DARK_SCREEN'
export const SET_FILTER_BY = 'SET_FILTER_BY'

export const SET_STAYS = 'SET_STAYS'
export const SET_ICONS_STAYS = 'SET_ICONS_STAYS'
export const REMOVE_STAY = 'REMOVE_STAY'
export const ADD_STAY = 'ADD_STAY'
export const UPDATE_STAY = 'UPDATE_STAY'

const initialState = {
  stays: [],
  iconsStays: [],
  isLoading: false,
  isDarkScreen: false,
  filterBy: {
    type: '',
    place: '',
    dateReservation: '',
    guest: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
    amenities: '',
    bathrooms: '',
    bedrooms: '',
  },
}

export function stayReducer(state = initialState, action) {
  let stays
  let filterByEdit
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_DARK_SCREEN:
      return { ...state, isDarkScreen: action.isDarkScreen }
    case SET_FILTER_BY:
      filterByEdit = { ...state.filterBy, ...action.filter }
      console.log('filterByEdit from reducer:', filterByEdit)
      return { ...state, filterBy: filterByEdit }

    case SET_STAYS:
      return { ...state, stays: action.stays }
    case SET_ICONS_STAYS:
      return { ...state, iconsStays: action.stays }
    case REMOVE_STAY:
      stays = state.stays.filter((stay) => stay._id !== action.stayId)
      return { ...state, stays: stays }
    case ADD_STAY:
      stays = [action.stay, ...state.stays]
      return { ...state, stays }
    case UPDATE_STAY:
      stays = state.stays.map((currStay) =>
        currStay._id === action.stay._id ? action.stay : currStay
      )
      return { stays, ...state }

    default:
      return state
  }
}
