import { Component, computed, effect, Signal, signal } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { Person } from '../../models/person.interface';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {


  people!: Observable<Person[]>;
  filteredPeople!: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.people$
    this.filteredPeople = this.peopleService.people$
  }  

  addPerson() {
    this.peopleService.addPerson({ firstName: "Federico", lastName: "Tudini", age: 26})
  }

  onSearch(data: Observable<any[]>) {
    this.filteredPeople = data
  }


  sortByName(order: string) {
    this.filteredPeople = this.filteredPeople.pipe(
      map(arr => arr.sort((a, b) => {
        return order === 'desc' ? -a.firstName.localeCompare(b.firstName) : a.firstName.localeCompare(b.firstName)
      }))
    )
  }
    
    /* sort((a, b) => {
      if (a.name < b.name) return order === 'asc' ? -1 : 1;
      if (a.name > b.name) return order === 'asc' ? 1 : -1;
      return 0;
    }); */

}
