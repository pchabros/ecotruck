import { Component, computed, inject } from '@angular/core';
import { Filters } from './components/filters/filters';
import { Store } from '@ngrx/store';
import { VehiclesActions } from './store/actions/vehicles';
import {
  selectLocationId,
  selectTelemetry,
  selectVehicleId,
  selectVehicles,
  selectWeeklyFuelData,
} from './store';
import { toSignal } from '@angular/core/rxjs-interop';
import { Vehicle } from './dto/vehicle.dto';
import { FiltersActions } from './store/actions/filters';
import { FuelConsumption } from './components/fuel-consumption/fuel-consumption';
import { TelemetryList } from './components/telemetry-list/telemetry-list';
import { MatCardModule } from '@angular/material/card';
import { LocationsMap } from './components/locations-map/locations-map';
import { Telemetry } from './dto/telemetry.dto';
import { Notification } from './components/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Filters, FuelConsumption, TelemetryList, MatCardModule, LocationsMap, Notification],
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
  locationId = toSignal(this.store.select(selectLocationId));
  selectedLocation = computed(() => this.telemetry()?.find(({ id }) => id === this.locationId()));

  handleSelectedVehicle(value: Vehicle['id']) {
    this.store.dispatch(FiltersActions.setVehicle({ vehicleId: value }));
  }

  handleSelectedLocation(value: Telemetry['id']) {
    this.store.dispatch(FiltersActions.setLocation({ locationId: value }));
  }

  handleDateRangeChange(value: { startDate: Date | null; endDate: Date | null }) {
    this.store.dispatch(FiltersActions.setDateRange(value));
  }
}
