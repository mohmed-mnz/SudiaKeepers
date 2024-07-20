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

}
