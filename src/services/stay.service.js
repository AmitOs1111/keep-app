import { utilService } from '../services/util.service.js'
import { httpService } from '../services/http.service.js'
// import { dataStayService } from '../demoData/demo.data.js'

const STORAGE_KEY = 'stayDB'
const BASE_URL = 'stay/'

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyFilter,
  getReservationCredentials,
  getIconsStays,
}

function query(filterBy) {
  return httpService.query(BASE_URL, filterBy)
}
function getById(stayId) {
  return httpService.get(BASE_URL + stayId)
}
function remove(stayId) {
  // return Promise.reject('Not now!');
  return httpService.delete(BASE_URL, stayId)
}
function save(stay) {
  if (stay._id) {
    return httpService.put(BASE_URL, stay)
    // return storageService.put(STORAGE_KEY, stay)
  } else {
    // When switching to backend - remove the next line!
    return httpService.post(BASE_URL, stay)
    // return storageService.post(STORAGE_KEY, stay)
  }
}
function getEmptyFilter() {
  return {
    place: '',
    dateReservation: '',
    guest: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
  }
}
function getReservationCredentials(stay, filterBy) {
  const { checkIn, checkOut } = filterBy.dateReservation
  let price, nights
  return {
    price: stay.price,
    checkIn: _getFormatDate(checkIn),
    checkOut: _getFormatDate(checkOut),
    guest: _getCountGuest(filterBy.guest),
    nights: _getDaysBetween(checkIn, checkOut),
    total: _getTotalPrice(stay.price, _getDaysBetween(checkIn, checkOut)),
  }
}

function _getFormatDate(date) {
  if (!date) return ''

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}
function _getCountGuest(guest) {
  const valuesArray = Object.values(guest)
  return valuesArray.reduce((acc, currentValue) => {
    return acc + currentValue
  }, 0)
}
function _getDaysBetween(checkInDate, checkOutDate) {
  if (!checkInDate || !checkOutDate) return ''
  // Convert the date strings to Date objects
  const checkIn = new Date(checkInDate)
  const checkOut = new Date(checkOutDate)
  // Calculate the difference in time (in milliseconds)
  const differenceInTime = checkOut - checkIn
  // Convert the difference from milliseconds to days
  const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24)
  // Return the difference in days
  return differenceInDays
}
function _getTotalPrice(price, nights) {
  if (!nights) {
    return price
  }
  return price * nights
}

function getIconsStays() {
  return httpService.get(BASE_URL + 'icons/')
  // return dataStayService.getDataStays()
}
