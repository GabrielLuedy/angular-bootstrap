import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';
import { ComidasComponent } from './comidas/comidas.component';
import { SobremesaComponent } from './sobremesa/sobremesa.component';
import { OutraCoisaComponent } from './outra-coisa/outra-coisa.component';
import { BebidasComponent } from './bebidas/bebidas.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CafeComponent,
    ComidasComponent,
    SobremesaComponent,
    OutraCoisaComponent,
    BebidasComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    ContactComponent,
    CafeComponent,
    ComidasComponent,
    SobremesaComponent
  ]
})
export class MainModule { }
