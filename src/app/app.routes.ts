import { RouterModule, Routes } from "@angular/router";


import { NotpageComponent } from './shared/notpage/notpage.component';
import { LoginComponent } from './login/login.component';


const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotpageComponent }
];
export const APP_ROUTES = RouterModule.forRoot(APPROUTES, { useHash: true });