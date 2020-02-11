import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { EditEmpComponent } from './edit-emp/edit-emp.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ListEmpComponent,
    EditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
