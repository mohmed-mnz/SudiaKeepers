import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [
    CommonModule,
    ImageModule,
    LazyLoadImageModule
  ],
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent {
  selectedFilter: string = 'all';
  categories: any[] = [
    { name: 'مظلات وشلالات', category: 'tents-and-shades' },
    { name: 'تركيب عشب جداري', category: 'artificial-turf-installation' },
    { name: 'ديكورات صناعية', category: 'decorations' },
    { name: 'زراعة نخيل', category: 'palm-planting' },
    { name: 'تركيب شبكات ري', category: 'irrigation-networks-installation' },
    { name: 'طلبات توريد', category: 'supply-orders' },
    { name: 'تركيبات عشب صناعي', category: 'synthetic-grass-installation' }
  ];

  portfolioItems = [
    {
      title: 'مظلات و شلالات',
      description: 'توفير مظلات وشلالات ذات جودة عالية لتضفي جواً من الجمال والأناقة على الحدائق والمرافق المختلفة.',
      category: 'tents-and-shades',
      images: [
        { url: 'assets/OurWork/نوافير وشلالات/W1.jpg', loaded: false },
        { url: 'assets/OurWork/نوافير وشلالات/W2.jpg', loaded: false },
        { url: 'assets/OurWork/نوافير وشلالات/W3.jpg', loaded: false },
        { url: 'assets/OurWork/نوافير وشلالات/W4.jpg', loaded: false },
        { url: 'assets/OurWork/نوافير وشلالات/W5.jpg', loaded: false }
      ]
    },
    {
      title: 'تركيب عشب جداري',
      description: 'تركيب العشب الجداري بأحدث التقنيات وأفضل الخامات لضمان منظر طبيعي وجميل يدوم طويلاً.',
      category: 'artificial-turf-installation',
      images: [
        { url: 'assets/OurWork/جداريات/G1.jpg', loaded: false },
        { url: 'assets/OurWork/جداريات/G2.jpg', loaded: false },
        { url: 'assets/OurWork/جداريات/G3.jpg', loaded: false },
        { url: 'assets/OurWork/جداريات/G4.jpg', loaded: false },
        { url: 'assets/OurWork/جداريات/G5.jpg', loaded: false }
      ]
    },
    {
      title: 'ديكورات صناعية',
      description: 'تصميم وتنفيذ ديكورات صناعية مبتكرة تضفي لمسة فنية على المساحات الداخلية والخارجية.',
      category: 'decorations',
      images: [
        { url: 'assets/OurWork/ديكورات صناعية/D1.jpg', loaded: false },
        { url: 'assets/OurWork/ديكورات صناعية/D2.jpg', loaded: false },
        { url: 'assets/OurWork/ديكورات صناعية/D3.jpg', loaded: false },
        { url: 'assets/OurWork/ديكورات صناعية/D4.jpg', loaded: false },
        { url: 'assets/OurWork/ديكورات صناعية/D.jpg', loaded: false }
      ]
    },
    {
      title: 'زراعة نخيل',
      description: 'توفير خدمة زراعة النخيل بطرق علمية حديثة لضمان نمو سليم وإنتاجية عالية.',
      category: 'palm-planting',
      images: [
        { url: 'assets/OurWork/زراعة نخيل/PT1.jpg', loaded: false },
        { url: 'assets/OurWork/زراعة نخيل/PT2.jpg', loaded: false },
        { url: 'assets/OurWork/زراعة نخيل/PT3.jpg', loaded: false },
        { url: 'assets/OurWork/زراعة نخيل/PT4.jpg', loaded: false },
        { url: 'assets/OurWork/زراعة نخيل/PT5.jpg', loaded: false }
      ]
    },
    {
      title: 'تركيب شبكات ري',
      description: 'تقديم حلول متكاملة لتركيب شبكات الري الحديثة لتوفير الماء وضمان نمو مثالي للنباتات.',
      category: 'irrigation-networks-installation',
      images: [
        { url: 'assets/OurWork/انظمة الري/W1.jpg', loaded: false },
        { url: 'assets/OurWork/انظمة الري/W2.jpg', loaded: false },
        { url: 'assets/OurWork/انظمة الري/W3.jpg', loaded: false },
        { url: 'assets/OurWork/انظمة الري/W4.jpg', loaded: false },
        { url: 'assets/OurWork/انظمة الري/W5.jpg', loaded: false }
      ]
    },
    {
      title: 'طلبات توريد',
      description: 'توفير جميع مستلزمات الحدائق والري بأعلى جودة وأفضل الأسعار.',
      category: 'supply-orders',
      images: [
        { url: 'assets/OurWork/تنسيق حدائق/ta1.jpg', loaded: false },
        { url: 'assets/OurWork/تنسيق حدائق/ta2.jpg', loaded: false },
        { url: 'assets/OurWork/تنسيق حدائق/ta3.jpg', loaded: false },
        { url: 'assets/OurWork/تنسيق حدائق/ta4.jpg', loaded: false },
        { url: 'assets/OurWork/تنسيق حدائق/ta5.jpg', loaded: false }
      ]
    },
    {
      title: 'تركيبات عشب صناعي',
      description: 'تركيب العشب الصناعي بأسلوب احترافي يضمن مظهراً طبيعياً وعمر افتراضي طويل.',
      category: 'synthetic-grass-installation',
      images: [
        { url: 'assets/OurWork/نجيل صناعي/n1.jpg', loaded: false },
        { url: 'assets/OurWork/نجيل صناعي/n2.jpg', loaded: false },
        { url: 'assets/OurWork/نجيل صناعي/n3.jpg', loaded: false },
        { url: 'assets/OurWork/نجيل صناعي/n4.jpg', loaded: false },
        { url: 'assets/OurWork/نجيل صناعي/n5.jpg', loaded: false }
      ]
    }
  ];

  filteredItems = this.portfolioItems;
  filteredImages: any[] = this.getFilteredImages();

  constructor() { }

  filterItems(category: string): void {
    this.selectedFilter = category;
    this.filteredImages = this.getFilteredImages();
  }

  getFilteredImages() {
    const items = this.selectedFilter === 'all'
      ? this.portfolioItems
      : this.portfolioItems.filter(item => item.category === this.selectedFilter);
    return items.flatMap(item => item.images.map(image => ({ ...image, description: item.description })));
  }
}
