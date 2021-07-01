import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CafeComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    ContactComponent,
    CafeComponent
  ]
})
export class MainModule { }
