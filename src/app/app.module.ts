import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BancoModule } from './banco/banco.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BancoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
