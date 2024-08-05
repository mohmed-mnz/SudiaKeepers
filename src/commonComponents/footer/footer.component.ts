import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  constructor(private router: Router) { }
  openNewTab(index:any) {
    switch(index){
      case 1:
        this.router.navigate(['/treesAndFlowers'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/treesAndFlowers'])), '_blank');
        break;
      case 2:
        this.router.navigate(['/natural-grass'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/natural-grass'])), '_blank');
        break;
      case 3:
        this.router.navigate(['/unnatural-grass'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/unnatural-grass'])), '_blank');
        break;
      case 4:
        this.router.navigate(['/wallGrass'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/wallGrass'])), '_blank');
        break;
      case 5:
        this.router.navigate(['/treesAndFlowers'])
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/playgarden'])), '_blank');
        break;
      case 6:
        this.router.navigate(['/grdenMaintence'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/grdenMaintence'])), '_blank');
         break;
      case 7:
        this.router.navigate(['/agriculturalDecoration'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/agriculturalDecoration'])), '_blank');
        break;
      case 8:
        this.router.navigate(['/pergolas'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/pergolas'])), '_blank');
        break;
      case 9:
        this.router.navigate(['/fountains'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/fountains'])), '_blank');
        break;
      case 10:
        this.router.navigate(['/pestControl'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/pestControl'])), '_blank');
        break;
      case 11:
        this.router.navigate(['/Waterfall'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/Waterfall'])), '_blank');
        break;
      case 12:
        this.router.navigate(['/irrigationNetwork'])
        // window.open(this.router.serializeUrl(this.router.createUrlTree(['/irrigationNetwork'])), '_blank');
        break;
      default:
        this.router.navigate(['/natural-grass'])
        // let url = this.router.serializeUrl(this.router.createUrlTree(['/natural-grass']));
        //   window.open(url, '_blank');
    }

  }

}
