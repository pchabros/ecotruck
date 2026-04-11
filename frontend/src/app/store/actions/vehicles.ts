import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Vehicle } from '../../dto/vehicle.dto';

export const VehiclesActions = createActionGroup({
  source: 'Vehicles',
  events: {
    'Load Vehicles': emptyProps(),
    'Load Vehicles Success': props<{ vehicles: Vehicle[] }>(),
    'Load Vehicles Failure': props<{ error: string }>(),
  },
});
