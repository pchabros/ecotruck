import { createReducer, on } from '@ngrx/store';
import { initialTelemetryState } from '../state';
import { TelemetryActions } from '../actions/telemetry';

export const telemetryReducer = createReducer(
  initialTelemetryState,
  on(TelemetryActions.loadTelemetry, (state) => ({
    ...state,
    telemetryLoading: true,
    telemetryError: null,
  })),
  on(TelemetryActions.loadTelemetrySuccess, (state, { telemetry }) => ({
    ...state,
    items: telemetry,
    telemetryLoading: false,
  })),
  on(TelemetryActions.loadTelemetryFailure, (state, { error }) => ({
    ...state,
    telemetryLoading: false,
    telemetryError: error,
  })),
  on(TelemetryActions.loadWeeklyFuel, (state) => ({
    ...state,
    weeklyFuelDataLoading: true,
    weeklyFuelDataError: null,
  })),
  on(TelemetryActions.loadWeeklyFuelSuccess, (state, { data }) => ({
    ...state,
    weeklyFuelData: data,
    weeklyFuelDataLoading: false,
  })),
  on(TelemetryActions.loadWeeklyFuelFailure, (state, { error }) => ({
    ...state,
    weeklyFuelDataLoading: false,
    weeklyFuelDataError: error,
  })),
);
