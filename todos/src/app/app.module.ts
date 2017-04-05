import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';

const appRoutes: Routes = [
  { path: 'howto', component: HowtoComponent },
  { path: 'examples', component: ExamplesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HowtoComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



