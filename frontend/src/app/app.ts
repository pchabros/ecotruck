import { Component, inject } from '@angular/core';
import { Filters } from './components/filters/filters';
import { Store } from '@ngrx/store';
import { VehiclesActions } from './store/actions/vehicles';
import {
  selectLocations,
  selectTelemetry,
  selectVehicleId,
  selectVehicles,
  selectWeeklyFuelData,
} from './store';
import { toSignal } from '@angular/core/rxjs-interop';
import { Vehicle } from './dto/vehicle.dto';
import { FiltersActions } from './store/actions/filters';
import { FuelConsumption } from '../components/fuel-consumption/fuel-consumption';
import { TelemetryList } from './components/telemetry-list/telemetry-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Filters, FuelConsumption, TelemetryList, MatCardModule],
})
export class App {
  private store = inject(Store);

  constructor() {
    this.store.dispatch(VehiclesActions.loadVehicles());
  }

  selectedVehicle = toSignal(this.store.select(selectVehicleId));
  vehicles = toSignal(this.store.select(selectVehicles));
  fuelData = toSignal(this.store.select(selectWeeklyFuelData));
  telemetry = toSignal(this.store.select(selectTelemetry));
  locations = toSignal(this.store.select(selectLocations));

  handleSelectedChange(value: Vehicle['id']) {
    this.store.dispatch(FiltersActions.setVehicle({ vehicleId: value }));
  }
}
