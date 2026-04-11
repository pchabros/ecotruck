from django_filters import rest_framework as filters

from core.models import Telemetry


class TelemetryFilter(filters.FilterSet):
    start = filters.DateTimeFilter(field_name="timestamp", lookup_expr="gte")
    end = filters.DateTimeFilter(field_name="timestamp", lookup_expr="lte")

    class Meta:
        model = Telemetry
        fields = {"vehicle": ["exact"]}
