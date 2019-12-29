import { AppComponent } from './app.component';
import { TransportationCreateOrEditComponent } from './transportation-create-or-edit/transportation-create-or-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TransportationCreateOrEditComponent },
  { path: 'package', component: TransportationCreateOrEditComponent },
  { path: 'package/:id', component: TransportationCreateOrEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
