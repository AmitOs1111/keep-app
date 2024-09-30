import { useForm } from '../../customHooks/useForm'

export function ReminderModal({ changeContent, note }) {
  const [filterByReminder, setFilterByReminder, handelChange] = useForm(
    note.info.reminder || {
      date: new Date(),
      time: '20:00',
      repetition: '20:00',
    }
  )

  function onReminder() {
    changeContent({ reminder: filterByReminder })
  }

  console.log('filterByReminder:', filterByReminder)
  return (
    <section className="reminder-modal flex column">
      <input
        type="date"
        name="date"
        onChange={handelChange}
        value={filterByReminder.date}
      />
      <input
        type="time"
        name="time"
        onChange={handelChange}
        value={filterByReminder.time}
      />
      <input
        type="time"
        name="repetition"
        onChange={handelChange}
        value={filterByReminder.repetition}
      />
      <button onClick={() => onReminder()}>reminder</button>
    </section>
  )
}
