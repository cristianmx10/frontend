import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NotpageComponent } from './notpage/notpage.component';
import { PizzaPartyAppModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
declarations:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotpageComponent,
],
exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotpageComponent
],
imports:[
    PizzaPartyAppModule,
    RouterModule,
    CommonModule
]
})
export class SharedModule {}