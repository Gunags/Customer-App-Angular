import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
