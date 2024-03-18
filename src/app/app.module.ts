import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { LogoutcompComponent } from './logoutcomp/logoutcomp.component';
import { WwocompComponent } from './wwocomp/wwocomp.component';
import { WwoentrycompComponent } from './wwoentrycomp/wwoentrycomp.component';
import { BackgroundcompComponent } from './backgroundcomp/backgroundcomp.component';
import { BackgroundentrycompComponent } from './backgroundentrycomp/backgroundentrycomp.component';
import { InquirycompComponent } from './inquirycomp/inquirycomp.component';
import { MyinquiriescompComponent } from './myinquiriescomp/myinquiriescomp.component';
import { MyinquiriesentrycompComponent } from './myinquiriesentrycomp/myinquiriesentrycomp.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    LogincompComponent,
    LogoutcompComponent,
    WwocompComponent,
    WwoentrycompComponent,
    BackgroundcompComponent,
    BackgroundentrycompComponent,
    InquirycompComponent,
    MyinquiriescompComponent,
    MyinquiriesentrycompComponent,
    RegistercomponentComponent,
    ErrorcompComponent,
    NavbarcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
