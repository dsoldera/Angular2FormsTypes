import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'reactive-forms',
  templateUrl: 'reactiveForms.component.html'
})

export class ReactiveFormsComponent {
  public reactiveForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.reactiveForm = this._fb.group({
        firstName: '',
        lastName: '',
        email: '',
        account: this._fb.group({
          username: '',
          password: '',
          confirmPassword: '',
        }),
        check: ''
    });
    this.reactiveForm.patchValue({
      firstName: "Danielle",
      lastName: "Soldera"
    });

    console.log("constructor Reactive Form")
   }

}