import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
    SidebarService
} from './service.index';

@NgModule({
    imports:[
        CommonModule,
        HttpClientModule
    ],
    providers:[
        SidebarService
    ]
})
export class ServiceModule{}