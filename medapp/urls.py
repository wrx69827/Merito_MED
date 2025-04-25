from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("users/", include("users.urls")),
    path("appointments/", include("appointments.urls")),
]
