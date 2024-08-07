import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

declare var bootstrap: any;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MdbCarouselModule 
  ],
  templateUrl: './Testimonials.component.html',
  styleUrls: ['./Testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) { }

 
  ngAfterViewInit() {
    const carouselElement = document.getElementById('testimonialCarousel');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 4500
      });
    }
  }
  
}
