import { Component, computed, effect, Signal, signal } from '@angular/core';
import { PeopleService } from '../../../services/people.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../../searchbar/searchbar.component';
import { Person } from '../../../models/person.interface';
import { map, Observable } from 'rxjs';
import { NewPersonComponent } from '../new-person/new-person.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, NewPersonComponent, MatCardModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {

  filteredPeople!: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {
    this.filteredPeople = this.peopleService.people$
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
    console.log(this.filteredPeople)
  }


}
