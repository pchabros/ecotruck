import random
from datetime import timedelta

from django.core.management.base import BaseCommand
from django.utils import timezone

from core.models import Telemetry, Vehicle


class Command(BaseCommand):
    help = "Generates sample data for trucks and telemetry"

    def handle(self, *_, **__):
        Telemetry.objects.all().delete()
        Vehicle.objects.all().delete()

        vehicles_data = [
            {"name": "Truck 101", "brand": "Volvo", "model": "FH16"},
            {"name": "Truck 102", "brand": "Scania", "model": "R500"},
            {"name": "Truck 103", "brand": "Mercedes-Benz", "model": "Actros"},
        ]

        vehicles = Vehicle.objects.bulk_create(
            [Vehicle(**v) for v in vehicles_data]
        )

        now = timezone.now()
        days_back = 7 * 10

        telemetry_records = []
        for vehicle in vehicles:
            mileage = random.randint(10000, 50000)
            for day in reversed(range(days_back)):
                for hour in reversed(range(24)):
                    mileage += random.randint(5, 80)
                    telemetry_records.append(
                        Telemetry(
                            vehicle=vehicle,
                            timestamp=now - timedelta(days=day, hours=hour),
                            speed=random.randint(0, 90),
                            mileage=mileage,
                            fuel_tank_level=random.randint(10, 100),
                            latitude=random.uniform(50, 55),
                            longitude=random.uniform(15, 25),
                        )
                    )

        Telemetry.objects.bulk_create(telemetry_records)

        self.stdout.write(
            self.style.SUCCESS("Successfully generated trucks and telemetry data")
        )
