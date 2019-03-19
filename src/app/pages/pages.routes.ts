import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HuespedesComponent } from './huespedes/huespedes.component';
import { DispRoomsComponent } from './dispRooms/disp-rooms.component';

const PAGESROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'reservas', component: ReservaComponent },
            { path: 'huespedes', component: HuespedesComponent },
            { path: 'Disponibilidad', component: DispRoomsComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
    },
];
export const PagesRoutes = RouterModule.forRoot(PAGESROUTES);