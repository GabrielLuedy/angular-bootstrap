import { CafeComponent } from './main/cafe/cafe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';



const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'contact', component: ContactComponent },
  { path:'cafe', component:CafeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
