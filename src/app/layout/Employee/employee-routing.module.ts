import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        children: [
            { path: '', redirectTo: 'AllManager', pathMatch: 'prefix' },
            { path: 'AllManager', loadChildren: './AllManager/allmanager.module#AllManagerModule' },
            { path: 'AllAgents', loadChildren: './AllAgent/allagents.module#AllAgentsModule' },
            // { path: 'AgentAssignment', loadChildren: './AssignedAgent/assignedAgent.module#AssignedAgentModule' },
            { path: 'edit', loadChildren: './EditAssignedAgent/editAssignedAgent.module#EditAssignedAgentModule' },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {}