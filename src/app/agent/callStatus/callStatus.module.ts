import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CallStatusRoutingModule } from './callStatus-routing.module';
import { CallStatusComponent } from './callStatus.component';
import { MaterialModule } from '../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        CallStatusRoutingModule
    ],
    declarations: [CallStatusComponent]
})
export class CallStatusModule {}
