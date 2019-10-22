import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
    {
        path: '',
        component: ManagerComponent,
        children: [
            { path: '', redirectTo: 'managerDashboard', pathMatch: 'prefix' },
            { path: 'managerDashboard', loadChildren: './manager-dashboard/manager-dashboard.module#ManagerDashboardModule' },
            { path: 'viewCampaign', loadChildren: './viewCampaign/viewCampaign.module#ViewCampaignModule'},
            { path: 'agentfeedback', loadChildren: './agent-feedback/feedbackDetails.module#FeedBackDetailsModule'},
            // { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule {}
