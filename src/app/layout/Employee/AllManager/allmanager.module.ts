import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllManagerRoutingModule } from './allmanager-routing.module';
import { AllManagerComponent } from './allmanager.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
    imports: [CommonModule, AllManagerRoutingModule,FormsModule, MaterialModule],
    declarations: [ AllManagerComponent ]
})
export class AllManagerModule {}
