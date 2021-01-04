import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { NietoComponent } from './components/nieto/nieto.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
