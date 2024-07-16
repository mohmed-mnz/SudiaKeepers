import { NgModule } from '@angular/core';
import { UserDetailesComponent } from './userDetailes.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModuleModule } from '../sharedModule.module';
import { AuthGaurdService } from 'src/app/services/authGaurd.service';

const routes: Routes = [
  { path: '', component: UserDetailesComponent,canActivate:[AuthGaurdService]}

 
];

@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild(routes)],
  declarations: [UserDetailesComponent]
})
export class UserDetailesModule { }
