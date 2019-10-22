import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent,
        // children: [
        //     { path: '', redirectTo: 'adminDashboard', pathMatch: 'prefix' },
        //     { path: 'adminDashboard', loadChildren: './admin/adminDashboard.module#AdminDashboardModule' },
        //     { path: 'employee', loadChildren: './onBoardEmployee/employee.module#EmployeeModule'},
        //     { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule'},
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule {}
