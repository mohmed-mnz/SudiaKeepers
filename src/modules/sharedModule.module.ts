import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import {MatPaginatorModule,} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule} from '@angular/material/menu'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MatSlideToggleModule }from '@angular/material/slide-toggle';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule} from 'primeng/password';
import { InputTextModule}from 'primeng/inputtext'
import { StepsModule } from 'primeng/steps';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { EgyptNationalIdInputComponent } from 'src/app/custom inputs/EgyptNationalIdInput/EgyptNationalIdInput.component';
import { EgyptPhoneNumberInputComponent } from 'src/app/custom inputs/EgyptPhoneNumberInput/EgyptPhoneNumberInput.component';
import { NumberInputComponent } from 'src/app/custom inputs/NumberInput/NumberInput.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule }  from '@angular/material/select'; 
import { ProgressBarModule} from 'primeng/progressbar' ;
import { PaginatorModule} from 'primeng/paginator' ;
import { TagModule } from 'primeng/tag';
import {SliderModule} from 'primeng/slider'
import { CalendarModule} from 'primeng/calendar';
import { DragDropModule } from 'primeng/dragdrop';
// import {} from 'primeng/co'
// import { QRCodeModule } from 'angularx-qrcode';
// import {}
@NgModule({
  imports: [
    CommonModule,
    // QRCodeModule,
    TagModule,
    PaginatorModule,
    CalendarModule,
    SliderModule,
    ButtonModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EgyptNationalIdInputComponent,
    EgyptPhoneNumberInputComponent, 
    NumberInputComponent,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule,
    TableModule,
    ToastModule,
    MatSlideToggleModule,
    HighchartsChartModule,
    ChartModule,
    DropdownModule,
    StepsModule,
    MatSnackBarModule,
    MatSelectModule,
    PasswordModule,
    InputTextModule,
    ProgressBarModule,
    DragDropModule,
    ToastrModule.forRoot(),
    
  ],
  exports: [
    CommonModule,
    ButtonModule,
    // QRCodeModule,
    PaginatorModule,
    TagModule,
    CalendarModule,
    SliderModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    EgyptNationalIdInputComponent,
    EgyptPhoneNumberInputComponent, 
    NumberInputComponent,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    ToastModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule,
    TableModule,
    ToastModule,
    MatSlideToggleModule,
    HighchartsChartModule,
    ChartModule,
    DropdownModule,
    StepsModule,
    MatSnackBarModule,
    PasswordModule,
    InputTextModule,
    ProgressBarModule,
    DragDropModule,
    MatSelectModule
  ],
  declarations: [
  ]
})
export class SharedModuleModule { }
