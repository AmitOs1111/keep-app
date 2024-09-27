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

[

{_id: 'XZE4m', isPinned: false, createdAt: '2024-09-27T22:00:09.479Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: 'zqXpw', isPinned: false, createdAt: '2024-09-26T14:18:32.938Z', style: {backgroundColor: '#fff9b8'}, info: {…}, …},
{_id: '95OAU', isPinned: false, createdAt: '2024-09-26T14:16:18.258Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: 'wpaS3', isPinned: false, createdAt: '2024-09-26T14:14:19.376Z', style: {backgroundColor: '#efeff1'}, info: {…}, …},
{_id: 'IcCCy', isPinned: false, createdAt: '2024-09-25T14:05:34.856Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: 'goriZ', isPinned: false, createdAt: '2024-09-25T13:24:39.985Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: 'QAv73', isPinned: false, createdAt: '2024-09-25T13:18:00.004Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: 'lCwz6', isPinned: false, createdAt: '2024-09-24T15:47:24.018Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: '1FPJX', isPinned: false, createdAt: '2024-09-24T15:47:14.765Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: '1HvMo', isPinned: false, createdAt: '2024-09-24T15:14:16.718Z', style: {backgroundColor: '#fff'}, info: {…}, …},
{_id: 'YRvFUW', isPinned: false, createdAt: '2024-09-18T16:15:33.052Z', style:  {backgroundColor: '#efeff1'}, info: {…}, …},
{_id: 'g7Lm8l', isPinned: false, createdAt: '2024-09-18T16:15:33.052Z', style: {backgroundColor: '#fbafa9'}, info: 
{title: 'Keep-App', type: 'todo', txt: '', todos: [
  {id:utilService.makeId(), txt: 'i18', isChecked: false},
  {id:utilService.makeId(), txt: 'Mq', isChecked: false},
  {id:utilService.makeId(), txt: 'Map', isChecked: false},
  {id:utilService.makeId(), txt: 'Video', isChecked: false},
  {id:utilService.makeId(), txt: 'Scss', isChecked: false},
  {id:utilService.makeId(), txt: 'Search', isChecked: true},
  {id:utilService.makeId(), txt: 'Labels', isChecked: true},
  {id:utilService.makeId(), txt: 'Canvas', isChecked: true},
  {id:utilService.makeId(), txt: 'edit preview Todos', isChecked: true},
  {id:utilService.makeId(), txt: 'fix modal popup', isChecked: true},
  {id:utilService.makeId(), txt: 'effect by side bar', isChecked: true},
  {id:utilService.makeId(), txt: 'modal sharing', isChecked: false} ,
  {id:utilService.makeId(), txt: 'modal reminder', isChecked: false}
  ], src: '',
  videoId:{}}},
{_id: '3ymyQV', isPinned: false, createdAt: '2024-09-18T16:15:33.052Z', style:  {backgroundColor: '#efeff1'},
 info:{
  src: "",
 title:"was the color of television as generally the color of television was was the port as generally ",
  todos:[],
  txt:"a pleasure burn The sky and from various people more or less had . more or less a different story had I burn it it ",
  type:"txt",
  videoId:{},}
}
]