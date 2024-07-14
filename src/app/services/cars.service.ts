import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.interface';
import { cars } from '../constants/cars.consts';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsSubject = new BehaviorSubject<Car[]>(cars);

  cars$ = this.carsSubject;

  constructor() { }

  getPeople() {
    return this.cars$
  }

  addPerson(car: Car) {
    this.carsSubject.next([...this.carsSubject.value, car]);
  }
}
