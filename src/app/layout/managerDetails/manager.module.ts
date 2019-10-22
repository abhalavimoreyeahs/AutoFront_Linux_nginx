import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent, AssignAgentComponent } from './manager.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, ManagerRoutingModule,FormsModule, MaterialModule],
    entryComponents:[
        AssignAgentComponent
       ],
    declarations: [ ManagerComponent, AssignAgentComponent ]
})
export class ManagerModule {}
