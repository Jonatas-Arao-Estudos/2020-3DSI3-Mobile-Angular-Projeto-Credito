import { Component, OnInit } from '@angular/core';

import { BancoService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss']
})
export class CreditoComponent implements OnInit {

  constructor(private banco : BancoService) { }

  ngOnInit() {
    this.banco.setSaldoInicial(10);
  }

}
