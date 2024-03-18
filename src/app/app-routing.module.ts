import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincompComponent } from './logincomp/logincomp.component';
import { LogoutcompComponent } from './logoutcomp/logoutcomp.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { BackgroundcompComponent } from './backgroundcomp/backgroundcomp.component';
import { InquirycompComponent } from './inquirycomp/inquirycomp.component';
import { WwocompComponent } from './wwocomp/wwocomp.component';
import { MyinquiriescompComponent } from './myinquiriescomp/myinquiriescomp.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';

const routes: Routes = [{ path: 'login', component: LogincompComponent },
{ path: 'logout', component: LogoutcompComponent },
{path: 'register', component: RegistercomponentComponent},
{path: 'background', component: BackgroundcompComponent},
{path: 'inquiry', component: InquirycompComponent},
{path: 'whowweare', component: WwocompComponent},
{path: 'myinquiries', component: MyinquiriescompComponent},
{path: '**', component: ErrorcompComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
