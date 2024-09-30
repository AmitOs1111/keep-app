import { useForm } from '../../customHooks/useForm'

export function ReminderModal() {
  const [filterByReminder, setFilterByReminder, handelChange] = useForm({
    date: new Date(),
    time: '20:00',
    repetition: '20:00',
  })

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
        name="tome"
        onChange={handelChange}
        value={filterByReminder.time}
      />
      <input
        type="time"
        name="repetition"
        onChange={handelChange}
        value={filterByReminder.repetition}
      />
    </section>
  )
}
