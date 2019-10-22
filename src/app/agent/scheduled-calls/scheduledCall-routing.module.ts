import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduledCallComponent } from './scheduledCall.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduledCallComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduledCallRoutingModule {}