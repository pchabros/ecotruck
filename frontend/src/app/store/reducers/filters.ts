import { createReducer, on } from '@ngrx/store';
import { initialFiltersState } from '../state';
import { FiltersActions } from '../actions/filters';

export const filtersReducer = createReducer(
  initialFiltersState,
  on(FiltersActions.setVehicle, (state, { vehicleId }) => ({
    ...state,
    vehicleId,
  })),
  on(FiltersActions.setDateRange, (state, { startDate, endDate }) => ({
    ...state,
    startDate,
    endDate,
  })),
  on(FiltersActions.resetFilters, () => initialFiltersState),
  on(FiltersActions.setLocation, (state, { locationId }) => ({ ...state, locationId })),
);
