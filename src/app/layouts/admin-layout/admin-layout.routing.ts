import { Routes } from '@angular/router';
import { CreateAccountComponent } from 'app/pages/create-account/create-account.component';

import { UserComponent } from '../../pages/user/user.component';
import { BlacksComponent } from '../../pages/blacks/blacks.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user',           component: UserComponent },
    { path: 'create-account',          component: CreateAccountComponent },
    { path: 'blacks',          component: BlacksComponent },
];
