import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';

@Component({
  selector: 'app-cacheir',
  templateUrl: './cacheir.component.html',
  styleUrls: ['./cacheir.component.css'],
  providers:[MessageService,DatePipe]
})
export class CacheirComponent implements OnInit {
  transForm!:FormGroup
  transactions:any[]=[]
  First=0
  rows = 5
  isFineChecked=false
  today = new Date().toISOString().split('T')[0];
  constructor( private gService: GServiceService,
    private router:Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService,) { }

  ngOnInit() {
    this.initiateForms();
    this.loadTransactions();

  }

  loadTransactions(){

    this.gService.getAll('/transactions/').subscribe((res)  => {
      this.transactions = res.filter((entry: any) => {
     return entry.to_time && entry.to_time.includes(this.today);
  }); console.log(this.transactions)  });   
  }

  initiateForms() {
    this.transForm = this.fb.group({
      type:['not_visitor',Validators.required],
      from_time:[''] ,
      comment:['']
    });
  }
  pageChange(event: any) {
    this.First = event.First;
    this.rows = event.rows;
    
  }

  checked(event:any){
    // this.isFineChecked = event.target.checked;
    if (event.target.checked==true){
      this.isFineChecked=true
      this.transForm.get('type')?.setValue('fine')
      
      this.transForm.get('type')?.disable()
      this.transForm.get('from_time')?.disable()
    }
   
    else{
      // this.isFineChecked=false
      this.transForm.get('type')?.enable()
      this.transForm.get('from_time')?.enable()
    }
  }

  onsubmit(){
    this.transForm.get('type')?.enable()
    this.gService.add('/transactions/',this.transForm.value).subscribe((res)=>{
      console.log('res',res)
      this.loadTransactions()
    })
  
    this.transForm.get('from_time')?.enable()
    this.transForm.reset()
    this.isFineChecked=false
    this.transForm.get('type')?.setValue('visitor')
    
  }

 
}
