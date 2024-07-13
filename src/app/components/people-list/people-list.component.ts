import { Component, computed, effect, Signal, signal } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { Person } from '../../models/person.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {

  people!: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.people$
  }  

  addPerson() {
    this.peopleService.addPerson({ firstName: "Federico", lastName: "Tudini", age: 26})
  }

}
