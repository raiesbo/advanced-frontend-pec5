import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    GridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
