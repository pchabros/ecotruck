from django.urls import include, path
from rest_framework.routers import DefaultRouter

from telemetry import views

router = DefaultRouter()
router.register("telemetry", views.TelemetryViewSet)

app_name = "telemetry"

urlpatterns = [
    path("", include(router.urls)),
]
