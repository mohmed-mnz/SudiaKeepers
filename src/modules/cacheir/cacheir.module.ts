import { NgModule } from '@angular/core';
import { CacheirComponent } from './cacheir.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../sharedModule.module';
import { AuthGaurdService } from 'src/app/services/authGaurd.service';
const routes: Routes = [
  { path: '', component:CacheirComponent,canActivate:[AuthGaurdService]}
 
];
@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CacheirComponent],
  exports:[
    CacheirComponent,
    SharedModuleModule
  ]
})
export class CacheirModule { }
