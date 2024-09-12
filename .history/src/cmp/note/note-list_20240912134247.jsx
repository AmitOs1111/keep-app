import { PreviewNote } from '../note/preview-note.jsx'
import { ToolsBar } from './tools-bar.jsx'

export function NoteList() {
  const notes = [
    {
      _id: 'n101',
      isPinned: false,
      createdAt: new Date(),
      style: { backgroundColor: '#fff' },
      info: {
        title: 'lesson45',
        type: 'txt',
        txt: 'video1,video2,video3',
        todos: [],
        src: '',
        videoId: {},
      },
    },
    {
      _id: 'n102',
      isPinned: false,
      createdAt: new Date(),
      style: { backgroundColor: '#fff' },
      info: {
        title: 'lesson45',
        type: 'txt',
        txt: 'video1,video2,video3',
        todos: [],
        src: '',
        videoId: {},
      },
    },
  ]

  return (
    <section className="note-list">
      {notes.map((note) => (
        <article key={note._id}>
          <PreviewNote note={note} />
          <ToolsBar />
        </article>
      ))}
    </section>
  )
}
