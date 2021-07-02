import { BebidasComponent } from './main/bebidas/bebidas.component';
import { CafeComponent } from './main/cafe/cafe.component';
import { ComidasComponent } from './main/comidas/comidas.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { OutraCoisaComponent } from './main/outra-coisa/outra-coisa.component';
import { SobremesaComponent } from './main/sobremesa/sobremesa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






const routes: Routes = [
  { path:'bebidas', component:BebidasComponent},
  { path:'cafe', component:CafeComponent },
  { path:'comidas',component:ComidasComponent},
  { path:'contact', component: ContactComponent },
  { path:'', component: HomeComponent },
  { path:'outra-coisa', component:OutraCoisaComponent},
  { path:'sobremesa', component: SobremesaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


