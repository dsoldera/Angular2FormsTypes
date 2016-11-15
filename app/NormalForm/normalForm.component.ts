import { Component, Directive, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';


function passwordMatcher(c: AbstractControl) {
  console.log('calling function passwordMatcher');

  if (!c.get('password') || !c.get('confirmPassword'))
  return null
  return c.get('password').value === c.get('confirmPassword').value
    ? {'nomatch': false} : {'nomatch': true};
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher}
  ]
})

export class PasswordMatcher {}

@Component({
  moduleId: module.id,
  selector: 'normal-form',
  templateUrl: 'normalForm.component.html'
})

export class NormalFormComponent {
  values = '';
  values2 = '';

   onKey(event:any) {
    this.values += event.target.value + ' | ';
    this.values2 += (<HTMLInputElement>event.target).value + ' | ';
  }

  constructor() {
    console.log('constructor Normal Form'); 
  }
}