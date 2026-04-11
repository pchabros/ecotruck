from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Vehicle(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.brand} {self.model} ({self.name})"


class Telemetry(models.Model):
    vehicle = models.ForeignKey(
        Vehicle, on_delete=models.CASCADE, related_name="telemetry"
    )
    timestamp = models.DateTimeField()
    speed = models.IntegerField(validators=[MinValueValidator(0)])
    mileage = models.IntegerField(validators=[MinValueValidator(0)])
    fuel_tank_level = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)]
    )
    latitude = models.FloatField(
        validators=[MinValueValidator(-90), MaxValueValidator(90)]
    )
    longitude = models.FloatField(
        validators=[MinValueValidator(-180), MaxValueValidator(180)]
    )

    class Meta:
        ordering = ["-timestamp"]

    def __str__(self):
        return f"{self.vehicle} - {self.timestamp}"
