import logging

from core.models import Telemetry
from django.db.models import Avg, F
from django.db.models.functions import TruncWeek
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from telemetry.filters import TelemetryFilter
from telemetry.serializers import TelemetrySerializer

logger = logging.getLogger(__name__)


class TelemetryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Telemetry.objects.all()
    serializer_class = TelemetrySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = TelemetryFilter

    def list(self, request, *args, **kwargs):
        logger.info("Listing telemetry, filters: %s", request.query_params.dict())
        return super().list(request, *args, **kwargs)

    @action(detail=False, methods=["GET"], filterset_class=TelemetryFilter)
    def weekly_fuel_consumption(self, request):
        logger.info(
            "Weekly fuel consumption, filters: %s", request.query_params.dict()
        )
        weekly_data = (
            self.filter_queryset(self.get_queryset())
            .annotate(week=TruncWeek("timestamp"))
            .values("week")
            .annotate(avg_consumption=Avg(100 - F("fuel_tank_level")))
            .order_by("week")
        )
        result = [
            {
                "week": item["week"].isoformat(),
                "avg_consumption": item["avg_consumption"],
            }
            for item in weekly_data
        ]

        return Response(result)
