import { HomeComponent } from "../Home/CustomerApp.HomeComponent";

export const MainRoutes = [
    {path:'Home',component:HomeComponent},
    {path:'Customer',loadChildren:()=>import('../Customer/CustomerApp.CustomerModule').then(cust=>cust.CustomerModule)}, //(Physical filename the Module name followed by Hash sign )
    {path:'Supplier',loadChildren:()=>import('../Supplier/CustomerApp.SupplierModule').then(sup=>sup.SupplierModule)},
    
    {path:'', component:HomeComponent}
]