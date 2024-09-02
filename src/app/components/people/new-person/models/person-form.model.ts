import {FormControl} from "@angular/forms";

export interface PersonForm  {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  age: FormControl<number>;
  email?: FormControl<string>;
}
