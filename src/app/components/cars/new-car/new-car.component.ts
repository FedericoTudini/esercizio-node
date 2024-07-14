import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarsService } from '../../../services/cars.service';
import { carsForm } from './cars.form';
import { Car } from '../../../models/car.interface';

@Component({
  selector: 'app-new-car',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './new-car.component.html',
  styleUrl: './new-car.component.scss'
})
export class NewCarComponent {

  carsForm!: FormGroup;

  constructor(formBuilder: FormBuilder, private carsService: CarsService) {
    this.carsForm = carsForm(formBuilder)
  }

  addCar(car: Car) {
    this.carsService.addCar(car)
    this.carsForm.reset()
  }


  onSubmit(): void {
    if (this.carsForm.valid) {
      this.addCar(this.carsForm.value)
    }
  }

}
