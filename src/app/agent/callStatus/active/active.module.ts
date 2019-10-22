import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ActiveRoutingModule } from './active-routing.module';
import { ActiveComponent } from './active.component';
import { MaterialModule } from '../../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        ActiveRoutingModule
    ],
    declarations: [ActiveComponent]
})
export class ActiveModule {}
