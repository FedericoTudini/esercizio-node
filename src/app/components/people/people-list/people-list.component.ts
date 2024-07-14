import { Component } from '@angular/core';
import { PeopleService } from '../../../services/people.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../../searchbar/searchbar.component';
import { Person } from '../../../models/person.interface';
import { map, Observable } from 'rxjs';
import { NewPersonComponent } from '../new-person/new-person.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, NewPersonComponent, MatCardModule, MatButtonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {

  people!: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.people$
  }  

  onSearch(data: Observable<any[]>) {
    this.people = data
  }


  sortByName(order: string) {
    this.people = this.people.pipe(
      map(arr => arr.sort((a, b) => {
        return order === 'desc' ? -a.firstName.localeCompare(b.firstName) : a.firstName.localeCompare(b.firstName)
      }))
    )
  }


}
