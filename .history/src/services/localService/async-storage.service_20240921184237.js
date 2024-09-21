import { demoNotesService } from '../../services/demoData/demo.data.js'
// import { dataUserService } from '../../services/demoData/demo.user.data.js'

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

function query(entityType, filterBy, delay = 400) {
  let entities = JSON.parse(localStorage.getItem(entityType)) || []

  //----create a new note to display----
  if (!entities || entities.length === 0) {
    if (entityType === 'noteDB') entities = demoNotesService.getDemoNotes()
    _save(entityType, entities)
  }

  if (filterBy) {
    const { type, isTrash, isArchive, label, search } = filterBy
    if (search) {
      const regExp = new RegExp(search, 'i')

      const txts = entities.filter((note) => regExp.test(note.info.txt))
      const todos = entities.filter((note) => {
        return note.info.todos.find((item) => regExp.test(item.txt))
      })
      entities = _connectNotes(txts, todos)
    }

    if (!isTrash) {
      entities = entities.filter((note) => !note.isTrash)
    }
    if (isTrash) {
      entities = entities.filter((note) => note.isTrash)
    }

    if (!isArchive) {
      entities = entities.filter((note) => !note.isArchive)
    }
    if (isArchive) {
      entities = entities.filter((note) => note.isArchive)
    }

    if (label) {
      const regExp = new RegExp(label, 'i')

      entities = entities.filter((note) => {
        return note.labels.find((item) => regExp.test(item))
      })
    }

    if (type) {
      const regExp = new RegExp(type, 'i')

      entities = entities.filter((note) => {
        return note.type.find((item) => regExp.test(item))
      })
    }
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
  const note = _createNote(newEntity)

  return query(entityType).then((entities) => {
    entities.unshift(note)
    _save(entityType, entities)
    return note
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
    _save(entityType, entities)
    return Promise.resolve(noteRemove._id)
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

function _createNote({ info, style }) {
  return {
    _id: _makeId(),
    isPinned: false,
    createdAt: new Date(),
    style,
    info,
    labels: [],
    isTrash: false,
    isArchive: false,
  }
}

function _connectNotes(txts, todos) {
  const res = []
  const notes = [txts, todos]

  notes.forEach((entities) => {
    entities.forEach((entity) => {
      const foundNote = res.find((item) => item._id === entity._id)
      if (!foundNote) res.push(entity)
    })
  })
  return res
}
