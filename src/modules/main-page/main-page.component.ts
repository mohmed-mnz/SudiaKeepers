import { Component, OnInit, HostListener } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MycounterComponent } from '../../commonComponents/mycounter/mycounter.component';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
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
    CardModule,
    ButtonModule,
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
  userReviews = [
    { name: 'سارة من جدة', opinion: 'شركة بستان الخليج لتنسيق الحدائق قامت بتحويل حديقتي إلى واحة خضراء جميلة. لقد كانوا محترفين وسريعين في تنفيذ العمل، وأنا سعيدة جداً بالنتيجة النهائية.',rating: 4},
    { name: 'أحمد من الرياض', opinion: 'فريق شركة بستان الخليج كان مذهلاً! قاموا بتصميم حديقة أمام منزلي بطريقة تفوق توقعاتي. أنصح بهم بشدة لكل من يبحث عن تنسيق حدائق مميز.' ,rating: 5},
    { name: 'ليلى من الدمام', opinion: 'لقد استفدت من خدمات شركة بستان الخليج لتنسيق الحديقة الخلفية لمنزلي. كانت الخدمة ممتازة والأسعار معقولة جداً. سأعود إليهم بالتأكيد لأي أعمال تنسيق مستقبلية.',rating: 3 },
    { name: 'محمد من الخبر', opinion: 'شركة بستان الخليج لتنسيق الحدائق تقدم خدمات رائعة وجودة عالية. فريقهم كان متعاوناً وقدموا لي نصائح قيمة حول كيفية العناية بالحديقة بعد التنسيق.' ,rating: 4},
    { name: 'فاطمة من المدينة المنورة', opinion: 'تجربتي مع شركة بستان الخليج لتنسيق الحدائق كانت أكثر من رائعة. التصميم كان جميل جداً والتنفيذ كان سريع وفعال. أوصي بهم لكل من يريد تحويل حديقته إلى مكان ساحر.', rating:3}
  ];
 

  constructor(private router: Router) { }

  ngOnInit() {
    this.images = [
        { itemImageSrc: 'assets/4554-1024x576.jpg', alt: 'Image 2', title: ' تصميم وتركيب الحدائق المنزلية',
           description: "شركة بستان الخليج تقدم خدمات تصميم وتركيب الحدائق المنزلية بأسلوب فني عصري. نحرص على تلبية جميع احتياجاتكم من خلال اختيار الزهور والنباتات التي تناسب ذوقكم وتضيف جمالية لمساحاتكم الخارجية. نقدم حلولاً متكاملة تشمل جميع التفاصيل من تنسيق المساحات إلى إضافة الأثاث الخارجي. فريقنا المختص يضمن تنفيذ التصميمات بدقة واحترافية عالية. دعونا نساعدكم في تحويل حديقتكم إلى ملاذ ساحر وجميل." },
        { itemImageSrc: 'assets/image-3-1024x504.jpg', alt: 'Image 2', title: 'توريد وتركيب الأشجار المثمرة',
           description: 'شركة بستان الخليج توفر خدمة توريد وتركيب الأشجار المثمرة بأعلى جودة. نقدم لكم أشجاراً صحية ومنتجة تعزز من جمال حديقتكم وتوفر لكم ثماراً طازجة. فريقنا يتولى جميع مراحل التركيب والعناية لضمان نمو الأشجار بشكل صحي. نحن نقدم الاستشارات اللازمة للحفاظ على صحة الأشجار وزيادة إنتاجيتها. استمتعوا بثمار طازجة من حديقتكم بفضل خبرتنا في هذا المجال.' },
        { itemImageSrc: 'assets/5f9a18270a171.jpg', alt: 'Image 3', title: ' تصميم وتركيب النوافير والأحواض المائية',
          description: '  شركة بستان الخليج تقدم خدمات تصميم وتركيب النوافير والأحواض المائية المنزلية بأساليب حديثة ومبتكرة. نضمن لكم نوافير مدهشة تعزز جمال محيطكم وتضيف لمسة من الهدوء والانتعاش. نقدم أيضاً خدمات صيانة وإصلاح النوافير لضمان استمرار جودتها. كما نوفر خدمة نقل وتركيب النوافير دون التسبب في أي أضرار. اختاروا من بين تشكيلتنا الواسعة لتصميمات النوافير واستمتعوا بجمال المياه المتدفقة.' }
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

  openNewTab(index:any) {
    switch(index){
      case 1:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/treesAndFlowers'])), '_blank');
        break;
      case 2:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/natural-grass'])), '_blank');
        break;
      case 3:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/unnatural-grass'])), '_blank');
        break;
      case 4:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/wallGrass'])), '_blank');
        break;
      case 5:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/playgarden'])), '_blank');
        break;
      case 6:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/grdenMaintence'])), '_blank');
         break;
      case 7:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/agriculturalDecoration'])), '_blank');
        break;
      case 8:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/pergolas'])), '_blank');
        break;
      case 9:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/fountains'])), '_blank');
        break;
      case 10:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/pestControl'])), '_blank');
        break;
      case 11:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/Waterfall'])), '_blank');
        break;
      case 12:
        window.open(this.router.serializeUrl(this.router.createUrlTree(['/irrigationNetwork'])), '_blank');
        break;
      default:
        let url = this.router.serializeUrl(this.router.createUrlTree(['/natural-grass']));
          window.open(url, '_blank');
    }

  }

  openImageInNewTab(imageUrl: string): void {
    window.open(imageUrl, '_blank');
  }
}
