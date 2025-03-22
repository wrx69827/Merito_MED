from rest_framework import serializers
from .models import Appointment
from datetime import timedelta

class AppointmentSerializer(serializers.ModelSerializer):
    doctor_name = serializers.CharField(source='doctor.full_name', read_only=True)
    doctor_specialization = serializers.CharField(source='doctor.specialty', read_only=True)

    class Meta:
        model = Appointment
        fields = ['id', 'date_time', 'doctor', 'doctor_name', 'doctor_specialization']


    def validate(self, data):
        """Sprawdza, czy lekarz ma wolny termin z min. 40-minutowym odstępem"""
        doctor = data['doctor']
        date_time = data['date_time']

        # Sprawdzamy, czy w bazie danych istnieje już wizyta na ten termin
        overlapping_appointments = Appointment.objects.filter(
            doctor=doctor,
            date_time__gte=date_time - timedelta(minutes=40),
            date_time__lte=date_time + timedelta(minutes=40)
        )

        if overlapping_appointments.exists():
            raise serializers.ValidationError(
                "Lekarz jest już zajęty w tym terminie. Wybierz inny termin"
            )

        return data
