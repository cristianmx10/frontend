import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import 'hammerjs';
@NgModule({
    imports:
        [
            BrowserAnimationsModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            MatButtonModule,
            MatListModule,
            MatCardModule,
            MatProgressSpinnerModule,
            MatFormFieldModule,
            MatInputModule,
            MatDividerModule,
            MatExpansionModule,
            MatBadgeModule,
            MatChipsModule,
            MatGridListModule
        ],
        exports:
        [
            BrowserAnimationsModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            MatButtonModule,
            MatListModule,
            MatCardModule,
            MatProgressSpinnerModule,
            MatFormFieldModule,
            MatInputModule,
            MatDividerModule,
            MatExpansionModule,
            MatBadgeModule,
            MatChipsModule,
            MatGridListModule
        ]
})
export class PizzaPartyAppModule { }