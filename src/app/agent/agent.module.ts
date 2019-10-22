import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { MaterialModule } from '../material/material.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//for angular calender scheduler

// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';

//for calling
import { CallDialogModule } from './call-dialog/call-dialog.module'
import { CallDialogComponent } from './call-dialog/call-dialog.component';


@NgModule({
    imports: [
        CommonModule,
        AgentRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        MaterialModule,
        FormsModule,
        CallDialogModule,
        MatProgressBarModule,
        ReactiveFormsModule

    ],
    entryComponents:[
        CallDialogComponent,

    ],
    declarations: [AgentComponent]
})
export class AgentModule {}