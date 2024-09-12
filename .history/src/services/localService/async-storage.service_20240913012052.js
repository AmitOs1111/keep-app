import { demoNotesService } from '../../services/demoData/demo.data.js'
// import { dataUserService } from '../../services/demoData/demo.user.data.js'

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

function query(entityType, filterBy = {}, delay = 600) {
  let entities = JSON.parse(localStorage.getItem(entityType)) || []
  if (!entities || entities.length === 0) {
    console.log(' entities:', entities)
    if (entityType === 'noteDB') entities = demoNotesService.getDemoNotes()
    // if (entityType === 'userDB') entities = dataUserService.getDataUsers()

    _save(entityType, entities)
  }
  // console.log('filterBy from service storage:', filterBy)
  if (filterBy.type) {
    const regExp = new RegExp(filterBy.type, 'i')

    entities = entities.filter((note) => {
      return note.type.find((item) => regExp.test(item))
    })
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities)
    }, delay)
  })
}

function get(entityType, entityId) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId)
  )
}

function post(entityType, newEntity) {
  newEntity._id = _makeId()
  return query(entityType).then((entities) => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    const noteRemove = entities[idx]
    entities.splice(idx, 1)
    return Promise.resolve(noteRemove._id)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  console.log('entityType FROM SAVE!', entityType)
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
