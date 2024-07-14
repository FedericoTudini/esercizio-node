import { Component, effect, EventEmitter, Input, input, OnInit, Output, Signal, signal, WritableSignal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  @Output() search = new EventEmitter<Observable<any[]>>();
  @Input() data!: Observable<any[]>;
  searchForm!: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  filterData() {
    this.data = this.data.pipe(
      map((items) => items.filter(item => {
        let concatFields: string = ''
        Object.entries(item).forEach(([key, value]) => {
          concatFields += value
        });
        return concatFields.toLowerCase().includes(this.searchForm.value.search.toLowerCase())
      }))
    )
    this.search.emit(this.data);
  }

  

}


