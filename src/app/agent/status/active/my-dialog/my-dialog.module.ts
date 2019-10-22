import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MyDialogComponent } from './my-dialog.component';
import { MaterialModule } from '../../../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
    ],
    declarations: [MyDialogComponent]
})
export class MyDialogModule {}