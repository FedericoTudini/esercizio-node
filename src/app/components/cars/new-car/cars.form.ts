import { FormBuilder, Validators } from "@angular/forms";

export function carsForm(formBuilder: FormBuilder) {
    return formBuilder.group({
        make: [null, [Validators.required, Validators.maxLength(70)]],
        model: [null, [Validators.required, Validators.maxLength(70)]],
        year: [null, [Validators.required, Validators.min(1800), Validators.max(2024)]],
        color: [null]
      });
}