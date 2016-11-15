import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsComponent } from './ReactiveForms/reactiveForms.component';
import { FormsModulesComponent } from './FormsModules/formModules.component';
import { NormalFormComponent } from './NormalForm/normalForm.component';

const appRoutes: Routes = [
  { path: '', component: FormsModulesComponent },
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
  NormalFormComponent
]
