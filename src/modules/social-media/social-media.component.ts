import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  showSocialIcons: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleSocialIcons() {
    this.showSocialIcons = !this.showSocialIcons;

    const iconsElement = this.el.nativeElement.querySelector('#social-icons');
    if (this.showSocialIcons) {
      this.renderer.addClass(iconsElement, 'active');
    } else {
      this.renderer.removeClass(iconsElement, 'active');
    }
  }

}
