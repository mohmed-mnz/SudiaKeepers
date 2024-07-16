import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.css'],
  providers: [MessageService]
})
export class PrintersComponent implements OnInit {
  printers:any[]=[]
  selsectedItem:any=''
  printers_num=0
  printerForm!: FormGroup;
  successMessage: string = '';
  styleclass: string = '';
  updatePrinterForm!: FormGroup;
  constructor(private gService: GServiceService,
    private fb: FormBuilder,

    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.initiateForms()
    this.loadPrinters()
   
  }
  initiateForms() {

    this.printerForm=this.fb.group({
      ip_address:['',[Validators.required, this.ipv4Validator]],
    });
    this.updatePrinterForm=this.fb.group({
      id:[''],
      ip_address:['',[ this.ipv4Validator]],
    });     
  }

  ipv4Validator(control:any) {
    const ipv4Pattern =
      /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    if (control.value && !ipv4Pattern.test(control.value)) {
      return { 'invalidIP': true };
    }
    return null;
  }
  loadPrinters() {
    this.gService.getAll('/hardware/printers/').subscribe((res)  => {
      this.printers = res ;
      this.printers_num =  this.printers.length
      console.log('res',res) 

       });   
  }

  onAddPrinter() {
    this.gService.add('/hardware/printers/', this.printerForm.value).subscribe(
      (res) => {
        console.log(res);
        this.printers.unshift(res, 0);
        this.printers_num+1
        console.log(res.data);
        this.successMessage = 'تم الاضافه بنجاح';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
        this.styleclass = 'alert-success';
        this.printerForm.reset()
      },
      (error) => {
        console.log(error.error);
        this.successMessage = error.error.error
        this.messageService.add({ severity: 'error', summary: 'Success', detail: this.successMessage });
        this.styleclass = 'alert-error';
      }
    );
  }

 


  updatePopup(data: any,form:any) {
    form.patchValue(data);
  }

  onUpdatePrinter(){
    const id =this.updatePrinterForm.get('id')?.value
    const json = {
      ip_address :this.updatePrinterForm.get('ip_address')?.value
    }
      this.gService.update('/hardware/printers/'+id+'/', json).subscribe((res) => {
        this.loadPrinters()
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

 
    


onDeleteprinter(id:any){
  this.gService.delete("/hardware/printers/" , id +'/').subscribe((res) => {
    console.log(res)
    var index = this.printers.findIndex(c => c.id == id);
    this.printers.splice(index, 1);
    this.printers.sort((a, b) => a.id - b.id).reverse();
    this.styleclass = 'alert-danger'
    this.successMessage = 'تم الحذف بنجاح';
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




}
