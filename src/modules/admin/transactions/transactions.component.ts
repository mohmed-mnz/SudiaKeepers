import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faFileExcel,faAngleLeft, faThermometer4 } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { GServiceService } from 'src/app/services/GService.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers:[MessageService,DatePipe]
})
export class TransactionsComponent implements OnInit {
  faFileExcel= faFileExcel;
  faAngleLeft= faAngleLeft;
  transactions: any[] = [];
  successMessage: string = '';
  styleclass: string = '';
  userUpdateForm!: FormGroup;
  selsectedItem!:any
  First = 0;
  rows = 5;
  nameFilter: string = '';
  isAdminFilter='admin';
  filteredData!: any[];
  togeleduser:any=''
  userTransactions:any[]=[]
  expanded_row:any[]=[]
  private usersApi = '/users/';
  users: any[] = [];
  lang=''
  @ViewChild('dt1') dt1!: Table; 
  @ViewChild('dataexpanded') dt!: any; 
  private transactionsApi = '/transactions/';
  roles =[
    {"name":"damin","value":"damin"},
    {"name":"cashier","value":"cashier"}
  ]
  filterOptionsAr: SelectItem[] = [
    { label: 'يطابق', value: 'equals' },
    { label: 'يحتوى على', value: 'contains' },
    
];

filterOptionsEn: SelectItem[] = [
  { label: 'equals', value: 'equals' },
  { label: 'contains', value: 'contains' },

];
typeFilterOptions: SelectItem[] = [
  { label: '', value:' ' },
  { label: 'visitor', value: 'visitor' },
  { label: 'not_visitor', value: 'not_visitor' },
  { label: 'Fine', value: 'fine' }
];
  constructor(
    private gService: GServiceService,
    private router:Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService,private translate:TranslateService) { 
      this.lang=this.translate.currentLang
  }
  ngOnInit() {
    this.loadtransactions();
    this.initiateForms();
    this.loadUsers();
  }
  

  loadtransactions() {
    this.gService.getAll(this.transactionsApi).subscribe((res)  => {
      this.transactions = res ;
      console.log(res)
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
      if(this.lang=='ar')
        this.successMessage = 'تم التعديل بنجاح';
     else
        this.successMessage = 'Updated successflly';
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
    });
  }


  onUpdate() {
    const {id,username,email,phone,role}=this.userUpdateForm.value
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
      this.loadtransactions()
      this.styleclass = 'alert-success'
      if(this.lang=='ar')
        this.successMessage = 'تم التعديل بنجاح';
     else
        this.successMessage = 'Updated successflly';
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
    });
   
  }
  
  initiateForms() {
    this.userUpdateForm=this.fb.group({
      id:[''],
      username: [''],
      email: [''],
      phone: [''],
      role: [''],
    });

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


    
  pageChange(event: any) {
    this.First = event.First;
    this.rows = event.rows;
    
  }
  applyFilters() {
    this.filteredData = this.transactions.filter(item => {
      const nameMatch = item.username.toLowerCase().includes(this.nameFilter.toLowerCase());
      return nameMatch  
    });


    
  }

  filter(field: string, selectedDate: Date): void {
    // Convert the selected date to a string representing only the date part (YYYY-MM-DD)
    const selectedDateStr = selectedDate.toISOString().split('T')[0];
    
    // Filter the data based on the date part
    this.filteredData = this.transactions.filter((item) => {
        // Ensure that the item's field is a valid Date object
        const itemDate = new Date(item[field]);
        if (!isNaN(itemDate.getTime())) { // Check if it's a valid Date object
            // Extract the date part from the item's date field
            const itemDatePart = itemDate.toISOString().split('T')[0];
            // Compare the date parts
            return itemDatePart === selectedDateStr;
        }
        return false; // Return false if the item's field is not a valid Date object
    });
}



// exportToExcel(dt:any): void {
//   const renderedRows = dt.el.nativeElement.querySelectorAll('.p-datatable-tbody > tr');
//   console.log("Rendered Rows:", renderedRows);  
//   const data: { [key: string]: string }[] = []; // Define rowData type
//   renderedRows.forEach((row: { querySelectorAll: (arg0: string) => any[]; }) => {
//       const rowData: { [key: string]: string } = {}; // Define rowData type
//       row.querySelectorAll('td').forEach((cell, index) => {
//           const columnHeader = dt.columns?.[index]?.field; // Use optional chaining
//           if (columnHeader) {
//               rowData[columnHeader] = cell.textContent.trim();
//           }
//       });
//       data.push(rowData);
//   });

//   const fileName = 'transactions.xlsx';
//   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
//   const wb: XLSX.WorkBook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, 'transactions');
//   XLSX.writeFile(wb, fileName);
// }
trans:any[]=[]


  onTypeFilterChange(filterValue: any) {
    if (filterValue !== null && filterValue !== undefined) {
      console.log('y') 
      this.dt1.filterGlobal(filterValue, 'equals');
    } else {
      console.log('y')      // Reset the filter when the dropdown value is cleared
      this.dt1.filterGlobal('', 'contains'); // Clear the filter by passing an empty string as the filter value
    }
  }


  loadUsers() {
    this.gService.getAll(this.usersApi).subscribe((res)  => {
      console.log(res)
      this.users = res.filter((item: { role: string; }) => item.role == "cashier");
      console.log(this.users)
    })
     
  }

  findUserName(cashierId: number): string {
    const user = this.users.find(user => user.id === cashierId);
    if(this.lang=='ar')
      return user ? user.username : 'موظف سابق';
    else
       return user ? user.username : 'previous user';
  }

  calculateCustomerTotal(cashier: string) {
    let total = 0.00;

    if (this.transactions) {
        for (let trans of this.transactions) {
            if (trans.cashier === cashier) {
                total+=parseFloat(trans.price);
            }
        }
    }
    return total;
}


expandedRowData: any[]=[];
onRowExpand(event:any) {
  console.log(event)
  if (this.transactions) {
    for (let trans of this.transactions) {
        if (trans.cashier === event.data.cashier) {
          this.expandedRowData.push(trans)
        }
    }
}

}
onRowCollapse(event:any){
  console.log(event)
  this.expandedRowData = this.expandedRowData.filter(item => item.cashier!=event.data.cashier);

}




exportToExcel(data:any): void {
  if(data){
    const mappedData = data.map((trans: { type: any; price: any; from_time: any; to_time: any; duration_day: any; duration_hours: any; duration_minutes: any; }) => ({
      'النوع': trans.type,
      'السعر': trans.price,
      'من': trans.from_time,
      'الى': trans.to_time,
      'الايام': trans.duration_day,
      'الساعات': trans.duration_hours ,
      'الدقائق ': trans.duration_minutes,
    }));
    const fileName = 'transactions.xlsx';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, fileName + '.xlsx')  
  }
  else{
    const mappedData = this.expandedRowData.map((trans: { type: any; price: any; from_time: any; to_time: any; duration_day: any; duration_hours: any; duration_minutes: any; }) => ({
      'النوع': trans.type,
      'السعر': trans.price,
      'من': trans.from_time,
      'الى': trans.to_time,
      'الايام': trans.duration_day,
      'الساعات': trans.duration_hours ,
      'الدقائق ': trans.duration_minutes,
    }));
    const fileName = 'transactions.xlsx';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, fileName + '.xlsx');
   
  } 

}
}



