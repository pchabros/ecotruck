import { createSelector, createFeatureSelector } from '@ngrx/store';
import { VehiclesState } from '../state';

export const selectVehiclesState = createFeatureSelector<VehiclesState>('vehicles');

export const selectVehicles = createSelector(selectVehiclesState, (state) => state.items);

export const selectVehiclesLoading = createSelector(selectVehiclesState, (state) => state.loading);

export const selectVehiclesError = createSelector(selectVehiclesState, (state) => state.error);
