import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SettingRoutingModule } from './setting-routing';
import { SettingComponent } from './setting.component';
import { MaterialModule } from '../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        SettingRoutingModule
    ],
    declarations: [SettingComponent]
})
export class SettingModule {}
