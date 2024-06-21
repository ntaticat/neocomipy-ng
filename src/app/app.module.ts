import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MainPageComponent, MainLayoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), provideHttpClient()],
  bootstrap: [AppComponent],
  exports: [MainLayoutComponent],
})
export class AppModule {}
