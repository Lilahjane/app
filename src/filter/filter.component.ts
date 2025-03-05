import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-filter',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatSelectModule,
    MatSliderModule,
    MatCardModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() minChanged = new EventEmitter<number>();
  @Output() maxChanged = new EventEmitter<number>();

  minCal: number = 0;
  maxCal: number = 1000;

  updateMin(event: Event) {
    this.minCal = (event.target as HTMLInputElement).valueAsNumber;
    this.minChanged.emit(this.minCal);
  }

  updateMax(event: Event) {
    this.maxCal = (event.target as HTMLInputElement).valueAsNumber;
    this.maxChanged.emit(this.maxCal);
  }

  formatLabel(value: number): string {
    return `${value}`;
  }
}
