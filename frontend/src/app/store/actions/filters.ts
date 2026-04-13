import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Telemetry } from '../../dto/telemetry.dto';

export const FiltersActions = createActionGroup({
  source: 'Filters',
  events: {
    'Set Vehicle': props<{ vehicleId?: number }>(),
    'Set Date Range': props<{ startDate?: string; endDate?: string }>(),
    'Reset Filters': emptyProps(), // TODO: remove if not needed
    'Set Location': props<{ locationId: Telemetry['id'] }>(),
  },
});
