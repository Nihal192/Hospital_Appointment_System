import { useEffect, useState } from 'react';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ patientName: '', doctorName: '', appointmentTime: '' });

  useEffect(() => {
    fetch('http://localhost:8080/appointments')
      .then(res => res.json())
      .then(setAppointments)
      .catch(console.error);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8080/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const res = await fetch('http://localhost:8080/appointments');
    setAppointments(await res.json());
  };

  return (
    <div>
      <h1>Appointments</h1>
      <form onSubmit={submit}>
        <input placeholder="Patient" value={form.patientName} onChange={e => setForm({...form, patientName: e.target.value})} />
        <input placeholder="Doctor" value={form.doctorName} onChange={e => setForm({...form, doctorName: e.target.value})} />
        <input type="datetime-local" value={form.appointmentTime} onChange={e => setForm({...form, appointmentTime: e.target.value})} />
        <button type="submit">Book</button>
      </form>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>{a.patientName} with {a.doctorName} at {a.appointmentTime}</li>
        ))}
      </ul>
    </div>
  );
}
