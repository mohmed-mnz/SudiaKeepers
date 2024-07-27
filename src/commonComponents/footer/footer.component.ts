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
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/treesAndFlowers'])), '_blank');
        break;
      case 2:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/natural-grass'])), '_blank');
        break;
      case 3:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/unnatural-grass'])), '_blank');
        break;
      case 4:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/wallGrass'])), '_blank');
        break;
      case 5:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/playgarden'])), '_blank');
        break;
      case 6:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/grdenMaintence'])), '_blank');
         break;
      case 7:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/agriculturalDecoration'])), '_blank');
        break;
      case 8:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/pergolas'])), '_blank');
        break;
      case 9:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/fountains'])), '_blank');
        break;
      case 10:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/pestControl'])), '_blank');
        break;
      case 11:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/Waterfall'])), '_blank');
        break;
      case 12:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/irrigationNetwork'])), '_blank');
        break;
      default:
        let url = this.router.serializeUrl(this.router.createUrlTree(['/natural-grass']));
          window.open(url, '_blank');
    }

  }

}
