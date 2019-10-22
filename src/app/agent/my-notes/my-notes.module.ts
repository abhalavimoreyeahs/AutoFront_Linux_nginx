import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MyNotesRoutingModule } from './my-notes-routing.module';
import { MyNotesComponent } from './my-notes.component';
import { MaterialModule } from '../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        MyNotesRoutingModule
    ],
    declarations: [MyNotesComponent]
})
export class MyNotesModule {}