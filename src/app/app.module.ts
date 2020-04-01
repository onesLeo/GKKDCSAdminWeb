import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { ContentsComponent } from './template/contents/contents.component';
import { InputJemaatComponent } from './data/jemaat/form/input-jemaat/input-jemaat.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'form-jemaat', component: InputJemaatComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentsComponent,
    InputJemaatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
