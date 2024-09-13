import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../commonComponents/main-layout/main-layout.component';
import { MainPageComponent } from '../modules/main-page/main-page.component';
import { AboutUsComponent } from '../modules/about-us/about-us.component';
import { BlogComponent } from '../modules/blog/blog.component';
import { ConnectWithUsComponent } from '../modules/connect-with-us/connect-with-us.component';
import { OurServicesComponent } from '../modules/our-services/our-services.component';
import { OurWorkComponent } from '../modules/our-work/our-work.component';
import { NaturalGrassComponent } from '../modules/our-services/childs/natural-grass/natural-grass.component';
import { UnnaturalGrassComponent } from '../modules/our-services/childs/unnatural-grass/unnatural-grass.component';
import { TreesAndFlowersComponent } from '../modules/our-services/childs/trees-and-flowers/trees-and-flowers.component';
import { GardenMaintenanceComponent } from '../modules/our-services/childs/garden-maintenance/garden-maintenance.component';
import { PlaygroundDesignComponent } from '../modules/our-services/childs/playground-design/playground-design.component';
import { WallGrassComponent } from '../modules/our-services/childs/wall-grass/wall-grass.component';
import { AgriculturalDecorationComponent } from '../modules/our-services/childs/agricultural-decoration/agricultural-decoration.component';
import { PergolasComponent } from '../modules/our-services/childs/pergolas/pergolas.component';
import { FountainsComponent } from '../modules/our-services/childs/fountains/fountains.component';
import { PestControlComponent } from '../modules/our-services/childs/pest-control/pest-control.component';
import { WaterfallComponent } from '../modules/our-services/childs/waterfall/waterfall.component';
import { IrrigationNetworkComponent } from '../modules/our-services/childs/irrigation-network/irrigation-network.component';
import { SocialMediaComponent } from '../modules/social-media/social-media.component';

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: MainPageComponent, pathMatch: 'full' },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'connectwithus', component: ConnectWithUsComponent },
      { path: 'ourwork', component: OurWorkComponent },
      { path: 'ourservices', component: OurServicesComponent },
      { path: 'natural-grass',component:NaturalGrassComponent},
      { path: 'unnatural-grass',component:UnnaturalGrassComponent},
      { path: 'treesAndFlowers',component:TreesAndFlowersComponent},
      { path: 'wallGrass',component:WallGrassComponent},
      { path: 'playgarden',component:PlaygroundDesignComponent},
      { path: 'grdenMaintence',component:GardenMaintenanceComponent},
      { path: 'agriculturalDecoration',component:AgriculturalDecorationComponent},
      { path: 'pergolas',component:PergolasComponent},
      { path: 'fountains',component:FountainsComponent},
      { path: 'pestControl',component:PestControlComponent},
      { path: 'Waterfall',component:WaterfallComponent},
      { path: 'irrigationNetwork',component:IrrigationNetworkComponent},
      {path: 'SocialMedia',component:SocialMediaComponent}
    ]
  },

  ];

