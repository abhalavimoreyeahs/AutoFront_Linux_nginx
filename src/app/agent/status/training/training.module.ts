import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { MaterialModule } from '../../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        TrainingRoutingModule
    ],
    declarations: [TrainingComponent]
})
export class TrainingModule {}
