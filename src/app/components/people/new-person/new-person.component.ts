import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { personForm } from './person.form';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PeopleService } from '../../../services/people.service';
import { Person } from '../../../models/person.interface';
import {PersonForm} from "./models/person-form.model";

@Component({
  selector: 'app-new-person',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './new-person.component.html',
  styleUrl: './new-person.component.scss'
})
export class NewPersonComponent {

  personForm!: FormGroup<PersonForm>;

  constructor(formBuilder: FormBuilder, private peopleService: PeopleService) {
    this.personForm = personForm(formBuilder)
  }

  addPerson(person: Person) {
    this.peopleService.addPerson(person)
    this.personForm.reset()
  }


  onSubmit(): void {
    if (this.personForm.valid) {
      this.addPerson(this.personForm.value.)
    }
  }

}
