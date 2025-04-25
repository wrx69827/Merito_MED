import { useEffect, useState } from "react";
import axios from "axios";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access"); // Upewnij się, że to klucz, pod którym masz token
    console.log("Token JWT:", token);

    if (!token) {
      setError("Brak tokenu. Zaloguj się ponownie.");
      return;
    }

    axios
      .get("http://127.0.0.1:8000/appointments/appointments/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.error("Błąd pobierania wizyt:", err);
        if (err.response && err.response.status === 401) {
          setError("Nieautoryzowany dostęp. Zaloguj się ponownie.");
        } else {
          setError("Wystąpił błąd podczas pobierania wizyt.");
        }
      });
  }, []);

  return (
    <div>
      <h2>📋 Twoje wizyty</h2>
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      {!error && appointments.length === 0 && <p>Brak zaplanowanych wizyt.</p>}
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            ({appt.doctor_specialization}) {appt.doctor_name} –{" "}
            {new Date(appt.date_time).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
