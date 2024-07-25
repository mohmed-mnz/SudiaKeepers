import { Component, OnInit, HostListener } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MycounterComponent } from '../../commonComponents/mycounter/mycounter.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    GalleriaModule,
    RadioButtonModule,
    CheckboxModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MycounterComponent,
    ImageModule,
    CarouselModule
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  images: any[] | undefined;
  paragraphs: any[] =[];
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
        { itemImageSrc: 'assets/4554-1024x576.jpg', alt: 'Image 2', title: 'Title 2', description: 'تقدم لك تجربة فريدة في تنسيق الحدائق، مع اهتمام بالتفاصيل وتصميمات مبتكرة تضفي جمالاً وفخامة على كل مساحة. من تصميم الحدائق الخاصة إلى إنشاء المساحات العامة الخلابة، نحن نضفي لمسة من الإبداع والاحترافية على كل مشروع.' },
        { itemImageSrc: 'assets/image-3-1024x504.jpg', alt: 'Image 2', title: 'Title 2', description: ' تميزنا في تركيب نوافير وشلالات تضفي لمسة من الرفاهية، بالإضافة إلى تقديم خدمات التصميم والإشراف على أعمال الصيانة بشكل دوري لضمان استدامة وجمال المساحات الخارجية. نحن هنا لنحول رؤيتك إلى واقع ملموس يبهج العين ويستمتع به كل من يراه.' },
        { itemImageSrc: 'assets/Untitled-1-1024x576.jpg', alt: 'Image 3', title: 'Title 3', description: '   انضم إلى قائمة عملائنا الراضين واستمتع بخدمة متكاملة وفريق متخصص يضمن لك تحقيق أعلى مستويات الجودة والإبداع في كل مشروع.' }
    ];
    
    this.paragraphs = [
      'Paragraph 1 content...',
      'Paragraph 2 content...',
      'Paragraph 3 content...',
      'Paragraph 4 content...'
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
