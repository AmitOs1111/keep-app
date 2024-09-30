import { useForm } from '../../customHooks/useForm'

export function ReminderModal() {
  const [filterByReminder, setFilterByReminder, handelChange] = useForm({
    date: new Date(),
    time: '20:00',
    repetition: false,
  })

  console.log('filterByReminder:', filterByReminder)
  return (
    <section className="reminder-modal flex column">
      <input type="date" name="date" onChange={handelChange} />
      <input type="time" name="tome" onChange={handelChange} />
      <input type="time" name="repetition" onChange={handelChange} />
    </section>
  )
}
