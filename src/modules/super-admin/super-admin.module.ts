import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../sharedModule.module';
import { AuthGaurdService } from 'src/app/services/authGaurd.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrintersComponent } from './printers/printers.component';
import { AceessControlerComponent } from './aceessControler/aceessControler.component';

const routes: Routes = [
  { path: '', component: SuperAdminComponent,children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGaurdService]},
    { path: 'printers', component: PrintersComponent ,canActivate:[AuthGaurdService]},
    { path: 'accessControllers', component: AceessControlerComponent ,canActivate:[AuthGaurdService]},
  ] },
];
@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SuperAdminComponent,
    DashboardComponent,
    PrintersComponent,
    AceessControlerComponent
  ]
    ,
  exports:[
    SuperAdminComponent,
    SharedModuleModule
  ]
})
export class SuperAdminModule { }
