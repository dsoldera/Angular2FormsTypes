import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsComponent } from './ReactiveForms/reactiveForms.component';
import { FormsModulesComponent } from './FormsModules/formModules.component';
import { NormalFormComponent, PasswordMatcher } from './NormalForm/normalForm.component';
import { SwitchControlComponent } from './SwitchControl/switchControl.component';

const appRoutes: Routes = [
  { path: '', component: ReactiveFormsComponent },
  { path: 'form', component: FormsModulesComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: 'normal', component: NormalFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

// export the Module Routes
export class AppRoutingModule {}

// to export all the components used on the Routes
export const routableComponents:any = [
  FormsModulesComponent,
  ReactiveFormsComponent,
  NormalFormComponent,
  PasswordMatcher,
  SwitchControlComponent
]
