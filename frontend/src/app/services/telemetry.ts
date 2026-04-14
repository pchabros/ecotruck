import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Telemetry, WeeklyFuelData } from '../dto/telemetry.dto';

@Injectable({
  providedIn: 'root',
})
export class TelemetryService {
  private api = inject(ApiService);

  getTelemetry(vehicleId: number, startDate: Date | null, endDate: Date | null): Observable<Telemetry[]> {
    return this.api.get<Telemetry[]>('telemetry', {
      vehicle: vehicleId,
      start_date: startDate?.toISOString(),
      end_date: endDate?.toISOString(),
    });
  }

  getWeeklyFuelConsumption(
    vehicleId: number,
    startDate: Date | null,
    endDate: Date | null,
  ): Observable<WeeklyFuelData> {
    return this.api.get<WeeklyFuelData>('telemetry/weekly_fuel_consumption', {
      vehicle: vehicleId,
      start_date: startDate?.toISOString(),
      end_date: endDate?.toISOString(),
    });
  }
}
