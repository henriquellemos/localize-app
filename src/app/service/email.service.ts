import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailUrl = 'https://localize-app-backend.herokuapp.com/email'

  constructor(private httpClient: HttpClient) { }

  enviarEmail(email: String, imovel: any){
    console.log(imovel)
    return this.httpClient.get(`${this.emailUrl}/enviar?emailTO=${email}&endereco=${imovel.endereco}&bairro=${imovel.bairro}&cidade=${imovel.cidade}&estado=${imovel.estado}&tipo=${imovel.tipo}`);
  }
}
