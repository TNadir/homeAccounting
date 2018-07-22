import { NgModule } from '@angular/core';

//-----------MODULES
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { AuthModule } from './auth/auth.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//----------COMPONENTS
import { AppComponent } from './app.component';


//-----------ROUTING
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    SystemModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UsersService, AuthService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
