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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
