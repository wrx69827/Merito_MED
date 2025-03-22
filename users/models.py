from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Doctor(models.Model):
    SPECIALTIES = [
        ('Kardiologia', 'Kardiologia'),
        ('Neurologia', 'Neurologia'),
        ('Dermatologia', 'Dermatologia'),
    ]

    name = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    specialty = models.CharField(max_length=100, choices=SPECIALTIES)
    city = models.CharField(max_length=100)

    def full_name(self):
        return f"{self.name} {self.lastname}"

    def __str__(self):
        return f"{self.name} – {self.specialty} ({self.city})"
