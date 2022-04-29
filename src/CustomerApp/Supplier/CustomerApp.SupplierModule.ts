import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),CommonModule,FormsModule
  ],
    providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }

