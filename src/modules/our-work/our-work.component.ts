import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [
    ImageModule,
  ],
  templateUrl: './our-work.component.html',
  styleUrl: './our-work.component.css'
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
    { title: 'مظلات و شلالات', description: 'وصف الفئة', category: 'tents-and-shades', images: ['assets/OurWork/نوافير وشلالات/W1.jpg', 'assets/OurWork/نوافير وشلالات/W2.jpg', 'assets/OurWork/نوافير وشلالات/W3.jpg', 'assets/OurWork/نوافير وشلالات/W4.jpg', '../../assets/OurWork/نوافير وشلالات/W5.jpg'] },
    { title: 'تركيب عشب جداري', description: 'وصف الفئة', category: 'artificial-turf-installation', images: ['assets/OurWork/جداريات/G1.jpg', 'assets/OurWork/جداريات/G2.jpg', 'assets/OurWork/جداريات/G3.jpg', 'assets/OurWork/جداريات/G4.jpg', 'assets/OurWork/جداريات/G5.jpg'] },
    { title: 'ديكورات صناعية', description: 'وصف الفئة', category: 'decorations', images: ['assets/OurWork/ديكورات صناعية/D1.jpeg', 'assets/OurWork/ديكورات صناعية/D2.jpg', 'assets/OurWork/ديكورات صناعية/D3.jpg', 'assets/OurWork/ديكورات صناعية/D4.jpg', 'assets/OurWork/ديكورات صناعية/D5.jpg'] },
    { title: 'زراعة نخيل', description: 'وصف الفئة', category: 'palm-planting', images: ['assets/OurWork/زراعة نخيل/PT1.jpg', 'assets/OurWork/زراعة نخيل/PT2.jpg', 'assets/OurWork/زراعة نخيل/PT3.jpg', 'assets/OurWork/زراعة نخيل/PT4.jpg', 'assets/OurWork/زراعة نخيل/PT5.jpg'] },
    { title: 'تركيب شبكات ري', description: 'وصف الفئة', category: 'irrigation-networks-installation', images: ['assets/OurWork/انظمة الري/W1.jpg', 'assets/OurWork/انظمة الري/W2.jpg', 'assets/OurWork/انظمة الري/W3.jpg', 'assets/OurWork/انظمة الري/W4.jpg', 'assets/OurWork/انظمة الري/W5.jpg'] },
    { title: 'طلبات توريد', description: 'وصف الفئة', category: 'supply-orders', images: ['assets/OurWork/تنسيق حدائق/ta1.jpg', 'assets/OurWork/تنسيق حدائق/ta2.jpg', 'assets/OurWork/تنسيق حدائق/ta3.jpg', 'assets/OurWork/تنسيق حدائق/ta4.jpg', 'assets/OurWork/تنسيق حدائق/ta5.jpg'] },
    { title: 'تركيبات عشب صناعي', description: 'وصف الفئة', category: 'synthetic-grass-installation', images: ['assets/OurWork/نجيل صناعي/n1.jpg', 'assets/OurWork/نجيل صناعي/n2.jpg', 'assets/OurWork/نجيل صناعي/n3.jpg', 'assets/OurWork/نجيل صناعي/n4.jpg', 'assets/OurWork/نجيل صناعي/n5.jpg'] }
  ];
  filteredItems = this.portfolioItems;

  constructor() { }

  filterItems(category: string): void {
    this.selectedFilter = category;
    if (category === 'all') {
      this.filteredItems = this.portfolioItems;
    } else {
      this.filteredItems = this.portfolioItems.filter(item => item.category === category);
    }
  }
}