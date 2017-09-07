import { Routes } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemComponent } from './media-item.component'
const appRoutes: Routes = [
    { path: 'add', component: MediaItemFormComponent },
    { path: ':medium', component: MediaItemComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all'}
];
