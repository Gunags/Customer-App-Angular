import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from '../Home/CustomerApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
@NgModule({
  declarations: [
    HomeComponent,MasterPageComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),BrowserModule,FormsModule
  ],
    providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }

