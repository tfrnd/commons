import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import {UsermgmtModule} from './feature/usermgmt/usermgmt.module';
import { UserregistrationService } from './shared/services/userregistration.service';
import { UinstatusService } from './shared/services/uinstatus.service';
import { HttpClientModule } from '@angular/common/http';
import { UinmgmtModule } from './feature/uinmgmt/uinmgmt.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NavigationModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UsermgmtModule,
    HttpClientModule,
    UinmgmtModule
  ],
  providers: [UserregistrationService, UinstatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
