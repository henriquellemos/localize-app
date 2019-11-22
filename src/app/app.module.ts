import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroImovelComponent } from './cadastro/cadastro.component';

import { MessageService } from 'primeng/api';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { BuscarItemComponent } from './buscar-item/buscar-item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroImovelComponent,
    LeftMenuComponent,
    BuscarItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    PanelModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    ToastModule,
    SidebarModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
