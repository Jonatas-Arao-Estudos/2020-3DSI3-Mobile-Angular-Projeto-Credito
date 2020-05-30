import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss']
})
export class CreditoComponent implements OnInit {

  constructor() { }

  private valorSaldo : number;
  
  ngOnInit() {
    this.valorSaldo = 10;
  }

}
