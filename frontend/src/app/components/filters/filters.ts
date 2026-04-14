import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Vehicle } from '../../dto/vehicle.dto';

@Component({
  selector: 'app-filters',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './filters.html',
})
export class Filters {
  selectedVehicle = input.required<Vehicle['id'] | undefined>();
  vehicleOptions = input.required<Vehicle[]>();

  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  selectedVehicleChange = output<Vehicle['id']>();
  dateRangeChange = output<{ startDate: Date | null; endDate: Date | null }>();

  handleValueChange({ value }: MatSelectChange) {
    this.selectedVehicleChange.emit(value);
  }

  handleDateRangeChange() {
    this.dateRangeChange.emit({
      startDate: this.dateRange.controls.start.value,
      endDate: this.dateRange.controls.end.value,
    });
  }
}
