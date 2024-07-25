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
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
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
    CarouselModule,
    CardModule,
    ButtonModule
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
        { itemImageSrc: 'assets/4554-1024x576.jpg', alt: 'Image 2', title: ' تصميم وتركيب الحدائق المنزلية',
           description: "شركة بستان الخليج تقدم خدمات تصميم وتركيب الحدائق المنزلية بأسلوب فني عصري. نحرص على تلبية جميع احتياجاتكم من خلال اختيار الزهور والنباتات التي تناسب ذوقكم وتضيف جمالية لمساحاتكم الخارجية. نقدم حلولاً متكاملة تشمل جميع التفاصيل من تنسيق المساحات إلى إضافة الأثاث الخارجي. فريقنا المختص يضمن تنفيذ التصميمات بدقة واحترافية عالية. دعونا نساعدكم في تحويل حديقتكم إلى ملاذ ساحر وجميل." },
        { itemImageSrc: 'assets/image-3-1024x504.jpg', alt: 'Image 2', title: 'توريد وتركيب الأشجار المثمرة',
           description: 'شركة بستان الخليج توفر خدمة توريد وتركيب الأشجار المثمرة بأعلى جودة. نقدم لكم أشجاراً صحية ومنتجة تعزز من جمال حديقتكم وتوفر لكم ثماراً طازجة. فريقنا يتولى جميع مراحل التركيب والعناية لضمان نمو الأشجار بشكل صحي. نحن نقدم الاستشارات اللازمة للحفاظ على صحة الأشجار وزيادة إنتاجيتها. استمتعوا بثمار طازجة من حديقتكم بفضل خبرتنا في هذا المجال.' },
        { itemImageSrc: 'assets/5f9a18270a171.jpg', alt: 'Image 3', title: ' تصميم وتركيب النوافير والأحواض المائية', 
          description: '  شركة بستان الخليج تقدم خدمات تصميم وتركيب النوافير والأحواض المائية المنزلية بأساليب حديثة ومبتكرة. نضمن لكم نوافير مدهشة تعزز جمال محيطكم وتضيف لمسة من الهدوء والانتعاش. نقدم أيضاً خدمات صيانة وإصلاح النوافير لضمان استمرار جودتها. كما نوفر خدمة نقل وتركيب النوافير دون التسبب في أي أضرار. اختاروا من بين تشكيلتنا الواسعة لتصميمات النوافير واستمتعوا بجمال المياه المتدفقة.' }
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
