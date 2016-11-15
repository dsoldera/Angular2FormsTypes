import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'normal-form',
  templateUrl: 'normalForm.component.html'
})

export class NormalFormComponent implements OnInit {
  values = '';
  values2 = '';

   onKey(event:any) {
    this.values += event.target.value + ' | ';
    this.values2 += (<HTMLInputElement>event.target).value + ' | ';
  }

  public firstName: string;
  public lastName: string;
  public email: string;
  public username: string;
  public password: string;
  public confirmPassword: string;
  public check: string;

  constructor() {
    console.log('constructor Normal Form'); 
  }

  ngOnInit() { }
}