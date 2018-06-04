import { NgModule } from '@angular/core';

//-----------MODULES
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { AuthModule } from './auth/auth.module';

//----------COMPONENTS
import { AppComponent } from './app.component';


//-----------ROUTING
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
