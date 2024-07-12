import { computed, Injectable, signal } from '@angular/core';
import { people } from '../constants/people.consts';
import { Person } from '../models/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people$ = signal<Person[]>(people)
  people = computed(this.people$)

  constructor() { }

  getPeople(): Person[] {
    return this.people()
  }

  addPerson(person: Person) {
    this.people$.update(() => [...this.people$(), person])
  }
}
