import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

const routes: Routes = [
  {path:'' , component:ListEmpComponent,pathMatch: 'full'},
  {path:'list-emp' , component:ListEmpComponent},
  {path:'add-emp' , component:AddEmpComponent},
  {path:'edit-emp' , component:EditEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
