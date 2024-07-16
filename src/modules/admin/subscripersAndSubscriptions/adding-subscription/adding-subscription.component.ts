import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';
import * as qrc from 'qrcode-generator';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-adding-subscription',
  templateUrl: './adding-subscription.component.html',
  styleUrls: ['./adding-subscription.component.css'],
  providers:[MessageService]
})
export class AddingSubscriptionComponent implements OnInit {
  qrdata: string = '';
  qrCodeImage: string = '';
  activeIndex = 0;
  subscriperForm!: FormGroup;
  subscriptionForm!: FormGroup;
  lang=''
  items:any[]=[]
  successMessage: string = '';
  styleclass: string = '';
  constructor(
    private gService: GServiceService,
    private translate:TranslateService,
    private fb: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private messageService: MessageService,
    ){
    this.lang=this.translate.currentLang
    if (this.lang=='en'){
       this.items = [
        {label:"subscriper Detiles"},
        {label:"subscription Detiles"}

        
      ]
    }
    else{
      this.items = [
        {label:"بيانات المشترك"},
        {label:"تفاصيل الاشتراك"}
      ]
    }
  }
 

  add(data:any){
    this.gService.add('/api/subscribers/',data).subscribe((res)=>{
        console.log(res);
        if(this.lang=="ar"){
          this.successMessage = 'تم الاضافه بنجاح';
        }
        else{
          this.successMessage = 'Data Added Successfully';
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
        this.styleclass = 'alert-success';
      },
      (error) => {
        console.log(error)
     if(this.lang=='ar')
       { if(error.error.subscriber_errors.phone_number)
          this.successMessage = 'رقم الموبايل موجود من قبل'
        else if(error.error.subscriber_errors.national_id)
          this.successMessage = 'الرقم القومى موجود من قبل'
        else if(error.error.subscriber_errors.cardNumber)
          this.successMessage ='رقم الكارت موجود من قبل'}
       else{
          if(error.error.subscriber_errors.phone_number)
            this.successMessage =error.error.subscriber_errors.phone_number
          else if(error.error.subscriber_errors.national_id)
            this.successMessage = error.error.subscriber_errors.national_id
          else if(error.error.subscriber_errors.cardNumber)
            this.successMessage =error.error.subscriber_errors.cardNumber
        }
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.successMessage });
        this.styleclass = 'alert-danger';
      }
      );
  
  }

  
  ngOnInit() {
    
    this.initiateForms();
  }
  initiateForms() {
    this.subscriperForm=this.fb.group({
      name:[''],
      phone_number:['',Validators.required] ,
      car_full_num:[''],
      car_number :[''], 
      car_digit :[''], 
      national_id:[''],
      address:[''],
      cardNumber:['',Validators.required] 
    })
    this.subscriptionForm=this.fb.group({
      start_date :['',Validators.required],
      end_date:['',Validators.required] ,
      price :['',Validators.required],
    })
  }

onsubmit(){
  var nums = ''
  var digits = ''
  const carNumber = this.subscriperForm.get('car_full_num')?.value
  const matches =carNumber.match(/([a-zA-Z]+)(\d+)|(\d+)([a-zA-Z]+)/);
  if (matches) {
    if (matches[1] && matches[2]) {
      digits = matches[1];
      nums = matches[2];
    } else if (matches[3] && matches[4]) {
      digits = matches[4];
      nums = matches[3];
    }
  } else {
    nums = '';
    digits = '';
  }nums
  this.subscriperForm.get('car_number')?.setValue(nums)
  this.subscriperForm.get('car_digit')?.setValue(digits)
  const subscriperFormValue = { ...this.subscriperForm.value };
  delete subscriperFormValue.car_full_num;
  const json = {
    subscriber: {
      ...subscriperFormValue,
      subscription: { ...this.subscriptionForm.value }
    }
  }
  const jsonString = JSON.stringify(json, null, 2);
  console.log(jsonString)
  this.gService.add('/api/subscribers/',jsonString).subscribe((res)=>{
    console.log(res);
    this.successMessage = 'تم الاضافه بنجاح';
    this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
    this.styleclass = 'alert-success';
    // this.generateQRCode(subscriperFormValue+this.subscriptionForm.value)
  },
  (error) => {
    if(this.lang=='ar')
      { if(error.error.subscriber_errors.phone_number)
         this.successMessage = 'رقم الموبايل موجود من قبل'
       else if(error.error.subscriber_errors.national_id)
         this.successMessage = 'الرقم القومى موجود من قبل'
       else if(error.error.subscriber_errors.cardNumber)
         this.successMessage ='رقم الكارت موجود من قبل'}
      else{
         if(error.error.subscriber_errors.phone_number)
           this.successMessage =error.error.subscriber_errors.phone_number
         else if(error.error.subscriber_errors.national_id)
           this.successMessage = error.error.subscriber_errors.national_id
         else if(error.error.subscriber_errors.cardNumber)
           this.successMessage =error.error.subscriber_errors.cardNumber
       }
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.successMessage });
    this.styleclass = 'alert-danger';
  }
  );

}


  nextStep() {
    if (this.activeIndex === 0 && this.subscriperForm.valid) {
      this.activeIndex++;
    } else if (this.activeIndex === 1 && this.subscriptionForm.valid) {
      this.activeIndex++;
    }
 
  }

  prevStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
  onStepClick(event: any) {
    // Handle step click event to navigate to the corresponding step
    this.activeIndex = event.index;
  }


  discard() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  showSnackBar() {
    let snackBarRef = this.snackBar.open('سيتم تجاهل البانات', 'تأكيد', {
      verticalPosition: 'top',
      duration: 0, 
      panelClass: ['custom-snackbar', 'snackbar-success'],
    });
    snackBarRef.afterDismissed().subscribe((dismissed) => {
      if (dismissed.dismissedByAction) {
        this.discard()
      }
      else{
        this.router.navigate([this.route])
      }
    });
  }

  generateQRCode(data:any) {
    
    const qrData = JSON.stringify(data);
    const qr = qrc(0, 'M');
    qr.addData(qrData);
    qr.make();
    this.qrCodeImage = qr.createDataURL(4);
    this.saveQRCode()
  }


  saveQRCode() {
    if (this.qrCodeImage) {
      const byteString = atob(this.qrCodeImage.split(',')[1]);
      const mimeString = this.qrCodeImage.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      // Save Blob as file using FileSaver.js
      saveAs(blob, 'qr_code.png');
    }
  }
  error:any={isError:false,errorMessage:''};
  compareTwoDates(){
    console.log('y')
   
    if(new Date(this.subscriptionForm.controls['end_date'].value)<new Date(this.subscriptionForm.controls['start_date'].value)){
      if(this.lang=='en'){
        this.error={isError:true,errorMessage:'End Date can not before start date'};
      }
     else{
        this.error={isError:true,errorMessage:'يجب ان يكون تاريخ الانتهاء بعد تلريخ البداية!'};
      }
     
    }
    else
    this.error={isError:false};
  }
}