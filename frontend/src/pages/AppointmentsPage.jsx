import { useEffect, useState } from "react";
import axios from "axios";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:8000/appointments/appointments/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAppointments(res.data);
      });
  }, []);

  return (
    <div>
      <h2>📋 Twoje wizyty</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.doctor_name} ({appt.doctor_specialization}) – {new Date(appt.date_time).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
