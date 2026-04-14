import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { VehicleEffects } from './store/effects/vehicles';
import { TelemetryEffects } from './store/effects/telemetry';
import { reducers } from './store/reducers';
import * as Plotly from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(PlotlyModule.forRoot(Plotly)),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideStore(reducers),
    provideEffects([VehicleEffects, TelemetryEffects]),
  ],
};
