import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../commonComponents/main-layout/main-layout.component';
import { MainPageComponent } from '../modules/main-page/main-page.component';
import { AboutUsComponent } from '../modules/about-us/about-us.component';
import { BlogComponent } from '../modules/blog/blog.component';
import { ConnectWithUsComponent } from '../modules/connect-with-us/connect-with-us.component';
import { OurServicesComponent } from '../modules/our-services/our-services.component';
import { OurWorkComponent } from '../modules/our-work/our-work.component';

export const routes: Routes = [
    {
      path: '', component: MainLayoutComponent,
      children: [
        { path: '', component: MainPageComponent, pathMatch: 'full' },
        { path: 'aboutus', component: AboutUsComponent, pathMatch: 'full' },
        { path: 'blog', component: BlogComponent, pathMatch: 'full' },
        { path: 'connectwithus', component: ConnectWithUsComponent, pathMatch: 'full' },
        { path: 'ourservices', component: OurServicesComponent, pathMatch: 'full' },
        { path: 'ourwork', component: OurWorkComponent, pathMatch: 'full' },
      ]
    }
  ];
  
