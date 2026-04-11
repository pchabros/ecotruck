import random
from datetime import datetime, timedelta

from django.core.management.base import BaseCommand
from django.utils import timezone

from core.models import Telemetry, Vehicle


class Command(BaseCommand):
    help = "Generates sample data for trucks and telemetry"

    def handle(self, *_, **__):
        vehicles_data = [
            {"name": "Truck 101", "brand": "Volvo", "model": "FH16"},
            {"name": "Truck 102", "brand": "Scania", "model": "R500"},
            {"name": "Truck 103", "brand": "Mercedes-Benz", "model": "Actros"},
        ]

        vehicles = [
            Vehicle.objects.create(name=v["name"], brand=v["brand"], model=v["model"])
            for v in vehicles_data
        ]

        today = timezone.make_aware(datetime(2026, 4, 11))
        days_back = 7 * 10

        for vehicle in vehicles:
            for day in range(days_back):
                for hour in range(24):
                    Telemetry.objects.create(
                        vehicle=vehicle,
                        timestamp=today - timedelta(days=day, hours=hour),
                        speed=random.randint(0, 90),
                        mileage=random.randint(10000, 500000),
                        fuel_tank_level=random.randint(10, 100),
                        latitude=random.uniform(50, 55),
                        longitude=random.uniform(15, 25),
                    )

        self.stdout.write(
            self.style.SUCCESS("Successfully generated trucks and telemetry data")
        )
