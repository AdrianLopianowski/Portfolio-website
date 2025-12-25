import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./main/header.component";
import { IntroComponent } from "./main/intro.component";
import { ContactMePlsComponent } from "./main/contactMePls.component";
import { AboutMeComponent } from "./main/aboutMe.component";
import { UniversityComponent } from "./main/university.component";
import { ProjectsComponent } from "./main/projects.component";
import { OverviewComponent } from "./main/overview.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroComponent,
    ContactMePlsComponent,
    AboutMeComponent,
    UniversityComponent,
    ProjectsComponent,
    OverviewComponent,
  ],
  template: `
    <app-header></app-header>
    <app-intro></app-intro>
    <app-about-me></app-about-me>
    <app-university></app-university>
    <app-projects></app-projects>
    <app-overview></app-overview>
    <app-contact-me-pls></app-contact-me-pls>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "PortfolioApp";
}
