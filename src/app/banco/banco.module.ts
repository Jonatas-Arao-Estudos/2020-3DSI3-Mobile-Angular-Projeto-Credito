import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditoComponent } from './component';
import { BancoService } from './services';

@NgModule({
  declarations: [CreditoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreditoComponent
  ],
  providers: [
    BancoModule
  ]
})
export class BancoModule { }
