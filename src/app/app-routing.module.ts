import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './content/about-component/about-component.component';
import { ContactComponentComponent } from './content/contact-component/contact-component.component';
import { HomeComponentComponent } from './content/home-component/home-component.component';
import { PengalamanComponentComponent } from './content/pengalaman-component/pengalaman-component.component'
import { PortofolioComponentComponent } from './content/portofolio-component/portofolio-component.component';
import { SkillsComponentComponent } from './content/skills-component/skills-component.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'pengalaman', component: PengalamanComponentComponent },
  { path: 'skill', component: SkillsComponentComponent },
  { path: 'portofolio', component: PortofolioComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
