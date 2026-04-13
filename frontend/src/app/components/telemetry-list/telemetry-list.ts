import { Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Telemetry } from '../../dto/telemetry.dto';
import { MatCardModule } from '@angular/material/card';
import { CoordPipe } from '../../pipes/coord-pipe';

@Component({
  selector: 'app-telemetry-list',
  imports: [MatListModule, MatCardModule, CoordPipe],
  templateUrl: './telemetry-list.html',
})
export class TelemetryList {
  data = input.required<Telemetry[]>();
  selected = input.required<Telemetry['id'][]>();

  isSelected(location: Telemetry): boolean {
    return this.selected().includes(location.id);
  }
}
