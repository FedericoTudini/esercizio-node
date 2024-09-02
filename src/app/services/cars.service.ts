import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.interface';
import { cars } from '../constants/cars.consts';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsSubject = new BehaviorSubject<Car[]>(cars);

  cars$ = this.carsSubject.asObservable();

  constructor() { }

  get cars(): Car[] {
    return this.carsSubject.value;
  }

  set cars(value: Car[]) {
    this.carsSubject.next(value);
  }

  getPeople() {
    return this.cars$
  }

  addCar(car: Car) {
    this.cars = [...this.cars, car];
  }

  searchCarsByModel(model: string): Car[] {
    return [...this.cars.filter((car) => car.model.startsWith(model))]
  }
}
