import { Telemetry, WeeklyFuelData } from '../dto/telemetry.dto';
import { Vehicle } from '../dto/vehicle.dto';

export interface FiltersState {
  vehicleId: number | undefined;
  dateRange: {
    startDate: string | undefined;
    endDate: string | undefined;
  };
}

export interface VehiclesState {
  items: Vehicle[];
  loading: boolean;
  error: string | null;
}

export interface TelemetryState {
  telemetry: Telemetry[];
  telemetryLoading: boolean;
  telemetryError: string | null;
  weeklyFuelData: WeeklyFuelData | null;
  weeklyFuelDataLoading: boolean;
  weeklyFuelDataError: string | null;
}

export interface AppState {
  filters: FiltersState;
  vehicles: VehiclesState;
  telemetry: TelemetryState;
}

export const initialFiltersState: FiltersState = {
  vehicleId: undefined,
  dateRange: {
    startDate: undefined,
    endDate: undefined,
  },
};

export const initialVehiclesState: VehiclesState = {
  items: [],
  loading: false,
  error: null,
};

export const initialTelemetryState: TelemetryState = {
  telemetry: [],
  telemetryLoading: false,
  telemetryError: null,
  weeklyFuelData: null,
  weeklyFuelDataLoading: false,
  weeklyFuelDataError: null,
};
