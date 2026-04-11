import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Vehicle } from '../dto/vehicle.dto';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private api = inject(ApiService);

  getVehicles(): Observable<Vehicle[]> {
    return this.api.get<Vehicle[]>('vehicle/vehicles');
  }
}
