import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { RedirectComponent } from './redirect.component';
import { WindowService, WindowFactory } from './window.service';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CookieLawBannerComponent } from './cookie-law-banner/cookie-law-banner.component';
import { AboutUsComponent } from './static/about-us.component';
import { FaqVolunteersComponent } from './static/faq-volunteers.component';
imports: [ RouterTestingModule ]
let href = fixture.debugElement.query(By.css('a')).nativeElement
    .getAttribute('href');
expect(href).toEqual('/settings/testing/edit/1'); // change file location

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'o-nas',
    component: AboutUsComponent
  },
  {
    path: 'faq-volunteers',
    component: FaqVolunteersComponent
  },
  {
    path: '**',
    component: RedirectComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OffersComponent,
    CookieLawBannerComponent,
    AboutUsComponent,
    FaqVolunteersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    CookieModule.forRoot()
  ],
  providers: [
    { provide: WindowService, useFactory: WindowFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
