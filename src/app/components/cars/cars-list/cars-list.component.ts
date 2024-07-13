import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../../models/person.interface';
import { PeopleService } from '../../../services/people.service';


@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent {

  people!: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.people$
  }  

  addPerson() {
    this.peopleService.addPerson({ firstName: "Federico", lastName: "Tudini", age: 26})
  }

}
