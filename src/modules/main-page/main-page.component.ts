import { Component, OnInit, HostListener } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MycounterComponent } from '../../commonComponents/mycounter/mycounter.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    GalleriaModule,
    RadioButtonModule,
    CheckboxModule,
    FormsModule,
    MatCardModule,
    MatIcon,
    MycounterComponent
    
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  images: any[] | undefined;
  endVal: number = 1000;
  showCounters: boolean = false;

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  constructor() { }

  ngOnInit() {
    this.images = [
      { itemImageSrc: 'assets/2-1024x427.jpg', alt: 'Image 2', title: 'Title 2', description: '...'},
      { itemImageSrc: 'assets/2-1024x427.jpg', alt: 'Image 2', title: 'Title 2', description: '...'},
      { itemImageSrc: 'assets/2-1024x427.jpg', alt: 'Image 3', title: 'Title 3', description: '...'}
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const element = document.getElementById('counterSection');
    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      const height = window.innerHeight;
      if (top < height && bottom > 0) {
        this.showCounters = true;
      }
    }
  }
}