import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(private router: Router) { }
  sections = [
    { id: 'section1', title: 'تنسق الحدائق', itemImageSrc: '../../assets/p5.jpg',url:'/agriculturalDecoration',
      content: ' يحتاج الكثير من الأشخاص إلى الاسترخاء والهدوء والراحة النفسية بعد عناء وتعب يومٍ طويل في عملهم، ولن يتحقق ذلك إلا بالجلوس بين أحضان الطبيعة؛ حيث الزروع الخضراء والأشجار الرائعة، والمياه الجارية والورود الأنيقة، والمساحات الخضراء الغنّاء، ويمكن تحقيق ذلك داخل حديقتك.   ' },
    { id: 'section2', title: 'زرع صناعى', itemImageSrc: '../../assets/gn1.jpg',url:'/unnatural-grass',
      content: 'يُعتبر الزرع الصناعي بمختلف أنواعه سواء كان شجر صناعي أو ورود صناعية من أهم الأشياء التي يتم الاعتماد عليها بشكل كبير في تزيين المنازل والفلل والقصور، وخاصًة في الآونة الأخيرة بسبب كثرة ألوانه وأنواعه المختلفة، ولهذا سوف نخصص حديثنا عن تعريفه، وأنواعه، وأسعاره، وأفضل شركة توفر زرع صناعي في المملكة العربية السعودية.   ' },
    { id: 'section3', title: 'تصميم وتركيب نوافير', itemImageSrc: '../../assets/W1.jpg',url:'/fountains',
       content: ' يحتاج الكثير من الأشخاص إلى الاسترخاء والهدوء والراحة النفسية بعد عناء وتعب يومٍ طويل في عملهم، ولن يتحقق ذلك إلا بالجلوس بين أحضان الطبيعة؛ حيث الزروع الخضراء والأشجار الرائعة، والمياه الجارية والورود الأنيقة، والمساحات الخضراء الغنّاء، ويمكن تحقيق ذلك داخل حديقتك      ' },
    { id: 'section4', title: 'تصميم وتركيب شلالات', itemImageSrc: '../../assets/S1.jpg',url:'/Waterfall',
       content: ' إحدى أهم الأمور المستحدثة والتي تستخدم في تزيين الحدائق وبعض القصور والفلل، وتساهم في إعطاء مناظر طبيعية خلابة ساحرة تجذب الرائي، وللتعرف عليها وعلى أنواعها وعلى ' }
  ];

  searchText: string = '';

  get filteredSections() {
    return this.sections.filter(section => 
      section.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  openNewTab(url:any){
    window.open(this.router.serializeUrl(this.router.createUrlTree([url])), '_blank');
  }
}