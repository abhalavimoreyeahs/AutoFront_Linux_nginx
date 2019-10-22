import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './component/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        MaterialModule,
        FormsModule,
        MatProgressBarModule
    ],
    declarations: [LayoutComponent, NavComponent]
})
export class LayoutModule {}