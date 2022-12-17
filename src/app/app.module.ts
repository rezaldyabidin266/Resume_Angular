import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';


// Create Component
import { NavbarComponentComponent } from './component/navbar-component/navbar-component.component';
import { HomeComponentComponent } from './content/home-component/home-component.component';
import { MainComponentComponent } from './content/main-component/main-component.component';
import { AboutComponentComponent } from './content/about-component/about-component.component';
import { SkillsComponentComponent } from './content/skills-component/skills-component.component';
import { PengalamanComponentComponent } from './content/pengalaman-component/pengalaman-component.component';
import { PortofolioComponentComponent } from './content/portofolio-component/portofolio-component.component';
import { ContactComponentComponent } from './content/contact-component/contact-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    MainComponentComponent,
    AboutComponentComponent,
    SkillsComponentComponent,
    PengalamanComponentComponent,
    PortofolioComponentComponent,
    ContactComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    FormsModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
