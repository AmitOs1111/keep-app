import { useEffect, useState } from 'react'
import { eventBusService } from '../services/event-bus.service.js'

export function UserMsg() {
  const [msg, setMsg] = useState(null)
  // const [msg, setMsg] = useState({ txt: 'some message', type: '' })

  useEffect(() => {
    eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg)
      setTimeout(onCloseMsg, 10000)
    })
  }, [])

  function onCloseMsg() {
    setMsg(null)
  }

  if (!msg) return ''
  return (
    <div className={'user-msg flex align-center justify-center' + msg.type}>
      <p>{msg.txt}</p>
      <button onClick={() => onCloseMsg()}>x</button>
    </div>
  )
}
