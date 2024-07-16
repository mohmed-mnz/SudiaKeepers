import { Component, OnInit } from '@angular/core';
import {
 
  faHome,
  faDashboard,
  faUsers,
  faUserCircle,
  faAdd,
  faGear,
  
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  faHome = faHome;
  faUsers = faUsers;
  faGear = faGear;
  faUserCircle = faUserCircle;
  faAdd = faAdd;
  // myIcon: string = require('./assets/boom-gate-down-outline.svg').default;

  constructor() { }

  ngOnInit() {
  }

}
