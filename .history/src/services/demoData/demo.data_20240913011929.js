import { getRandomInt, makeId, makeLorem } from '../util.service.js'

export const demoNotesService = {
  getDemoNotes,
}

const demoNotes = [
  {
    _id: makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: makeLorem(20),
      type: 'txt',
      txt: makeLorem(40),
      todos: [],
      src: '',
      videoId: {},
    },
  },
  {
    _id: makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: makeLorem(20),
      type: 'txt',
      txt: makeLorem(40),
      todos: [],
      src: '',
      videoId: {},
    },
  },
  {
    _id: makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: makeLorem(20),
      type: 'txt',
      txt: makeLorem(40),
      todos: [],
      src: '',
      videoId: {},
    },
  },
  {
    _id: makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: makeLorem(20),
      type: 'txt',
      txt: makeLorem(40),
      todos: [],
      src: '',
      videoId: {},
    },
  },
  {
    _id: makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: makeLorem(20),
      type: 'txt',
      txt: makeLorem(40),
      todos: [],
      src: '',
      videoId: {},
    },
  },
]

function getDemoNotes() {
  return demoNotes
}
