import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { GServiceService } from 'src/app/services/GService.service';

@Component({
  selector: 'app-aceessControler',
  templateUrl: './aceessControler.component.html',
  styleUrls: ['./aceessControler.component.css'],
  providers: [MessageService]
})
export class AceessControlerComponent implements OnInit {

  accessControls: any[]=[]
  accessControls_num=0
  selsectedItem!:any
  accessControlForm!: FormGroup;
  updateaccessControlForm!: FormGroup;
  seletedAcessControl!:any
  successMessage: string = '';
  styleclass: string = '';
  constructor(private gService: GServiceService,
    private fb: FormBuilder,

    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.initiateForms()
    this.loadAccessControls()
  }
  initiateForms() {
    this.accessControlForm=this.fb.group({
      ip_address:['',[Validators.required, this.ipv4Validator]],
    });
    this.updateaccessControlForm=this.fb.group({
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
 
  loadAccessControls() {
    this.gService.getAll('/hardware/access-controls/').subscribe((res)  => {
      this.accessControls = res ;
      console.log('res',res) 

      this.accessControls_num=this.accessControls.length

       });   
   
  }
  


 

  onAddAcessController() {
    this.gService.add('/hardware/access-controls/', this.accessControlForm.value).subscribe(
      (res) => {
        console.log(res);
        this.accessControls.unshift(res, 0);
        this.accessControls_num=this.accessControls.length
        console.log(res.data);
        this.successMessage = 'تم الاضافه بنجاح';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
        this.styleclass = 'alert-success';
        this.accessControlForm.reset()
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

  
     
    
 
 onUpdateAceesscontrol(){
  const id =this.updateaccessControlForm.get('id')?.value
  const json = {
    ip_address :this.updateaccessControlForm.get('ip_address')?.value
  }
    this.gService.update('/hardware/access-controls/'+id+'/', json).subscribe((res) => {
      this.loadAccessControls()
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
