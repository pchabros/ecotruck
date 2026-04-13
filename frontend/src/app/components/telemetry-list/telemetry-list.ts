import { Component, input, output } from '@angular/core';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
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
  selected = input.required<Telemetry['id'] | undefined>();

  selectionChange = output<Telemetry['id']>();

  isSelected(location: Telemetry): boolean {
    return this.selected() == location.id;
  }

  handleSelectionChange({ options }: MatSelectionListChange) {
    const selected = options.find(({ selected }) => selected)?.value;
    selected && this.selectionChange.emit(selected);
  }
}
