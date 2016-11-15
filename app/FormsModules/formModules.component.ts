import { Component, Input } from '@angular/core';
import { formModel } from '../models/form2.model';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'forms-modules',
  templateUrl: 'formModules.component.html'
})

export class FormsModulesComponent {
  public form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
        firstName: 'Danielle',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        check: ''
    });

    console.log("constructor Form Module")
   }
}