import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyingPropertyComponent } from './components/buying-property/buying-property.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/map/about/about.component';
import { MapComponent } from './components/map/map.component';
import { ScoreComponent } from './components/map/score/score.component';
import { PropertyDetailsComponent } from './components/property/property-details/property-details.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { PropertyComponent } from './components/property/property.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      {
        path: '',
        component: PropertyListComponent,
        pathMatch: 'full'
      }, {
        path: 'more/:id',
        component: PropertyDetailsComponent,
        pathMatch: 'full'
      }]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        pathMatch: 'full'
      }, {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
      }]
  },
  {
    path: 'picture',
    component: BuyingPropertyComponent
  },
  {
    path: 'map',
    component: MapComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
        pathMatch: 'full'
      }, {
        path: 'score',
        component: ScoreComponent,
        pathMatch: 'full'
      }]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }, {
    path: '**', redirectTo: '', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
