import { filtersReducer } from './filters';
import { vehiclesReducer } from './vehicles';
import { telemetryReducer } from './telemetry';

export const reducers = {
  filters: filtersReducer,
  vehicles: vehiclesReducer,
  telemetry: telemetryReducer,
};
