import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
// import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    NoopAnimationsModule,
  ],
  providers: [NoopAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
