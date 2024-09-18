import { utilService } from '../util.service.js'

export const demoNotesService = {
  getDemoNotes,
}

const demoNotes = [
  {
    _id: utilService.makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: utilService.makeLorem(5),
      type: 'txt',
      txt: utilService.makeLorem(10),
      todos: [],
      src: '',
      videoId: {},
    },
    labels: ['work'],
    isTrash: false,
    isArchive: false,
  },
  {
    _id: utilService.makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: utilService.makeLorem(5),
      type: 'img',
      txt: '',
      todos: [],
      src: 'demo1.jpg',
      videoId: {},
    },
    labels: [],
    isTrash: false,
    isArchive: false,
  },

  {
    _id: utilService.makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: 'Todos',
      type: 'todo',
      txt: '',
      todos: [
        { txt: 'Bank', isChecked: false },
        { txt: 'Doctor', isChecked: false },
        { txt: 'pay study', isChecked: false },
      ],
      src: '',
      videoId: {},
    },
    labels: [],
    isTrash: false,
    isArchive: false,
  },
  {
    _id: utilService.makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: 'Keep-App',
      type: 'todo',
      txt: '',
      todos: [
        { txt: 'i18', isChecked: false },
        { txt: 'Mq', isChecked: false },
        { txt: 'Map', isChecked: false },
        { txt: 'Video', isChecked: false },
        { txt: 'Scss', isChecked: false },
        { txt: 'Search', isChecked: false },
        { txt: 'Labels', isChecked: false },
        { txt: 'Canvas', isChecked: false },
      ],
      src: '',
      videoId: {},
    },
    labels: [],
    isTrash: false,
    isArchive: false,
  },
  {
    _id: utilService.makeId(),
    isPinned: false,
    createdAt: new Date(),
    style: { backgroundColor: '#fff' },
    info: {
      title: utilService.makeLorem(8),
      type: 'txt',
      txt: utilService.makeLorem(15),
      todos: [],
      src: '',
      videoId: {},
    },
    labels: [],
    isTrash: false,
    isArchive: false,
  },
]

function getDemoNotes() {
  return demoNotes
}
