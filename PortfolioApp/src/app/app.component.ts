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

    <main class="pt-24 px-4">
      <section id="home" class="min-h-screen flex flex-col justify-center">
        <app-intro></app-intro>
      </section>

      <section id="about" class="min-h-screen pt-10">
        <app-about-me></app-about-me>
        <app-university></app-university>
        <app-overview></app-overview>
      </section>

      <section id="projects" class="min-h-screen pt-10">
        <app-projects></app-projects>
      </section>

      <section id="contact" class="min-h-[80vh] pt-10">
        <app-contact-me-pls></app-contact-me-pls>
      </section>
    </main>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "PortfolioApp";
}
