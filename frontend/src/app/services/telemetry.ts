import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Telemetry, WeeklyFuelData } from '../dto/telemetry.dto';

@Injectable({
  providedIn: 'root',
})
export class TelemetryService {
  private api = inject(ApiService);

  getTelemetry(vehicleId: number, startDate?: string, endDate?: string): Observable<Telemetry[]> {
    return this.api.get<Telemetry[]>('telemetry/telemetry', {
      vehicle: vehicleId,
      start_date: startDate,
      end_date: endDate,
    });
  }

  getWeeklyFuelConsumption(
    vehicleId: number,
    startDate?: string,
    endDate?: string,
  ): Observable<WeeklyFuelData[]> {
    return this.api.get<WeeklyFuelData[]>('telemetry/telemetry/weekly_fuel_consumption', {
      vehicle: vehicleId,
      start_date: startDate,
      end_date: endDate,
    });
  }
}
