import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../../autoDialer.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-editAssignedAgent',
    templateUrl: './editAssignedAgent.component.html',
    styleUrls: ['./editAssignedAgent.component.css']
})
export class EditAssignedAgentComponent implements OnInit {
   
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService,  public router: Router) {
       
    }
        ngOnInit(){
        

        }

      
}
