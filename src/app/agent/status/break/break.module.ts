import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BreakRoutingModule } from './break-routing.module';
import { BreakComponent, BreakDialogComponent, BreakReasonComponent } from './break.component';
import { MaterialModule } from '../../../material/material.module';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        BreakRoutingModule,
      
    ],
    entryComponents:[
        BreakComponent, BreakDialogComponent, BreakReasonComponent
       ],
    declarations: [BreakComponent, BreakDialogComponent, BreakReasonComponent]
})
export class BreakModule {}
