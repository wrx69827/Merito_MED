import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import Navbar from "./components/Navbar"; // <== dodaj

export default function App() {
  return (
    <Router>
      <Navbar /> {/* <-- pokazuje navbar na każdej podstronie */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book" element={<BookAppointmentPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
      </Routes>
    </Router>
  );
}
