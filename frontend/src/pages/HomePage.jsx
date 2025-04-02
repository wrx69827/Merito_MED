import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>🩺 Merito MedApp</h1>
      <p>Witaj w systemie rezerwacji wizyt lekarskich</p>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/login">
          <button style={{ margin: "0.5rem" }}>🔐 Zaloguj się</button>
        </Link>
        <Link to="/register">
          <button style={{ margin: "0.5rem" }}>📝 Zarejestruj się</button>
        </Link>
        <Link to="/book">
          <button style={{ margin: "0.5rem" }}>📅 Umów wizytę</button>
        </Link>
        <Link to="/appointments">
          <button style={{ margin: "0.5rem" }}>📋 Twoje wizyty</button>
        </Link>
      </div>
    </div>
  );
}
