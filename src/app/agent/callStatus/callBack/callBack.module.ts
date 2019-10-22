import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CallBackRoutingModule } from './callBack-routing.module';
import { CallBackComponent } from './callBack.component';
import { MaterialModule } from '../../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        CallBackRoutingModule
    ],
    declarations: [CallBackComponent]
})
export class CallBackModule {}
