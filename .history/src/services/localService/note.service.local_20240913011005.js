import { storageService } from './async-storage.service.js'
import { utilService } from '../util.service.js'
// import { dataNoteService } from '../demoData/demo.data.js'

const STORAGE_KEY = 'noteDB'
const BASE_URL = 'api/note/'

export const noteService = {
  query,
  getById,
  save,
  remove,
  getEmptyFilter,
}

function query(filterBy) {
  return storageService.query(STORAGE_KEY, filterBy)
}
function getById(noteId) {
  return storageService.get(STORAGE_KEY, noteId)
}
function remove(noteId) {
  return storageService.remove(STORAGE_KEY, noteId)
}
function save(note) {
  if (note._id) {
    return storageService.put(STORAGE_KEY, note)
  } else {
    return storageService.post(STORAGE_KEY, note)
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
