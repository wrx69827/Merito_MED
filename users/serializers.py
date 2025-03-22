from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Doctor

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}  # Ukrywa hasło w odpowiedzi API

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)  # Tworzenie użytkownika z zaszyfrowanym hasłem
        return user