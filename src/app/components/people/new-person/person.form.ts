import { FormBuilder, Validators } from "@angular/forms";
import {PersonForm} from "./models/person-form.model";

export function personForm(formBuilder: FormBuilder) {
    return formBuilder.group<PersonForm>({
        firstName: formBuilder.control<string>('', [Validators.required, Validators.minLength(2)]),
        lastName: [null, [Validators.required, Validators.minLength(2)]],
        age: [null, [Validators.required, Validators.min(0), Validators.max(120)]],
        email: [null, [Validators.email]]
    })
}
