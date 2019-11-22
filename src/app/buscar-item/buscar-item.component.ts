import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../imovel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-item',
  templateUrl: './buscar-item.component.html',
  styleUrls: ['./buscar-item.component.css']
})
export class BuscarItemComponent implements OnInit {

  imoveis = [];

  constructor(private imovelService: ImovelService, public router: Router) { 
  }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.imovelService.listar()
      .subscribe(response => this.imoveis = <any>response);
  }

}

