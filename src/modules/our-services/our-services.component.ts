import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ImageModule } from 'primeng/image';
import { MycounterComponent } from '../../commonComponents/mycounter/mycounter.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    ImageModule,
    MatCardModule,
    MatIconModule,
    MycounterComponent
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

}
