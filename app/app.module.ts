import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app.routes';

@NgModule ({
  declarations: [ // used to import my components 
    AppComponent,
    routableComponents
  ], 
  imports: [ // used to import Angular 2 Modules 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
   ], 
  bootstrap: [ 
    AppComponent
  ]
})

export class AppModule { }
