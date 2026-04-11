import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Vehicle } from '../../dto/vehicle.dto';

@Component({
  selector: 'app-filters',
  imports: [MatCardModule, MatFormFieldModule, MatDatepickerModule, MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './filters.html',
})
export class Filters {
  selected = input.required<Vehicle['id'] | undefined>();
  options = input.required<Vehicle[]>();

  selectedChange = output<Vehicle['id']>();

  handleValueChange({ value }: MatSelectChange) {
    this.selectedChange.emit(value);
  }
}
