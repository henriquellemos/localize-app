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
    if(imovel.valorMin == null && imovel.valorMax != null && imovel.cidade == null){
      return this.httpClient.get(`${this.imovelUrl}/buscar?valorMax=${imovel.valorMax}`, imovel);
    }
    if(imovel.valorMax == null && imovel.cidade != null && imovel.valorMin != null){
      return this.httpClient.get(`${this.imovelUrl}/buscar?cidade=${imovel.cidade}&valorMin=${imovel.valorMin}`, imovel);
    }
    
    return this.httpClient.get(`${this.imovelUrl}/buscar?valorMin=${imovel.valorMin}&valorMax=${imovel.valorMax}`, imovel);
  }

}
