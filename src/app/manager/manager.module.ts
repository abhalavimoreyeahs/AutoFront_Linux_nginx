import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';

import { MaterialModule } from '../material/material.module';



// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';


@NgModule({
    imports: [
        CommonModule,
        ManagerRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [ManagerComponent]
})
export class ManagerModule {}