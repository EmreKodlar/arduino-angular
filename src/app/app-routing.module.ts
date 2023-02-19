import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component'; // 1- önce import et
import { ProfilComponent } from './Components/profil/profil.component';
 

const routes: Routes = [
{path:'', component: HomeComponent }, // 2- sonra Routes içine ekle
{path:'Profil', component: ProfilComponent },
{path:'**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
