import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GServiceService } from 'src/app/services/GService.service';
import { MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-subscripersAndSubscriptions',
  templateUrl: './subscripersAndSubscriptions.component.html',
  styleUrls: ['./subscripersAndSubscriptions.component.css'],
  providers:[MessageService,DatePipe]
})
export class SubscripersAndSubscriptionsComponent implements OnInit {
  subscriptions: any[] = [];
  successMessage: string = '';
  styleclass: string = '';
  subscriperUpdateForm!: FormGroup;
  selsectedItem!:any
  First = 0;
  rows = 5;
  nameFilter: string = '';
  fromDateFilter!: Date;
  toDateFilter!: Date;
  filteredData!: any[];
  lang=''
  expanded_row:any[]=[]
  filterOptionsAr: SelectItem[] = [
    { label: 'يبدأ بـ', value: 'startsWith' },
    { label: 'يحتوى على', value: 'contains' },
    
];

filterLocale: any = {
  "تطبيق" :  "apply",
  "clear": "مسح"
};
filterOptionsEn: SelectItem[] = [
  { label: 'startsWith ', value: 'startsWith' },
  { label: 'contains', value: 'contains' },
  
];
  private subscriptionApi = '/api/subscribers/';
  constructor(
    private gService: GServiceService,
    private router:Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService,private translate:TranslateService) { 
      this.lang=this.translate.currentLang
  }
  ngOnInit() {
    this.loadsubscriptions();
    this.initiateForms();
  
  }

  loadsubscriptions() {
    this.gService.getAll(this.subscriptionApi).subscribe((res)  => {
      this.subscriptions = res ;
      console.log(res) 
      this.filteredData=this.subscriptions
       });   
  }
 onAdd(){
  this.router.navigate(['add'], { relativeTo: this.route.parent });
 }
  onDelete(id: any) {
    this.gService.delete('/Subscriptions/subscribers/' , id+'/' ).subscribe((res) => {
      var index = this.subscriptions.findIndex(c => c.id == id);
      this.subscriptions.splice(index, 1);
      this.subscriptions.sort((a, b) => a.id - b.id).reverse();
      this.styleclass = 'alert-danger'
      if(this.lang=="ar")
        this.successMessage = 'تم الحذف بنجاح';
      else
          this.successMessage = ' deleted Sucessfully ';
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
    });
  }

  initiateForms() {
    this.subscriperUpdateForm = this.fb.group({
      id:[''],
      name: [''],
      phone_number: [''],
      car_full_num: [''],
      car_number: [''],
      car_digit: [''],
      national_id: [''],
      address: [''],
      subscription: this.fb.group({ // Nested FormGroup for subscription
        start_date: [''],
        end_date: [''],
        price: ['']
      })
    });
  }
  updatePopup(data:any){
    console.log(data)    
    this.subscriperUpdateForm.patchValue(data)
    this.subscriperUpdateForm.get('car_full_num')?.patchValue
    ( this.subscriperUpdateForm.get('car_number')?.value+ this.subscriperUpdateForm.get('car_digit')?.value)
  }

  onUpdate() {
  var nums = ''
  var digits = ''
  const carNumber = this.subscriperUpdateForm.get('car_full_num')?.value
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
  this.subscriperUpdateForm.get('car_number')?.setValue(nums)
  this.subscriperUpdateForm.get('car_digit')?.setValue(digits)
    const subscriptionUpdateForm = { ...this.subscriperUpdateForm.value };
    delete subscriptionUpdateForm.car_full_num;
    const id =subscriptionUpdateForm.id 
    delete subscriptionUpdateForm.id;
    console.log(subscriptionUpdateForm)
    this.gService.update('/Subscriptions/subscribers/'+id+'/',subscriptionUpdateForm).subscribe((res) => {
      console.log(res)
      this.styleclass = 'alert-success'
      if(this.lang=='ar')
         this.successMessage = 'تم التعديل بنجاح';
      else
         this.successMessage = 'Updated successflly';
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
      this.loadsubscriptions()
    });
  }
  
    
  pageChange(event: any) {
    this.First = event.First;
    this.rows = event.rows;
    
  }
  applyFilters() {
    this.filteredData = this.subscriptions.filter(item => {
      // Filter by name
      const nameMatch = item.name.toLowerCase().includes(this.nameFilter.toLowerCase());
       // Filter by date
      const fromDateMatch = !this.fromDateFilter || new Date(item.subscription.start_date) >= this.fromDateFilter;
      const toDateMatch = !this.toDateFilter || new Date(item.subscription.end_date) <= this.toDateFilter;
       
      return nameMatch && fromDateMatch && toDateMatch;
    });
  }
  exportToExcel(data:any): void {
    if(data){
      const mappedData = data.map((sub: {
        subscription: any; name: any; start_date: any; 
        end_date: any; address: any; phone_number: any; national_id: any; car_number: any;car_digit:any }) => ({
        'الاسم': sub.name,
        'من': sub.subscription.start_date,
        'الى': sub.subscription.end_date,
        'العنوان': sub.address,
        'رقم الموبايل': sub.phone_number,
        'الرقم القومى ': sub.national_id,
        'رقم السيارة': sub.car_number+sub.car_digit,
        'السعر': sub.subscription.price,
      }));
      const fileName = 'subscriptions.xlsx';
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedData);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      XLSX.writeFile(workbook, fileName + '.xlsx')  
    }
    else{
      const mappedData = this.subscriptions.map((sub: {
        subscription: any; name: any; start_date: any; 
        end_date: any; address: any; phone_number: any; national_id: any; car_number: any;car_digit:any }) => ({
        'الاسم': sub.name,
        'من': sub.subscription.start_date,
        'الى': sub.subscription.end_date,
        'العنوان': sub.address,
        'رقم الموبايل': sub.phone_number,
        'الرقم القومى ': sub.national_id,
        'رقم السيارة': sub.car_number+sub.car_digit,
        'السعر': sub.subscription.price,
      }));
      const fileName = 'subscriptions.xlsx';
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedData);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      XLSX.writeFile(workbook, fileName + '.xlsx')  
    } 
  
  }
  // exportToExcel(): void {
  //   const fileName = 'subscriptions.xlsx';
  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.subscriptions);
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'subscriptions');
  //   XLSX.writeFile(wb, fileName);
   
  // }

  expanding(data:any){
    this.expanded_row=[]
    console.log(data)
    this.expanded_row.push(data)
    console.log(typeof(this.expanded_row))
  }
}



