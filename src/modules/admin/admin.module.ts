import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModuleModule } from '../sharedModule.module';
import { UsersComponent } from './users/users.component';
import { SubscripersAndSubscriptionsComponent } from './subscripersAndSubscriptions/subscripersAndSubscriptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddingSubscriptionComponent } from './subscripersAndSubscriptions/adding-subscription/adding-subscription.component';
import { AddingUserComponent } from './users/adding-user/adding-user.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AuthGaurdService } from 'src/app/services/authGaurd.service';

const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGaurdService]},
    { path: 'settings', component: SettingsComponent ,canActivate:[AuthGaurdService]},
    { path: 'transactions', component: TransactionsComponent,canActivate:[AuthGaurdService] },
    { path: 'users', children: [
      { path: 'add', component: AddingUserComponent ,canActivate:[AuthGaurdService]},
      { path: '', component: UsersComponent,canActivate:[AuthGaurdService] } 
    ] },
    { path: 'subscripers-and-subscriptios', children: [
      { path: 'add', component: AddingSubscriptionComponent,canActivate: [AuthGaurdService] },
      { path: '', component: SubscripersAndSubscriptionsComponent ,canActivate: [AuthGaurdService]} 
    ]
  }
  ] },
 
]; 


@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild(routes)],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    AddingUserComponent,
    SubscripersAndSubscriptionsComponent,
    AddingSubscriptionComponent,
    SettingsComponent,
    TransactionsComponent
  ],
  exports:[
    AdminComponent,
    SharedModuleModule
  ]
})
export class AdminModule { }




