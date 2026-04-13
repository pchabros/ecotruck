import { Component, computed, input } from '@angular/core';
import { PlotlyComponent } from 'angular-plotly.js';
import { WeeklyFuelData } from '../../app/dto/telemetry.dto';

@Component({
  selector: 'app-fuel-consumption',
  imports: [PlotlyComponent],
  templateUrl: './fuel-consumption.html',
})
export class FuelConsumption {
  data = input.required<WeeklyFuelData>();

  plotData = computed(() => [
    {
      x: this.data().map((d) => d.week),
      y: this.data().map((d) => d.avgConsumption),
    },
  ]);
  layout = { height: 500, title: 'Fuel consumption' };
}
