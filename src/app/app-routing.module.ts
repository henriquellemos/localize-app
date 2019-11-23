import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroImovelComponent } from './cadastro/cadastro.component';
import { BuscarItemComponent } from './buscar-item/buscar-item.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-imovel', component: CadastroImovelComponent},
  {path: 'buscar-item', component: BuscarItemComponent},
  {path: 'home', component: HomeComponent},
  {path: 'buscar', component: BuscaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
