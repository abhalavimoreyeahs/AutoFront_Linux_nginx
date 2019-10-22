import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../autoDialer.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
//import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
    people={};
    parent;
    child;
    constructor( private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService, private router: Router) {

    }

    ngOnInit() {
      debugger;
        this.service.getParentAndChildScheduleCall().subscribe((data)=>{
            console.log(data);
            this.parent = data['message'];
            this.child = data['getChilds'];

        })
   

    }

}
