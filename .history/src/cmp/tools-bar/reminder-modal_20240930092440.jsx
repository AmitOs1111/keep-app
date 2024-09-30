import { useForm } from '../../customHooks/useForm'

export function ReminderModal() {
  const [filterByReminder, setFilterByReminder, handelChange] = useForm({
    date: new Date(),
    time: '20:00',
    repetition: false,
  })
  return (
    <section className="reminder-modal">
      <input type="date" />
      <input type="time" />
      <input type="time" />
    </section>
  )
}
