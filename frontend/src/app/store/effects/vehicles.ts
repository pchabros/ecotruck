import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { VehicleService } from '../../services/vehicle';
import { VehiclesActions } from '../actions/vehicles';

@Injectable()
export class VehicleEffects {
  private actions$ = inject(Actions);
  private vehicleService = inject(VehicleService);

  loadVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActions.loadVehicles),
      exhaustMap(() =>
        this.vehicleService.getVehicles().pipe(
          map((vehicles) => VehiclesActions.loadVehiclesSuccess({ vehicles })),
          catchError((error) => of(VehiclesActions.loadVehiclesFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}
