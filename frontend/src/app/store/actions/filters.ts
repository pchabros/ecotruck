import { createActionGroup, props } from '@ngrx/store';
import { Telemetry } from '../../dto/telemetry.dto';

export const FiltersActions = createActionGroup({
  source: 'Filters',
  events: {
    'Set Vehicle': props<{ vehicleId?: number }>(),
    'Set Date Range': props<{ startDate: Date | null; endDate: Date | null }>(),
    'Set Location': props<{ locationId: Telemetry['id'] }>(),
  },
});
