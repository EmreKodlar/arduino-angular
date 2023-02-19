import { HttpClientModule } from '@angular/common/http';
import { NgModule , Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgPipesModule} from 'ngx-pipes'; // tablo sıralaması için gerekli
 
 
import {MatListModule} from '@angular/material/list'; // Material için önce burası 1
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/Components/header/header.component'; // 1- komponent için önce import et
import { FooterComponent } from '../app/Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfilComponent } from './Components/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, // 2- komponent için sonra declare et
    FooterComponent,
    HomeComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule, // material için sonra burası 2
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    NgPipesModule
    
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {   }
