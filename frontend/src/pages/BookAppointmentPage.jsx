import { useEffect, useState } from "react";
import axios from "axios";

export default function BookAppointmentPage() {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/users/doctors/").then((res) => {
      setDoctors(res.data);
    });
  }, []);

  const bookAppointment = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://127.0.0.1:8000/appointments/appointments/",
        {
          doctor: doctorId,
          date_time: dateTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("✅ Wizyta zarezerwowana!");
    } catch (error) {
      setMessage("❌ Błąd rezerwacji");
    }
  };

  return (
    <div>
      <h2>📅 Umów wizytę</h2>

      <select onChange={(e) => setDoctorId(e.target.value)} value={doctorId}>
        <option>Wybierz lekarza</option>
        {doctors.map((doc) => (
          <option key={doc.id} value={doc.id}>
            {doc.name} {doc.lastname} – {doc.specialty}
          </option>
        ))}
      </select>

      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <button onClick={bookAppointment}>Zarezerwuj</button>

      <p>{message}</p>
    </div>
  );
}
