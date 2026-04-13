import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FiltersState } from '../state';

export const selectFiltersState = createFeatureSelector<FiltersState>('filters');

export const selectVehicleId = createSelector(selectFiltersState, (state) => state.vehicleId);

export const selectDateRange = createSelector(selectFiltersState, (state) => state.dateRange);

export const selectLocationId = createSelector(selectFiltersState, (state) => state.locationId);
