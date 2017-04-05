import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MouseventComponent } from './mousevent/mousevent.component';
import { XmlhttpComponent } from './xmlhttp/xmlhttp.component';


const appRoutes: Routes = [
  { path: 'mousevent', component: MouseventComponent },
  { path: 'xmlhttp', component: XmlhttpComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MouseventComponent,
    XmlhttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
