import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: ManagerDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerDashboardRoutingModule {}