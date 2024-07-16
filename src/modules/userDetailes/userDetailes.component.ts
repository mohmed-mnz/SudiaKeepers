import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';

@Component({
  selector: 'app-userDetailes',
  templateUrl: './userDetailes.component.html',
  styleUrls: ['./userDetailes.component.css'],
  providers:[MessageService]
})
export class UserDetailesComponent implements OnInit {
  userForm!:FormGroup
  submitCanges=false
  user!:any
  successMessage: string = '';
  styleclass: string = '';
  constructor( 
    private messageService: MessageService,
    private translate:TranslateService,
    private gService: GServiceService,
    private router:Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,) {
  }
  ngOnInit() {
    this.loadinguser()
    this.initiateForms()
  }
  


  loadinguser(){
    const id = localStorage.getItem('user-id')
    this.gService.get('/users/'+id+'/').subscribe((res)=>{
     this.userForm.patchValue(res)
 
    })
  }

  initiateForms() {
    this.userForm=this.fb.group({
      id:[''],
      username:[{ value:'', disabled: true }],
      password:[{ value:'', disabled: true }],
      email:[{ value:'', disabled: true },[ Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]],
      role :[{ value:'', disabled: true }],
      phone:[{ value:'', disabled: true },[Validators.pattern('^01[0125][0-9]{8}')]],
    })  
   
  }

  restuser(){
    this.userForm.enable();
    this.userForm.get('role')?.disable()
    this.submitCanges=true
  }
  submit(){
    this.gService.add('/api/Update/',this.userForm.value).subscribe((res)=>{
      this.styleclass = 'alert-success'
      this.successMessage = 'تم التعديل بنجاح';
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });

    })
    this.router.navigate(['/login'])
  }
discard(){
  this.loadinguser()
}
  return(){
    const role = localStorage.getItem('role')
    if (role === 'admin') {
      console.log('admin')
      this.router.navigate(['/admin']);
    } else if (role === 'cashier') {
      this.router.navigate(['/casheir']);
    } else {
      console.log('superadmin')
      this.router.navigate(['/super-admin']);
    }

  }
}


