import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';

const routes: Routes = [
    {
        path: '',
        component: AgentComponent,
        children: [
            { path: '', redirectTo: 'agentDashboard', pathMatch: 'prefix' },
            { path: 'agentDashboard', loadChildren: './agent-dashboard/agent-dashboard.module#AgentDashboardModule' },
            { path: 'call', loadChildren: './calls/call.module#CallModule'},
            // { path: 'calendar', loadChildren: './calendar/view.module#ViewModule'},
            // { path: 'callStatus', loadChildren: './callStatus/callStatus.module#CallStatusModule'},
            { path: 'active', loadChildren: './status/active/active.module#ActiveModule', runGuardsAndResolvers: 'always'},
            { path: 'break', loadChildren: './status/break/break.module#BreakModule'},
            { path: 'callback', loadChildren: './status/callback/callback.module#CallBackModule'},
            { path: 'manualdial', loadChildren: './status/manualDial/manualDial.module#ManualDialModule'},
            { path: 'training', loadChildren: './status/training/training.module#TrainingModule'},
            { path: 'meetwithcustomer', loadChildren: './status/meetingWithCustomer/customerMeet.module#CustomerMeetModule'},

            //Testing
            { path: 'setting', loadChildren: './setting/setting.module#SettingModule'},
            { path: 'scheduledCalls', loadChildren: './scheduled-calls/scheduledCall.module#ScheduledCallModule'},
            { path: 'myNotes', loadChildren: './my-notes/my-notes.module#MyNotesModule'},
            { path: 'feedback', loadChildren: './agentFeedbackForm/agentfeedback.module#AgentFeedbackModule'},

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgentRoutingModule {}
