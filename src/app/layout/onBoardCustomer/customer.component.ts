import { Component, OnInit } from '@angular/core';
import { AutoDialService } from '../../autoDialer.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'ts-xlsx';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   
    displayData = [ 'S No', 'Name', 'Age', 'Mobile', 'Domicile', 'City'];

    uploadForm: FormGroup;  
 
    arrayBuffer:any;
    file:File;
    DataTable = [];
    ResultDataSuccess = [];
    ResultDataFailed = [];
    selectedFile='';
    ExcelArray;
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService) {
      
    }
   
    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            profile: ['']
          });
    }

          //Excel file
  
// arrayBuffer:any;
// file:File;
incomingfile(event) 
{
this.file= event.target.files[0]; 
if (event.target.files.length > 0) {
 
  const file = event.target.files[0];
  this.uploadForm.get('profile').setValue(file);
  this.selectedFile = this.uploadForm.get('profile').value.name
  console.log(this.uploadForm.get('profile').value);       
}
}

Upload() {
this.selectedFile='';
    let fileReader = new FileReader();
      fileReader.onload = (e) => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
          this.ExcelArray = XLSX.utils.sheet_to_json(worksheet,{raw:true}); 
          this.sendExcelFile(this.ExcelArray);
      }
      fileReader.readAsArrayBuffer(this.file);       
}
ExcelFileObj;
sendExcelFile(excelFile){
this.ExcelFileObj = {
 CustomerData: excelFile
}
 alert('file sending')
 console.log('Excel',this.ExcelFileObj);
    this.service.excelUploading(this.ExcelFileObj).subscribe((data)=>{
      if(data.sucess == true){
        if(data.data.length !=0){
          this.showToaster();
         }else if(data.data.length == 0){
           this.warningSuccess();
         }
          console.log(data);
          this.ResultDataSuccess = data.data;
          this.ResultDataFailed = data.duplicateData;
      }else{
        console.log(data);
        this.ErrorSuccess();
      }
    })
}
  
 

                  //notification
   showToaster(){
    this.toastrService.success('Data Saved Successfully');
  }
  ErrorSuccess(){
    this.toastrService.error('Failed to save Data');
  }
  infoSuccess(){
    this.toastrService.info('info msg','Info!');
  }
  warningSuccess(){
    this.toastrService.warning('warning : Duplicate Data');
  }
}


