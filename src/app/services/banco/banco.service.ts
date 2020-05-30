import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor() { }

  private saldo : number;

  setSaldoInicial(valorInicial : number) : void{
    this.saldo = valorInicial;
  }

  getSaldo() : number{
    return this.saldo;
  }

}
