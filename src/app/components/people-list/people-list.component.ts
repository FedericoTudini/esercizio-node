import { Component, effect } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {

  data: any[] = [];

  constructor(private peopleService: PeopleService) {
    effect(() => {
      this.data = this.peopleService.getPeople()
      console.log("PEOPLE LIST")
    })
  }

  addPerson() {
    this.peopleService.addPerson({ firstName: "Federico", lastName: "Tudini", age: 26})
  }

}
