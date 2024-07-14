import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CarsService } from '../../../services/cars.service';
import { Car } from '../../../models/car.interface';
import { SearchbarComponent } from '../../searchbar/searchbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NewCarComponent } from '../new-car/new-car.component';


@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, NewCarComponent, MatCardModule, MatButtonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent {

  cars!: Observable<Car[]>;

  constructor(private carsService: CarsService) {
    this.cars = this.carsService.cars$
  }  

  onSearch(data: Observable<any[]>) {
    this.cars = data
  }


  sortByModel(order: string) {
    this.cars = this.cars.pipe(
      map(arr => arr.sort((a, b) => {
        return order === 'desc' ? -a.model.localeCompare(b.model) : a.model.localeCompare(b.model)
      }))
    )
  }
}
