import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';
// import { FarmResolve } from './farm.resolve';
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'prefix' },
    { path: 'admin', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },// canActivate: [AuthGuard]
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'manager', loadChildren: './manager/manager.module#ManagerModule', canActivateChild:[AuthGuard]},
    { path: 'agent', loadChildren: './agent/agent.module#AgentModule'},
    // try dashboard
    { path: 'dashboard', loadChildren: './try-dashboard/try-dashboard.module#TryDashboardModule' },

    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}



