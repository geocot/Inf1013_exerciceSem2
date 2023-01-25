import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { ClassNotePipe } from './class-note.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ClassNotePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
