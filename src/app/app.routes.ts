import { CardsComponent } from './../cards/cards.component';
import { Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
export const routes: Routes = [

    {
        path: '',
        component: LandingComponent
    },

    {
        path: 'recipe',
        component: CardsComponent
    }
];
