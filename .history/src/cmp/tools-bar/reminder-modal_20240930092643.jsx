import { useForm } from '../../customHooks/useForm'

export function ReminderModal() {
  const [filterByReminder, setFilterByReminder, handelChange] = useForm({
    date: new Date(),
    time: '20:00',
    repetition: false,
  })
  return (
    <section className="reminder-modal flex column">
      <input type="date" name="date" placeholder="ece" />
      <input type="time" name="tome" />
      <input type="time" name="repetition" />
    </section>
  )
}
