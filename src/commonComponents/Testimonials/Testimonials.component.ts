import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-Testimonials',
  standalone: true,
  imports:[
    MatIconModule,
    CommonModule
  ],
  templateUrl: './Testimonials.component.html',
  styleUrls: ['./Testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit  {
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const carouselElement = document.querySelector("#testimonialCarousel") as HTMLElement;
    const carouselInner = carouselElement.querySelector(".carousel-inner") as HTMLElement;
    const nextButton = carouselElement.querySelector(".carousel-control-next") as HTMLElement;
    const prevButton = carouselElement.querySelector(".carousel-control-prev") as HTMLElement;

    if (window.matchMedia("(min-width:576px)").matches) {
      const carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: false
      });

      const carouselWidth = carouselInner.scrollWidth;
      const cardWidth = (carouselInner.querySelector(".carousel-item") as HTMLElement).offsetWidth;

      let scrollPosition = 0;

      this.renderer.listen(nextButton, 'click', () => {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          scrollPosition += cardWidth;
          $(carouselInner).animate({ scrollLeft: scrollPosition }, 800);
        }
      });

      this.renderer.listen(prevButton, 'click', () => {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $(carouselInner).animate({ scrollLeft: scrollPosition }, 800);
        }
      });
    } else {
      $(carouselElement).addClass("slide");
    }
  }
}