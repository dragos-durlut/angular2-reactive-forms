import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsExampleComponent } from './forms-example/forms-example.component';


const routes: Routes = [
  {
    path: 'forms-example',
    component: FormsExampleComponent
  }
  ,
  {
    path: ''
    , pathMatch: 'full'
    , redirectTo: 'forms-example'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
