import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';

@Component({
  selector: 'app-adding-user',
  templateUrl: './adding-user.component.html',
  styleUrls: ['./adding-user.component.css'],
  providers:[MessageService]
})
export class AddingUserComponent implements OnInit {
  activeIndex = 0;
  userForm!: FormGroup;
  items:any[]=[]
  successMessage: string = '';
  styleclass: string = '';
  lang=''
  roles =[
    {"name":"admin","value":"admin"},
    {"name":"cashier","value":"cashier"}
  ]
  constructor(
    private gService: GServiceService,
    private fb: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private messageService: MessageService,
    private translate:TranslateService) { 
      this.lang=this.translate.currentLang
  }
 

  add(data: any) {
    this.gService.add('/api/register/', data).subscribe(
      (res) => {
        console.log(res);
        console.log(res.error);
        if(this.lang=="ar")
          this.successMessage = 'تم الاضافه بنجاح';
        else
             this.successMessage =" Added Successfully";
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
        this.styleclass = 'alert-success';
        this.userForm.reset()
      },
      (error) => {
        console.log(error.error);
        if(this.lang=='ar')
          this.successMessage = error.error.errorAR
         else
         this.successMessage = error.error.errorAR
        this.messageService.add({ severity: 'error', summary: 'error', detail: this.successMessage });
        this.styleclass = 'alert-error';
      }
    );
  }
  
  
  ngOnInit() {
    
    this.initiateForms();
  }
  initiateForms() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmationPassword: ['', Validators.required],
      email: [''],
      phone: [''],
      role: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }
  get Password() {
    return this.userForm.controls['password'];
  }
  get confirmPassword() {
    return this.userForm.controls['confirmationPassword'];
  }

onsubmit(){
  var userFormValue = { ...this.userForm.value };
  delete userFormValue.confirmationPassword;
 
  console.log(userFormValue)
  if (this.userForm.valid){
    this.add(userFormValue)
  }

}


discard() {
  this.router.navigate(['../'], { relativeTo: this.route });
}


passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmationPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}

}