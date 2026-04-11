from django.urls import include, path
from rest_framework.routers import DefaultRouter

from vehicle import views

router = DefaultRouter()
router.register("vehicles", views.VehicleViewSet)

app_name = "vehicle"

urlpatterns = [
    path("", include(router.urls)),
]
