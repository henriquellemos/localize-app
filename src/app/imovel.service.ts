import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  apiUrlListar = 'https://localize-app-backend.herokuapp.com/imovel/listar';
  apiUrlSalvar = 'https://localize-app-backend.herokuapp.com/imovel/salvar';

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get(this.apiUrlListar);
  }

  adicionar(imovel: any) {
    return this.httpClient.post(this.apiUrlSalvar, imovel);
  }

}
