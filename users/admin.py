from django.contrib import admin
from .models import Doctor
from appointments.models import Appointment  # Importujemy model z nowej aplikacji


# Register your models here.

admin.site.register(Doctor)
admin.site.register(Appointment)