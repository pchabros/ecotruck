import { createActionGroup, props } from '@ngrx/store';
import { Telemetry, WeeklyFuelData } from '../../dto/telemetry.dto';

export const TelemetryActions = createActionGroup({
  source: 'Telemetry',
  events: {
    'Load Telemetry': props<{ vehicleId: number; startDate?: string; endDate?: string }>(),
    'Load Telemetry Success': props<{ telemetry: Telemetry[] }>(),
    'Load Telemetry Failure': props<{ error: string }>(),
    'Load Weekly Fuel': props<{ vehicleId: number; startDate?: string; endDate?: string }>(),
    'Load Weekly Fuel Success': props<{ data: WeeklyFuelData }>(),
    'Load Weekly Fuel Failure': props<{ error: string }>(),
  },
});
