import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ImovelService } from "../service/imovel.service";
import { EmailService } from "../service/email.service";
import { SelectItem } from "primeng/api";

@Component({
  selector: "app-busca",
  templateUrl: "./busca.component.html",
  styleUrls: ["./busca.component.css"]
})
export class BuscaComponent implements OnInit {
  types: SelectItem[];

  responsePreenchido: boolean;

  selectedType: string;

  imoveis = [];

  statusAuxiliar: string;

  email: string = "henriquellemos@gmail.com";

  endereco: String;
  bairro: String;
  cidade: String;
  estado:String;
  valorMin: Number;
  valorMax: Number;
  tipo: String;

  imovel = {
    valorMin: this.valorMin,
    valorMax: this.valorMax,
    endereco: this.endereco,
    bairro: this.bairro,
    cidade: this.cidade,
    estado: this.estado,
    tipo: this.selectedType
  };

  constructor(private imovelService: ImovelService, private emailService: EmailService, public router: Router) {
    this.types = [
      { label: "Casa", value: "CASA" },
      { label: "Apartamento", value: "APARTAMENTO" },
      { label: "Garagem", value: "GARAGEM" }
    ];
  }

  ngOnInit() {}

  limpar(){
    this.imovel.endereco = null;
    this.imovel.bairro = null;
    this.imovel.cidade = null;
    this.imovel.estado = null;
    this.imovel.valorMin = null;
    this.imovel.valorMax = null;
    this.imovel.tipo = null;
  }

  selecionarTipo(type){
    console.log(type);
    this.imovel.tipo = type.value;
  }
  consultar() {
    this.imovelService
      .listar()
      .subscribe(response => (this.imoveis = <any>response));
  }

  buscar() {
    if (this.imovel.valorMin == undefined) {
      this.imovel.valorMin = null;
    }
    if (this.imovel.valorMax == undefined) {
      this.imovel.valorMax = null;
    }
    if (this.imovel.endereco == undefined) {
      this.imovel.endereco = null;
    }
    if (this.imovel.bairro == undefined) {
      this.imovel.bairro = null;
    }
    if (this.imovel.cidade == undefined) {
      this.imovel.cidade = null;
    }
    if (this.imovel.estado == undefined) {
      this.imovel.estado = null;
    }
    if (this.imovel.tipo == undefined) {
      this.imovel.tipo = null;
    }
    this.imovelService
      .buscaImovel(this.imovel)
      .subscribe(response => {
        this.imoveis = <any>response;
        if(this.imoveis.length <= 0){
          this.responsePreenchido = false;
        } else {
          this.responsePreenchido = true;
        }
      }), err => {
        console.log(err);
      }

    this.limpar()
  }

  emAnalise(imovel) {
    if(imovel.status == "Disponivel"){      
      imovel.status = "Em analise"
      this.statusAuxiliar = "Em análise"
    }
    this.emailService
      .enviarEmail(this.email, imovel)
      .subscribe(response => (this.imoveis = <any>response));
    
  }
}
