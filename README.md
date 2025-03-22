# 🩺 Merito MedApp – System rezerwacji wizyt lekarskich

Projekt stworzony jako aplikacja studencka w Django + React, umożliwiający:
- Rejestrację i logowanie użytkownika
- Rezerwację wizyty u lekarza w wybranym terminie
- Przeglądanie własnych wizyt
- Automatyczne przypisywanie lekarza i użytkownika po stronie backendu
- Logowanie z wykorzystaniem JWT (JSON Web Token)

## ⚙️ Technologie

### Backend:
- Python 3.13
- Django 5
- Django REST Framework
- Simple JWT
- SQLite

### Frontend:
- React
- Axios
- HTML/CSS + Emoji UI 😉

---

## 🧪 Jak uruchomić aplikację lokalnie?

### 🔹 Backend (Django)

```bash
cd backend/  # lub do głównego folderu jeśli nie masz podziału
python -m venv venv
source venv/bin/activate  # lub .\venv\Scripts\activate na Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
