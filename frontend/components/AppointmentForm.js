import { useState } from 'react'

export default function AppointmentForm() {
  const [patientName, setPatientName] = useState('')
  const [doctorName, setDoctorName] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientName, doctorName, appointmentTime })
    })
    setPatientName('')
    setDoctorName('')
    setAppointmentTime('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Patient" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
      <input placeholder="Doctor" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
      <input type="datetime-local" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />
      <button type="submit">Book</button>
    </form>
  )
}
