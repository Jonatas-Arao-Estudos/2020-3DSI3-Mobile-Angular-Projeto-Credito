import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor() { }

  private saldo : number = 0;

  public setSaldoInicial(valorInicial : number) : void{
    this.saldo = valorInicial;
  }

  public getSaldo() : number{
    return this.saldo;
  }

  public depositar(valorDeposito : number) : void{
    this.saldo += valorDeposito;
  }

  public sacar(valorSaque : number) : void{
    if(this.saldo < 0){
      return alert(`Saldo Negativo - Sua Dívida: ${Math.abs(this.saldo)}`)
    }
    else if(this.saldo - valorSaque < 0){
      return alert(`Saldo Insuficiente - Seu Saldo: ${this.saldo}`);
    }else{
      this.saldo -= valorSaque;
    }
  }

  public descontar() : void {
    this.saldo--;
  }

}
