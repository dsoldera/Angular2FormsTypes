import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirmPassword').value
    ? null : {'nomatch': true};
}

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
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },  {validator: passwordMatcher}),
        newsletter: '',
        check: ''
    });
    this.reactiveForm.patchValue({
      firstName: "Danielle",
      lastName: "Soldera"
    });

    console.log("constructor Reactive Form")
   }
}