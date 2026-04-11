import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TelemetryState } from '../state';

export const selectTelemetryState = createFeatureSelector<TelemetryState>('telemetry');

export const selectTelemetry = createSelector(selectTelemetryState, (state) => state.telemetry);

export const selectTelemetryLoading = createSelector(
  selectTelemetryState,
  (state) => state.telemetryLoading,
);

export const selectTelemetryError = createSelector(
  selectTelemetryState,
  (state) => state.telemetryError,
);

export const selectWeeklyFuelData = createSelector(
  selectTelemetryState,
  (state) => state.weeklyFuelData,
);

export const selectWeeklyFuelDataLoading = createSelector(
  selectTelemetryState,
  (state) => state.weeklyFuelDataLoading,
);

export const selectWeeklyFuelDataError = createSelector(
  selectTelemetryState,
  (state) => state.weeklyFuelDataError,
);
