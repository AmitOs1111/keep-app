// import { noteService } from '../services/note.service.js'
import { noteService } from '../services/localService/note.service.local.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { store } from './store.js'
import {
  SET_LOADING,
  SET_NOTES,
  REMOVE_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
} from './note.reducer.js'

export function loadNotes(filterBY) {
  console.log('loadNotes from action')
  // store.dispatch({ type: SET_LOADING, isLoading: true })
  return noteService
    .query(filterBY)
    .then((notes) => {
      // store.dispatch({ type: SET_LOADING, isLoading: false })
      store.dispatch({ type: SET_NOTES, notes })
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot load notes')
      throw err
    })
    .finally(() => {
      console.log('Done load notes')
      // store.dispatch({ type: SET_LOADING, isLoading: false })
    })
}

export function loadNoteById(noteId) {
  // store.dispatch({ type: SET_LOADING, isLoading: true })
  return noteService
    .getById(noteId)
    .then((note) => {
      // store.dispatch({ type: SET_LOADING, isLoading: false })
      // store.dispatch({ type: SET_NOTES, notes })
      return note
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot find note')
      throw err
    })
    .finally(() => {
      console.log('Done load note')
      // store.dispatch({ type: SET_LOADING, isLoading: false })
    })
}

export function removeNote(noteId) {
  return noteService
    .remove(noteId)
    .then(() => {
      console.log('Deleted Succesfully!')
      store.dispatch({ type: REMOVE_NOTE, noteId })
      showSuccessMsg('Note removed')
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot remove note')
      throw err
    })
}

export function addNote(note) {
  // console.log('note from action', note)
  // const note = noteService.getEmptyCar()
  return noteService
    .save(note)
    .then((savedNote) => {
      // console.log('Added note', savedNote)
      store.dispatch({ type: ADD_NOTE, note: savedNote })
      showSuccessMsg('note added')
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot add note')
      throw err
    })
}

export function updateNote(note) {
  console.log('note', note)
  return noteService
    .save(note)
    .then((savedNote) => {
      console.log('Updated note:', savedNote)
      store.dispatch({ type: UPDATE_NOTE, note: savedNote })
      showSuccessMsg('note updated')
      return Promise.resolve()
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot update note')
      throw err
    })
}
