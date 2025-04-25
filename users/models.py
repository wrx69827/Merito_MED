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
    speciality = models.CharField(max_length=100, choices=SPECIALTIES)  # TO JEST KLUCZOWE!
    city = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.speciality} {self.city} - ({self.name} {self.lastname})"

