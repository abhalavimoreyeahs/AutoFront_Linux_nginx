import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
//import { MyAlertDialogModule } from '../alert-dialog/alert-dialog.module'
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MyDialogModule } from '../my-dialog/my-dialog.module'
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MyDialogModule,
    //    MyAlertDialogModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        LoginRoutingModule],
        entryComponents:[
            MyDialogComponent,

        ],
    declarations: [LoginComponent,] // MyAlertDialogComponent
})
export class LoginModule {}
