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
      title: utilService.makeLorem(8),
      type: 'txt',
      txt: utilService.makeLorem(15),
      todos: [],
      src: '',
      videoId: {},
    },
    isTrash: false,
    isArchive: false,
  },
]

function getDemoNotes() {
  return demoNotes
}
