import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { VehicleEffects } from './store/effects/vehicles';
import { TelemetryEffects } from './store/effects/telemetry';
import { reducers } from './store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore(reducers),
    provideEffects([VehicleEffects, TelemetryEffects]),
  ],
};
