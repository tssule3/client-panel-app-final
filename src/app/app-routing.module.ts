import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientsComponent} from './components/clients/clients.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SettingsComponent} from './components/settings/settings.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent},
  {path: 'client/:id', component: ClientDetailsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
