import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
              <nav><ul>
              <li><a [routerLink]="['/']">Home</a></li>
              <li><a [routerLink]="['/form']">Forms Module</a></li>
              <li><a [routerLink]="['/reactive']">Reactive Forms</a></li>
              </ul></nav>

              <h1>Angular 2 Forms Types </h1>
              <p>An Angular 2 Types of Forms Code - Reactives and Template Driven</p>
              <router-outlet></router-outlet>` 
})

export class AppComponent {}
