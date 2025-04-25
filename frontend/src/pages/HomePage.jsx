import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsLoggedIn(!!token); // true jeśli token istnieje
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>🩺 Merito MedApp</h1>
      <p>Witaj w systemie rezerwacji wizyt lekarskich</p>

      <div style={{ marginTop: "2rem" }}>
        {isLoggedIn ? (
          <button onClick={handleLogout} style={{ margin: "0.5rem" }}>
            🚪 Wyloguj się
          </button>
        ) : (
          <Link to="/login">
            <button style={{ margin: "0.5rem" }}>🔐 Zaloguj się</button>
          </Link>
        )}

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
