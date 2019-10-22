import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

import { MaterialModule } from '../material/material.module';

// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';


@NgModule({
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {}