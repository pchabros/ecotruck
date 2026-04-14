import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, filter, switchMap } from 'rxjs/operators';
import { TelemetryService } from '../../services/telemetry';
import { FiltersActions } from '../actions/filters';
import { TelemetryActions } from '../actions/telemetry';
import { Store } from '@ngrx/store';
import { selectFiltersState } from '../selectors/filters';

@Injectable()
export class TelemetryEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);
  private telemetryService = inject(TelemetryService);

  private updatedFilters$ = this.actions$.pipe(
    ofType(FiltersActions.setVehicle, FiltersActions.setDateRange),
    switchMap(() => this.store.select(selectFiltersState)),
    filter(({ vehicleId }) => vehicleId !== null),
  );

  loadTelemetry$ = createEffect(() =>
    this.updatedFilters$.pipe(
      switchMap(({ vehicleId, dateRange: { startDate, endDate } }) =>
        this.telemetryService.getTelemetry(vehicleId!, startDate, endDate).pipe(
          map((telemetry) => TelemetryActions.loadTelemetrySuccess({ telemetry })),
          catchError((error) =>
            of(TelemetryActions.loadTelemetryFailure({ error: error.message })),
          ),
        ),
      ),
    ),
  );

  loadWeeklyFuel$ = createEffect(() =>
    this.updatedFilters$.pipe(
      switchMap(({ vehicleId, dateRange: { startDate, endDate } }) =>
        this.telemetryService.getWeeklyFuelConsumption(vehicleId!, startDate, endDate).pipe(
          map((data) => TelemetryActions.loadWeeklyFuelSuccess({ data })),
          catchError((error) =>
            of(TelemetryActions.loadWeeklyFuelFailure({ error: error.message })),
          ),
        ),
      ),
    ),
  );
}
