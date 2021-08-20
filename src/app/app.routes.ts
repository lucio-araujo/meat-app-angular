import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { Routes } from "@angular/router";

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent, 
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'order', loadChildren: 'app/order/order.module#OrderModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
    {path: '**', component: NotFoundComponent}
]
