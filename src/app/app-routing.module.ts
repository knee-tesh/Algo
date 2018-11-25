import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisaFormComponent } from './visa-form/visa-form.component';
import { ApplicationsComponent } from './applications/applications.component';

const routes: Routes = [
  {path:'',       component:VisaFormComponent},
  {path:'list',   component:ApplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
