import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  //imovelUrl = 'https://localize-app-backend.herokuapp.com/imovel';
  imovelUrl = 'http://localhost:8080/imovel';

  constructor(private httpClient: HttpClient) {}

  listar(){
    return this.httpClient.get(`${this.imovelUrl}/listar`);
  }

  adicionar(imovel: any) {
    return this.httpClient.post(`${this.imovelUrl}/salvar`, imovel);
  }

  buscaImovel(imovel: any) {    
    return this.httpClient.get(`${this.imovelUrl}/buscar?valorMin=${imovel.valorMin}&valorMax=${imovel.valorMax}&endereco=${imovel.endereco}&bairro=${imovel.bairro}&cidade=${imovel.cidade}&estado=${imovel.estado}&tipoItem=${imovel.tipoItem}`, imovel);
  }

}
