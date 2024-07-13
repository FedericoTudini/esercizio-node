import { Component, effect, EventEmitter, Input, input, OnInit, Output, Signal, signal, WritableSignal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.interface';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  @Output() search = new EventEmitter<Observable<any[]>>();
  @Input() data!: Observable<any[]>;
  searchString!: string;

  constructor() {
    this.searchString = "a"
  }

  filterData() {
    this.data = this.data.pipe(
      map((items) => items.filter(item => {
        let concatFields: string = ''
        Object.entries(item).forEach(([key, value]) => {
          concatFields += value
        });
        return concatFields.includes(this.searchString)
      }))
    )
    this.search.emit(this.data);
  }

  

}


