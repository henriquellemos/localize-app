import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../service/imovel.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroImovelComponent implements OnInit {

  count: number = 0;

  enderecoAuxiliar: string;
  numeroAuxiliar: number;
  bairroAuxiliar: string;
  cidadeAuxiliar: string;
  estadoAuxiliar: string;
  valorAuxiliar: number;
  statusAuxiliar: string;
  tipoAuxiliar: [];

  imovel = {
    endereco: this.enderecoAuxiliar,
    numero: this.numeroAuxiliar,
    bairro: this.bairroAuxiliar,
    cidade: this.cidadeAuxiliar,
    estado: this.estadoAuxiliar,
    valor: this.valorAuxiliar,
    status: "Disponivel",
    tipo: this.tipoAuxiliar
  };

  constructor(
    private imovelService: ImovelService,
    private messageService: MessageService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  adicionar() {
    this.imovelService.adicionar(this.imovel)
      .subscribe(() => {
        this.imovel = {
          endereco: this.enderecoAuxiliar,
          numero: this.numeroAuxiliar,
          bairro: this.bairroAuxiliar,
          cidade: this.cidadeAuxiliar,
          estado: this.estadoAuxiliar,
          valor: this.valorAuxiliar,
          status: "Disponivel",
          tipo: this.tipoAuxiliar
        };

        this.messageService.add({
          severity: 'success',
          summary: 'Imóvel cadastrado com sucesso'
        });
      },
        resposta => {
          let msg = 'Erro inesperado. Tente novamente';

          if (resposta.error.message) {
            msg = resposta.error.message;
          }

          this.messageService.add({
            severity: 'error',
            summary: msg
          });
        });
  }

  verificaNumero(event) {
    let newString = new String(this.imovel.numero);
    let numeroDeDigitos = newString.length;
    
    if (numeroDeDigitos > 5) {
      let msg = 'Número maximo alcançado.';

      this.messageService.add({
        severity: 'error',
        summary: msg
      });
    }

  }
}
