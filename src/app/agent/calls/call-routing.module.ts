import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallComponent } from './call.component';

const routes: Routes = [
    {
        path: '',
        component: CallComponent,
        children: [
            { path: '', redirectTo: 'dialler', pathMatch: 'prefix' },
            { path: 'dialler', loadChildren: './Dialler/dialler.module#DiallerModule' },
            // { path: 'phoneBook', loadChildren: './PhoneBook/phoneBook.module#PhoneBookModule'},
            // { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CallRoutingModule {}
