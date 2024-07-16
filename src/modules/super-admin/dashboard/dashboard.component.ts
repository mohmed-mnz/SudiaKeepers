import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faPrint,
  faDoorOpen,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[MessageService]
})
export class DashboardComponent implements OnInit {
  faPrint = faPrint;
  faDoorOpen= faDoorOpen;
  faHome=faHome;
  accessControlPrinter: any[]=[]
  accessControls_num=0
  printers:any[]=[]
  accessControls:any[]=[]
  printers_num=0
  unusedPrinters:any[]=[]
  unusedAcesses:any[]=[]
  selsectedItem!:any
  accessConterolsPrinterForm!: FormGroup;
  successMessage: string = '';
  styleclass: string = '';
  updatePrinterForm!: FormGroup;
  dropdownDataAcess:any[]=[]
  dropdownDataPrinter:any[]=[]
  selsectedAcess:any=''
  seletedPrinter:any=''
  constructor(private gService: GServiceService,
    private fb: FormBuilder,

    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.initiateForms()
    this.loadPrinters()
    this.loadAccessControls()
    this.loadacessControlPrinter()

  }
  initiateForms() {
    
    this.accessConterolsPrinterForm=this.fb.group({
      printer:['',Validators.required],
      access_control:['',Validators.required]
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
      this.dropdownDataPrinter = res.map((item: { ip_address: any; id: any; }) => (
        console.log(item),
        {
          name: item.ip_address    ,
          code: item.id
      }));
      this.printers_num =  this.dropdownDataPrinter.length
      console.log('res',res) 

       });   
  }
  loadAccessControls() {
    this.gService.getAll('/hardware/access-controls/').subscribe((res)  => {
      
      this.dropdownDataAcess = res.map((item: { ip_address: any; id: any; }) => 
        (
          console.log(item),{
          name: item.ip_address,
          code: item.id
      }));
      console.log('res',res) 
      this.accessControls_num=this.dropdownDataAcess.length
       });   
   
  }
  filterUnusedPrintersandAcess() {
      const usedPrinterIds = new Set(this.accessControlPrinter.map(cp => cp.printer.id));
      console.log(this.dropdownDataAcess)
      this.unusedPrinters = this.dropdownDataPrinter.filter(printer => !usedPrinterIds.has(printer.code));
      console.log( this.unusedPrinters)


      const usedAcessIds = new Set(this.accessControlPrinter.map(cp => cp.access_control.id));
      console.log(this.dropdownDataAcess)
      this.unusedAcesses = this.dropdownDataAcess.filter(access => !usedAcessIds.has(access.code));
      console.log( this.unusedAcesses)
  }
  loadacessControlPrinter() {
    this.gService.getAll('/hardware/access-control-printers/').subscribe((res)  => {
      this.accessControlPrinter = res ;
      console.log('res',res) 
      this.accessControls_num=this.accessControls.length
 
       });   
   
  }
  
  onAddAcessControllerPrinter() {
    console.log(this.seletedPrinter)
    this.seletedPrinter={ id: this.seletedPrinter.code, ip_address: this.seletedPrinter.name };

    this.accessConterolsPrinterForm.get('printer')?.setValue(this.seletedPrinter.code)
    // this.selsectedAcess={ id: this.selsectedAcess.code, ip_address: this.selsectedAcess.name };
    this.accessConterolsPrinterForm.get('access_control')?.setValue(this.selsectedAcess.code)
    console.log(this.accessConterolsPrinterForm)
    this.gService.add('/hardware/access-control-printers/', this.accessConterolsPrinterForm.value).subscribe(
      (res) => {
        console.log(res);
        this.accessControlPrinter.unshift(res, 1);
       
        this.successMessage = 'تم الاضافه بنجاح';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
        this.styleclass = 'alert-success';
        this.accessConterolsPrinterForm.reset()
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
      this.gService.update('/hardware/access-control-printers/'+id+'/', json).subscribe((res) => {
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

 
// onDelete(id: any) {
//   this.gService.delete("/api/delete/" , id +'/').subscribe((res) => {
//     console.log(res)
//     var index = this.filteredData.findIndex(c => c.id == id);
//     this.filteredData.splice(index, 1);
//     this.filteredData.sort((a, b) => a.id - b.id).reverse();
//     this.styleclass = 'alert-danger'
//     this.successMessage = 'تم الحذف بنجاح';
//     this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
//   },
//   (error) => {
//     console.log(error.error);
//     this.successMessage = error.error.error
//     this.messageService.add({ severity: 'error', summary: 'Success', detail: this.successMessage });
//     this.styleclass = 'alert-error';
//   }
//   );
// }

onDeeteAcessPrinter(id:any){
  
  this.gService.delete("/hardware/access-control-printers/" , id +'/').subscribe((res) => {
    console.log(res)
    var index = this.accessControlPrinter.findIndex(c => c.id == id);
    this.accessControlPrinter.splice(index, 1);
    this.accessControlPrinter.sort((a, b) => a.id - b.id).reverse();
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


onDeleteAceesscontrol(id:any){
  this.gService.delete("/hardware/access-controls/" , id +'/').subscribe((res) => {
    console.log(res)
    var index = this.accessControls.findIndex(c => c.id == id);
    this.accessControls.splice(index, 1);
    this.accessControls.sort((a, b) => a.id - b.id).reverse();
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