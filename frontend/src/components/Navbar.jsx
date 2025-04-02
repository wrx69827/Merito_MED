import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f5f5f5", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>🏠 Strona główna</Link>
      <Link to="/login" style={{ marginRight: "1rem" }}>🔐 Logowanie</Link>
      <Link to="/register" style={{ marginRight: "1rem" }}>📝 Rejestracja</Link>
      <Link to="/book" style={{ marginRight: "1rem" }}>📅 Umów wizytę</Link>
      <Link to="/appointments">📋 Twoje wizyty</Link>
    </nav>
  );
}
