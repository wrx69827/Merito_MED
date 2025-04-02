from django.contrib.auth.models import User
from rest_framework import generics
from .models import Doctor
from .serializers import DoctorSerializer, UserSerializer, RegisterSerializer
from django_filters.rest_framework import DjangoFilterBackend

class DoctorListView(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['city', 'specialty']


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer