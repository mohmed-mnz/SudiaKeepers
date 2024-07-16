import { Component, OnInit } from '@angular/core';

import {
  faPrint,
  faDoorOpen,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { GServiceService } from 'src/app/services/GService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css'],
  providers:[MessageService]
})
export class SuperAdminComponent implements OnInit {
  faPrint = faPrint;
  faDoorOpen= faDoorOpen;
  faHome=faHome;

  constructor(
  ) { }

  ngOnInit(): void {
  
  }
  initiateForms() {
  }

}