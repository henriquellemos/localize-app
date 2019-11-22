import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroImovelComponent } from './cadastro/cadastro.component';
import { BuscarItemComponent } from './buscar-item/buscar-item.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-imovel', component: CadastroImovelComponent},
  {path: 'buscar-item', component: BuscarItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
