import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallInfoRoutingModule } from './callInfo-routing.module';
import { CallInfoComponent } from './callInfo.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, CallInfoRoutingModule,FormsModule, MaterialModule],
    entryComponents:[ CallInfoComponent ],
    declarations: [ CallInfoComponent ]
})
export class CallInfoModule {}
