import { computed, Injectable, Signal, signal } from '@angular/core';
import { Person } from '../models/person.interface';
import { BehaviorSubject } from 'rxjs';
import { people } from '../constants/people.consts';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleSubject = new BehaviorSubject<Person[]>(people);

  people$ = this.peopleSubject;

  constructor() { }

  getPeople() {
    return this.people$
  }

  addPerson(person: Person) {
    this.peopleSubject.next([...this.peopleSubject.value, person]);
  }
}
