from django_filters import rest_framework as filters

from core.models import Telemetry


class TelemetryFilter(filters.FilterSet):
    start_date = filters.DateTimeFilter(field_name="timestamp", lookup_expr="gte")
    end_date = filters.DateTimeFilter(field_name="timestamp", lookup_expr="lte")

    class Meta:
        model = Telemetry
        fields = {"vehicle": ["exact"]}
