import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule,MatFormFieldModule, MatSidenavModule,
  MatToolbarModule, 
  MatListModule,
  MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HeadComponent } from './layout/head.component';
import { LeftPanelComponent } from './layout/left-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/login/logout.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeListComponent } from './components/employees/employee-list.component';
import { AuthGuard } from './helpers/can-activate-auth-guard';
import { Helpers } from './helpers/helpers';
import { TokenService } from './services/token.service';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LeftPanelComponent,
    DashboardComponent,
    LogoutComponent,
    LoginComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: 
  [
    AuthGuard,
    Helpers,
    TokenService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
