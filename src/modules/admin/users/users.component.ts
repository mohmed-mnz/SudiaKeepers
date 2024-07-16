import { Component, OnInit, ViewChild } from '@angular/core';
import { GServiceService } from 'src/app/services/GService.service';
import { Table } from 'primeng/table';
import { SelectItem } from 'primeng/api';

import {
  faFileExcel
} from '@fortawesome/free-solid-svg-icons';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[MessageService]
})
export class UsersComponent implements OnInit {
  faFileExcel= faFileExcel;
  users: any[] = [];
  successMessage: string = '';
  styleclass: string = '';
  userUpdateForm!: FormGroup;
  selsectedItem!:any
  activityValues: number[] = [0, 100];
  First = 0;
  rows = 5;
  nameFilter: string = '';
  isAdminFilter='admin';
  filteredData!: any[];
  loading = false
  lang=''
  private usersApi = '/users/';
  roles =[
    {"name":"admin","value":"admin"},
    {"name":"cashier","value":"cashier"}
  ]
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
matchModeOptions: SelectItem[] = [
  { label: 'الكل', value: 'and' },
  { label: 'أي منها', value: 'or' }
];
  constructor(
    private gService: GServiceService,
    private router:Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService,
    private translate:TranslateService) { 
      this.lang=this.translate.currentLang
      console.log(this.lang)
  }
    
  
  ngOnInit() {
    this.loadUsers();
    this.initiateForms();
  
  }
  loadUsers() {
    this.gService.getAll(this.usersApi).subscribe((res)  => {
      this.users = res ;
      console.log('res',res) 
      this.filteredData=this.users
       });   
  }
 onAdd(){
  this.router.navigate(['add'], { relativeTo: this.route.parent });
 }  
  onDelete(id: any) {
    this.gService.delete("/api/delete/" , id +'/').subscribe((res) => {
      console.log(res)
      var index = this.filteredData.findIndex(c => c.id == id);
      this.filteredData.splice(index, 1);
      this.filteredData.sort((a, b) => a.id - b.id).reverse();
      this.styleclass = 'alert-danger'
      if(this.lang=="ar")
        this.successMessage = 'تم الحذف بنجاح';
      else
         this.successMessage = 'deleted sucessfully';
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
    },
    (error) => {
      console.log(error.error);
      this.successMessage = error.error.error
      this.messageService.add({ severity: 'error', summary: 'Success', detail: this.successMessage });
      this.styleclass = 'alert-error';
    }
    );
  }


  onUpdate() {
    const {id,username,password,confirmPassword,email,phone,role}=this.userUpdateForm.value
    const json={
      id:id,
      update_data:{
        username:username,
        email:email,
        phone:phone,
        role:role
      }
    }
    const jsonString = JSON.stringify(json)
    this.gService.update('/api/Update/', jsonString).subscribe((res) => {
      this.loadUsers()
      this.styleclass = 'alert-success'
      this.successMessage = 'تم التعديل بنجاح';
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
    },
    (error) => {
      console.log(error.error);
      this.successMessage = error.error.error
      this.messageService.add({ severity: 'error', summary: 'Success', detail: this.successMessage });
      this.styleclass = 'alert-error';
    }
    );
   
  }
  
  initiateForms() {
    this.userUpdateForm=this.fb.group({
      id:[''],
      username: [''],
      Password:[''],
      confirmPassword:[''],
      email: [''],
      phone: [''],
      role: [''],
    }, { validators: this.passwordMatchValidator });

  }


  updatePopup(user: any) {
    console.log(user)
    this.userUpdateForm.patchValue(user);
  }

  get Password() {
    return this.userUpdateForm.controls['password'];
  }
  get confirmPassword() {
    return this.userUpdateForm.controls['confirmationPassword'];
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmationPassword')?.value;
  
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
      
    
  pageChange(event: any) {
    this.First = event.First;
    this.rows = event.rows;
    
  }
  applyFilters() {
    this.filteredData = this.users.filter(item => {
      const nameMatch = item.username.toLowerCase().includes(this.nameFilter.toLowerCase());
      return nameMatch  
    });
  }






  clear(table: Table) {
    table.clear();
}
exportToExcel(data:any): void {
  if(data){
    const mappedData = data.map((user: { username: any; email: any;   phone: any; role: any;  }) => ({
      'الاسم': user.username,
      'البريد الالكترونى': user.email,
      'الموبايل': user.phone,
      'الوظيفة': user.role,
    }));
    const fileName = 'users.xlsx';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, fileName + '.xlsx')  
  }
  else{
    const mappedData = this.users.map((user: { username: any; email: any;   phone: any; role: any;  }) => ({
      'الاسم': user.username,
      'البريد الالكترونى': user.email,
      'الموبايل': user.phone,
      'الوظيفة': user.role,
    }));
    const fileName = 'users.xlsx';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, fileName + '.xlsx')  
}
}

// exportToExcel(data:any): void {
//   console.log(data)
//   const fileName = 'users.xlsx';
//   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
//   const wb: XLSX.WorkBook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, 'users');
//   XLSX.writeFile(wb, fileName);
 
// }
}



