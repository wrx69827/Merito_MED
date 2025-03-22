from django.db import models
from django.contrib.auth.models import User
from users.models import Doctor  # Importujemy model Doctor

class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Pacjent rezerwujący wizytę
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)  # Lekarz, u którego jest wizyta
    date_time = models.DateTimeField()  # Data i godzina wizyty

    def __str__(self):
        return f"Wizyta u {self.doctor.name} dnia {self.date_time}"
