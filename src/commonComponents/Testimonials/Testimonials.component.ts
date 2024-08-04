import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './Testimonials.component.html',
  styleUrls: ['./Testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const carouselElement = document.querySelector("#testimonialCarousel") as HTMLElement;
    const carouselInner = carouselElement.querySelector(".carousel-inner") as HTMLElement;
    const nextButton = carouselElement.querySelector(".carousel-control-next") as HTMLElement;
    const prevButton = carouselElement.querySelector(".carousel-control-prev") as HTMLElement;
  
    console.log('Carousel Element:', carouselElement);
    console.log('Media Query Matches:', window.matchMedia("(min-width:576px)").matches);
  
    if (window.matchMedia("(min-width:576px)").matches) {
      const carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: false
      });
  
      const carouselWidth = carouselInner.scrollWidth;
      const cardWidth = (carouselInner.querySelector(".carousel-item") as HTMLElement).offsetWidth;
  
      let scrollPosition = 0;
  
      console.log('Carousel Width:', carouselWidth);
      console.log('Card Width:', cardWidth);
  
      this.renderer.listen(nextButton, 'click', () => {
        console.log('Next Button Clicked');
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          scrollPosition += cardWidth;
          console.log('Scroll Position:', scrollPosition);
          $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
        }
      });
  
      this.renderer.listen(prevButton, 'click', () => {
        console.log('Prev Button Clicked');
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          console.log('Scroll Position:', scrollPosition);
          $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
        }
      });
    } else {
      console.log('Adding slide class to carouselElement');
      $(carouselElement).addClass("slide");
    }
  }
  
}
