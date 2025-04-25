from rest_framework import generics, permissions
from .models import Appointment
from .serializers import AppointmentSerializer

class AppointmentView(generics.ListCreateAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # ✅ Pokaż tylko wizyty zalogowanego użytkownika
        return Appointment.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # ✅ Automatyczne przypisanie użytkownika do wizyty
        serializer.save(user=self.request.user)