import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallStatusComponent } from './callStatus.component';

const routes: Routes = [
    {
        path: '',
        component: CallStatusComponent,
        children: [
         //      { path: '', redirectTo: 'active', pathMatch: 'prefix' },
               { path: 'active', loadChildren: './active/active.module#ActiveModule' },
               { path: 'callBack', loadChildren: './callBack/callBack.module#CallBackModule'},
        //     { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CallStatusRoutingModule {}
