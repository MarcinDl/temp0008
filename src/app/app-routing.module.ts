import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: 'temp0008/', redirectTo: "home", pathMatch: "full" },
  { path: 'temp0008/home', component: MainPageComponent },
  { path: 'temp0008/about-me', component: AboutMeComponent },
  { path: 'temp0008/contact', component: ContactComponent },
  { path: 'temp0008/my-skills', component: MySkillsComponent },
  { path: 'temp0008/my-portfolio', component: MyPortfolioComponent },
  { path: 'temp0008/nav-bar', component: NavBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
