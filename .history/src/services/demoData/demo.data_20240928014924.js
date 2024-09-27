import { utilService } from '../util.service.js'

export const demoNotesService = {
  getDemoNotes,
}

const demoNotes = [
  {
    _id: '1HvMo',
    isPinned: false,
    createdAt: '2024-09-24T15:14:16.718Z',
    style: { backgroundColor: '#fff' },
    info: {
      type: 'txt',
      title: 'kdefocvkw',
      txt: 'dsvdfv\nsdvfd\n\n1111',
      todos: [],
      src: '',
      videoId: {},
    },
  },
  {
    _id: 'YRvFUW',
    isPinned: false,
    createdAt: '2024-09-18T16:15:33.052Z',
    style: { backgroundColor: '#efeff1' },
    info: {
      title: 'Todos',
      type: 'todo',
      txt: '',
      todos: [
        { id: utilService.makeId(), txt: 'Bank', isChecked: false },
        { id: utilService.makeId(), txt: 'Doctor', isChecked: false },
        { id: utilService.makeId(), txt: 'pay study', isChecked: false },
        { id: utilService.makeId(), txt: 'TLV', isChecked: false },
        {
          id: utilService.makeId(),
          txt: 'back money from cares',
          isChecked: false,
        },
        { id: utilService.makeId(), txt: 'care car', isChecked: false },
        { id: utilService.makeId(), txt: 'testing car', isChecked: false },
      ],
      src: '',
      videoId: {},
    },
  },
  {
    _id: 'g7Lm8l',
    isPinned: false,
    createdAt: '2024-09-18T16:15:33.052Z',
    style: { backgroundColor: '#fbafa9' },
    info: {
      title: 'Keep-App',
      type: 'todo',
      txt: '',
      todos: [
        { id: utilService.makeId(), txt: 'i18', isChecked: false },
        { id: utilService.makeId(), txt: 'Mq', isChecked: false },
        { id: utilService.makeId(), txt: 'Map', isChecked: false },
        { id: utilService.makeId(), txt: 'Video', isChecked: false },
        { id: utilService.makeId(), txt: 'Scss', isChecked: false },
        { id: utilService.makeId(), txt: 'Search', isChecked: true },
        { id: utilService.makeId(), txt: 'Labels', isChecked: true },
        { id: utilService.makeId(), txt: 'Canvas', isChecked: true },
        {
          id: utilService.makeId(),
          txt: 'edit preview Todos',
          isChecked: true,
        },
        { id: utilService.makeId(), txt: 'fix modal popup', isChecked: true },
        {
          id: utilService.makeId(),
          txt: 'effect by side bar',
          isChecked: true,
        },
        { id: utilService.makeId(), txt: 'modal sharing', isChecked: false },
        { id: utilService.makeId(), txt: 'modal reminder', isChecked: false },
      ],
      src: '',
      videoId: {},
    },
  },
  {
    _id: '3ymyQV',
    isPinned: false,
    createdAt: '2024-09-18T16:15:33.052Z',
    style: { backgroundColor: '#efeff1' },
    info: {
      src: '',
      title:
        'was the color of television as generally the color of television was was the port as generally ',
      todos: [],
      txt: 'a pleasure burn The sky and from various people more or less had . more or less a different story had I burn it it ',
      type: 'txt',
      videoId: {},
    },
  },
]
// const demoNotes2 = [
//   {
//     _id: utilService.makeId(),
//     isPinned: false,
//     createdAt: new Date(),
//     style: { backgroundColor: '#fff' },
//     info: {
//       title: utilService.makeLorem(5),
//       type: 'txt',
//       txt: utilService.makeLorem(10),
//       todos: [],
//       src: '',
//       videoId: {},
//     },
//     labels: [],
//     isTrash: false,
//     isArchive: false,
//   },
//   {
//     _id: utilService.makeId(),
//     isPinned: false,
//     createdAt: new Date(),
//     style: { backgroundColor: '#fff' },
//     info: {
//       title: utilService.makeLorem(5),
//       type: 'img',
//       txt: '',
//       todos: [],
//       src: 'demo1.jpg',
//       videoId: {},
//     },
//     labels: [],
//     isTrash: false,
//     isArchive: false,
//   },

//   {
//     _id: utilService.makeId(),
//     isPinned: false,
//     createdAt: new Date(),
//     style: { backgroundColor: '#fff' },
//     info: {
//       title: 'Todos',
//       type: 'todo',
//       txt: '',
//       todos: [
//         { txt: 'Bank', isChecked: false },
//         { txt: 'Doctor', isChecked: false },
//         { txt: 'pay study', isChecked: false },
//       ],
//       src: '',
//       videoId: {},
//     },
//     labels: [],
//     isTrash: false,
//     isArchive: false,
//   },
//   {
//     _id: utilService.makeId(),
//     isPinned: false,
//     createdAt: new Date(),
//     style: { backgroundColor: '#fff' },
//     info: {
//       title: 'Keep-App',
//       type: 'todo',
//       txt: '',
//       todos: [
//         { txt: 'i18', isChecked: false },
//         { txt: 'Mq', isChecked: false },
//         { txt: 'Map', isChecked: false },
//         { txt: 'Video', isChecked: false },
//         { txt: 'Scss', isChecked: false },
//         { txt: 'Search', isChecked: false },
//         { txt: 'Labels', isChecked: false },
//         { txt: 'Canvas', isChecked: false },
//       ],
//       src: '',
//       videoId: {},
//     },
//     labels: [],
//     isTrash: false,
//     isArchive: false,
//   },
//   {
//     _id: utilService.makeId(),
//     isPinned: false,
//     createdAt: new Date(),
//     style: { backgroundColor: '#fff' },
//     info: {
//       title: utilService.makeLorem(8),
//       type: 'txt',
//       txt: utilService.makeLorem(15),
//       todos: [],
//       src: '',
//       videoId: {},
//     },
//     labels: [],
//     isTrash: false,
//     isArchive: false,
//   },
// ]

function getDemoNotes() {
  return demoNotes
}
