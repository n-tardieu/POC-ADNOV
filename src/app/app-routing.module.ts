import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuyingPropertyComponent } from './components/buying-property/buying-property.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    component: ContentComponent,
    pathMatch: 'full'
  }, {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  }, {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  }]
},
{
  path: 'buy',
  component: BuyingPropertyComponent
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
