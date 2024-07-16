import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers:[MessageService]
})
export class SettingsComponent implements OnInit {
  settingsForm!:FormGroup
  submitCanges=false
  settings!:any
  constructor( private messageService: MessageService,
    private gService: GServiceService,
    private router:Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,) {
  }
  ngOnInit() {
    this.loadingSettings()
    this.initiateForms()
  }


  loadingSettings(){
    this.gService.get('/settings/last/').subscribe((res)=>{
      this.settings=res
      if(this.settings){
        console.log('s')
        this.settingsForm.patchValue({
          firstHourPrice: this.settings.firstHourPrice,
          remainHourPrice:this.settings.remainHourPrice,
          finePrice: this.settings.finePrice,
          dailyPrice:this.settings.dailyPrice,
          hostingTimeMinutes: this.settings.hostingTimeMinutes,
          breakHour:this.settings.breakHour,
          garageCapacity:this.settings.garageCapacity,
        })
      }
        
    })
  }

  initiateForms() {
    this.settingsForm=this.fb.group({
      firstHourPrice:[{ value:'', disabled: true }],
      remainHourPrice:[{ value:'', disabled: true }],
      finePrice:[{ value:'', disabled: true }],
      dailyPrice :[{ value:'', disabled: true }],
      hostingTimeMinutes :[{ value:true, disabled: true }],
      breakHour:[{ value:true, disabled: true }],
      garageCapacity:[{ value:'', disabled: true }],
    })  
    console.log('this.settings',this.settings)
 
  }

  restSettings(){
    this.settingsForm.enable();
    this.submitCanges=true
  }
  submit(){
    this.gService.add('/settings/create/',this.settingsForm.value).subscribe((res)=>{
      console.log(res)
    })
    this.discard()
  }

  discard(){
    this.settingsForm.disable();
    this.submitCanges=false
  }
}
