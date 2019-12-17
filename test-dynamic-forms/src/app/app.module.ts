import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransportationCreateOrEditComponent } from './transportation-create-or-edit/transportation-create-or-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TransportationCreateOrEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
