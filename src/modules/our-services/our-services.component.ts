import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ImageModule } from 'primeng/image';
import { MycounterComponent } from '../../commonComponents/mycounter/mycounter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    ImageModule,
    MatCardModule,
    MatIconModule,
    MycounterComponent,
    CommonModule
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  services = [
    { title: 'مظلات وبرجولات', description: 'نقوم بتوفير مظلات وبرجولات عالية الجودة لتوفير الظل والمساحة المناسبة.', imageSrc: 'assets/u2.jpg' },
    { title: 'ديكورات صناعية', description: 'تصميم ديكورات صناعية مميزة تضيف لمسة جمالية وفنية للمكان بشكل فريد.', imageSrc: 'assets/p4.jpg' },
    { title: 'تركيب عشب جداري', description: 'نقوم بتركيب العشب الجداري لتجميل الأماكن الخارجية بلمسة خضراء رائعة تعزز الجمال.', imageSrc: 'assets/o1.jpg' },
    { title: 'زراعة نجيل طبيعي', description: 'نوفر خدمة زراعة النجيل الطبيعي بجودة عالية لضمان نمو صحي وطبيعي لنجيل حديقتك.', imageSrc: 'assets/gn1.jpg' },
    { title: 'تركيب شبكات ري', description: 'نوفر خدمات تركيب شبكات الري الأوتوماتيكية لمختلف المساحات بشكل فعال وجميل للحفاظ على النباتات.', imageSrc: 'assets/R3.jpg' },
    { title: 'عشب صناعي', description: 'نقوم بتركيب العشب الصناعي بجودة عالية ومقاوم للعوامل الجوية ليبقى منظرًا طبيعيًا طوال العام.', imageSrc: 'assets/G1.jpg' },
    { title: 'توفير نخيل', description: 'نوفر نخيل من أنواع مختلفة لتزيين الحدائق والمساحات الخارجية مما يضفي لمسة فاخرة وجميلة.', imageSrc: 'assets/a1.jpg' },
    { title: 'طلبات توريد', description: 'نقوم بتلبية طلبات التوريد للنباتات والمواد الزراعية مع ضمان أفضل الأسعار والجودة والخدمة السريعة.', imageSrc: 'assets/G3.jpg' },
    { title: 'تصميم وتنسيق حدائق', description: 'نقدم خدمات تصميم وتنسيق الحدائق بأحدث الأساليب والإبداعية لتوفير حديقة فريدة وأنيقة وجميلة.', imageSrc: 'assets/tansiq1.jpg' }
  ];


  selectedImageSrc: string | null = null;
  isOverlayOpen = false;

  openImage(src: string): void {
    this.selectedImageSrc = src;
    this.isOverlayOpen = true;
  }

  closeImage(): void {
    this.isOverlayOpen = false;
    setTimeout(() => this.selectedImageSrc = null, 500);
  }
  preloadImages(): void {
    this.services.forEach(service => {
      const img = new Image();
      img.src = service.imageSrc;
    });
  }
}
