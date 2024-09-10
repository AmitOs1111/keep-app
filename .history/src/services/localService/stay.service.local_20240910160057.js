import { storageService } from '../localService/async-storage.service.js'
import { utilService } from '../util.service.js'
// import { dataStayService } from '../demoData/demo.data.js'

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
