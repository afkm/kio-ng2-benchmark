import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KioNg2BenchmarkModule } from 'kio-ng2-benchmark'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KioNg2BenchmarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
