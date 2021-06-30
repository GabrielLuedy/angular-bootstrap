import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    ContactComponent
  ]
})
export class MainModule { }
