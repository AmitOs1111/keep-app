import { storageService } from '../localService/async-storage.service.js'
import { utilService } from '../util.service.js'
import { dataStayService } from '../demoData/demo.data.js'

const STORAGE_KEY = 'stayDB'
const BASE_URL = 'api/stay/'

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
  return storageService.query(STORAGE_KEY, filterBy)
}
function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}
function remove(stayId) {
  return storageService.remove(STORAGE_KEY, stayId)
}
function save(stay) {
  if (stay._id) {
    return storageService.put(STORAGE_KEY, stay)
  } else {
    return storageService.post(STORAGE_KEY, stay)
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
  return dataStayService.getDataStays()
}
