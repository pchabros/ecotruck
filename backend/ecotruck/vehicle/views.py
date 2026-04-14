import logging

from rest_framework import viewsets

from core.models import Vehicle
from vehicle.serializers import VehicleSerializer

logger = logging.getLogger(__name__)


class VehicleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

    def list(self, request, *args, **kwargs):
        logger.info("Listing vehicles")
        return super().list(request, *args, **kwargs)
