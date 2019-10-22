import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CallBackRoutingModule } from './callback-routing.module';
import { CallBackComponent, DialogOverviewExampleDialog, DialogBox2 } from './callback.component';
import { MaterialModule } from '../../../material/material.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

//import { MyDialogModule } from '../my-dialog/my-dialog.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        CallBackRoutingModule,
        MatFormFieldModule
    ],
    entryComponents:[
       // MyDialogComponent,
       DialogOverviewExampleDialog, DialogBox2
    ],
 
    declarations: [CallBackComponent, DialogOverviewExampleDialog, DialogBox2]
})
export class CallBackModule {}
