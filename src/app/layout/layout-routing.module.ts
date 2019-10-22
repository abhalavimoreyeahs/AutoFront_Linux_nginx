import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'adminDashboard', pathMatch: 'prefix' },
            { path: 'adminDashboard', loadChildren: './admin/adminDashboard.module#AdminDashboardModule' },
            { path: 'addEmployee', loadChildren: './onBoardEmployee/employee.module#EmployeeModule'},
            { path: 'addCustomer', loadChildren: './onBoardCustomer/customer.module#CustomerModule'},
            { path: 'viewEmployee', loadChildren: './Employee/employee.module#EmployeeModule'},
            { path: 'AgentAssignment', loadChildren: './AssignedAgent/assignedAgent.module#AssignedAgentModule' },
            { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule'},
            { path: 'editCampaign', loadChildren: './editCampaign/editCampaign.module#EditCampaignModule'},
            { path: 'demoRoute', loadChildren: './demo/demo.module#DemoModule'},
            { path: 'manager', loadChildren: './managerDetails/manager.module#ManagerModule'},
            { path: 'customer', loadChildren: './viewCustomer/customer.module#CustomerModule'},
            { path: 'callInfo', loadChildren: './callInfo/callInfo.module#CallInfoModule'},
            { path: 'createCampaign', loadChildren: './newCampaign/newCampaign.module#NewCampaignModule'},
            { path: 'agentfeedback', loadChildren: './feedbackDetails/feedbackDetails.module#FeedBackDetailsModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
