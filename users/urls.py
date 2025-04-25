from django.urls import path
from .views import DoctorListView, RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
  
    path('doctors/', DoctorListView.as_view(), name='doctor-list'),
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Logowanie (zwraca access i refresh token)
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Odświeżanie tokena

]


urlpatterns += [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
