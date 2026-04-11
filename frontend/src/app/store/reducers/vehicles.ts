import { createReducer, on } from '@ngrx/store';
import { initialVehiclesState } from '../state';
import { VehiclesActions } from '../actions/vehicles';

export const vehiclesReducer = createReducer(
  initialVehiclesState,
  on(VehiclesActions.loadVehicles, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(VehiclesActions.loadVehiclesSuccess, (state, { vehicles }) => ({
    ...state,
    items: vehicles,
    loading: false,
  })),
  on(VehiclesActions.loadVehiclesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
