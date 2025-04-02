import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/users/token/", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.access);
      setMessage("✅ Zalogowano!");
      navigate("/appointments");
    } catch (err) {
      setMessage("❌ Błąd logowania");
    }
  };

  return (
    <div>
      <h2>🔐 Logowanie</h2>
      <input
        type="text"
        placeholder="Login"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Zaloguj się</button>
      <p>{message}</p>
    </div>
  );
}
