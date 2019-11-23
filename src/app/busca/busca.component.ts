import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ImovelService } from "../imovel.service";
import { SelectItem } from "primeng/api";

@Component({
  selector: "app-busca",
  templateUrl: "./busca.component.html",
  styleUrls: ["./busca.component.css"]
})
export class BuscaComponent implements OnInit {
  types: SelectItem[];

  selectedType: string;

  imoveis = [];

  endereco: String;
  bairro: String;
  cidade: String;
  estado:String;
  valorMinAux: Number;
  valorMaxAux: Number;
  tipo: String;

  imovel = {
    valorMin: this.valorMinAux,
    valorMax: this.valorMaxAux,
    endereco: this.endereco,
    bairro: this.bairro,
    cidade: this.cidade,
    estado: this.estado,
    tipo: this.selectedType
  };

  constructor(private imovelService: ImovelService, public router: Router) {
    this.types = [
      { label: "Casa", value: "CASA" },
      { label: "Apartamento", value: "APARTAMENTO" },
      { label: "Garagem", value: "GARAGEM" }
    ];
  }

  ngOnInit() {}

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
      .subscribe(response => (this.imoveis = <any>response));
  }
}
