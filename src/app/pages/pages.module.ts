import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HuespedesComponent } from './huespedes/huespedes.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PizzaPartyAppModule } from '../material/material.module';
import { PagesRoutes } from './pages.routes';
import { DispRoomsComponent } from './dispRooms/disp-rooms.component';

@NgModule({
    declarations: [
        HomeComponent,
        ReservaComponent,
        HuespedesComponent,
        PagesComponent,
        DispRoomsComponent
    ],
    exports: [
        HomeComponent,
        ReservaComponent,
        HuespedesComponent,
        PagesComponent
    ],
    imports:[
        SharedModule,
        PizzaPartyAppModule,
        PagesRoutes
    ]
})
export class PagesModule { }