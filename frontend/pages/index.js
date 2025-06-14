import AppointmentForm from '../components/AppointmentForm'
import { useEffect, useState } from 'react'

export default function Home() {
  const [appointments, setAppointments] = useState([])

  const fetchAppointments = async () => {
    const res = await fetch('/api/appointments')
    const data = await res.json()
    setAppointments(data)
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return (
    <div>
      <h1>Appointments</h1>
      <AppointmentForm />
      <ul>
        {appointments.map(a => (
          <li key={a.id}>{a.patientName} with {a.doctorName} at {a.appointmentTime}</li>
        ))}
      </ul>
    </div>
  )
}
