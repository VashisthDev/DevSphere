import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AbooutComponent } from './pages/aboout/aboout.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FormsModule } from '@angular/forms'; // <-- import the FormsModule module
import { HttpClientModule } from '@angular/common/http';
import { ConsiderationsComponent } from './pages/considerations/considerations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbooutComponent,
    ServicesComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    ConsiderationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
