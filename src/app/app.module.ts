import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';

import { MessageService } from 'primeng/api';
import { ImovelService } from './imovel.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroImovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    PanelModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    ToastModule,
    SidebarModule,
  ],
  providers: [MessageService, ImovelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
